import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import Form from "./Form";
import type { IProps as IForm } from "./Form";
import { close } from "../store/modalSlice";
import type { RootState } from "../store";
import { sendMailFormContact } from "../services";

function ModalFormContact() {
  const modalElement = useRef<HTMLDivElement | null>(null);
  const modalBootstrap = useRef<Modal | null>(null);
  const [isMailRequestPending, setIsMailRequestPending] =
    useState<boolean>(false);
  const [doShowRequestSuccess, setDoShowRequestSuccess] =
    useState<boolean>(false);
  const [doShowRequestError, setDoShowRequestError] = useState<boolean>(false);
  const [doShowValidation, setDoShowValidation] = useState<boolean>(false);
  const isFormValid = useRef<boolean>(false);

  const { t, i18n } = useTranslation();
  const isContactModalOpen = useSelector(
    (state: RootState) => state.modal.isContactModalOpen
  );
  const dispatch = useDispatch();
  const getInitialFormFields = (): IForm["fields"] => [
    {
      type: "text",
      id: "name",
      label: t("modalContact.form.name.label"),
      isRequired: true,
      placeholder: t("modalContact.form.name.placeholder"),
      value: "",
    },
    {
      type: "email",
      id: "email",
      label: t("modalContact.form.email.label"),
      isRequired: true,
      placeholder: t("modalContact.form.email.placeholder"),
      value: "",
    },
    {
      type: "text",
      id: "subject",
      label: t("modalContact.form.subject.label"),
      isRequired: true,
      placeholder: t("modalContact.form.subject.placeholder"),
      value: "",
    },
    {
      type: "textarea",
      id: "message",
      label: t("modalContact.form.message.label"),
      isRequired: true,
      placeholder: t("modalContact.form.message.placeholder"),
      value: "",
    },
  ];
  const [formFields, setFormFields] = useState<IForm["fields"]>(
    getInitialFormFields()
  );

  const handleSendMailRequest = async (): Promise<void> => {
    try {
      setDoShowRequestSuccess(false);
      setDoShowRequestError(false);
      setIsMailRequestPending(true);

      const response = await sendMailFormContact({
        senderName: formFields[0].value ?? "",
        senderEmail: formFields[1].value ?? "",
        topic: formFields[2].value ?? "",
        message: formFields[3].value ?? "",
      });

      if (response.status === 200) {
        setDoShowRequestSuccess(true);
      } else {
        setDoShowRequestError(true);
      }

      setIsMailRequestPending(false);
    } catch (error) {
      console.error(error);
      setIsMailRequestPending(false);
      setDoShowRequestError(true);
    }
  };

  const handleModalHidden = (): void => {
    dispatch(close());
    setDoShowRequestSuccess(false);
    setDoShowRequestError(false);
    setDoShowValidation(false);

    const updatedFormFields = getInitialFormFields().map((formField) => ({
      ...formField,
      value: "",
    }));
    setFormFields(updatedFormFields);
  };

  const handleSendClick = async (): Promise<void> => {
    if (isFormValid.current === false) {
      setDoShowValidation(true);
      return;
    }

    await handleSendMailRequest();
  };

  const updateFormFieldValues = (
    newValue: string,
    fieldIndex: number
  ): void => {
    const updatedFormFields = formFields.map((formField, index) => {
      if (index === fieldIndex) {
        return { ...formField, value: newValue };
      }
      return { ...formField };
    });
    setFormFields(updatedFormFields);
  };

  useEffect(() => {
    if (isContactModalOpen === true) {
      modalBootstrap.current?.show();
      return;
    }
    if (isContactModalOpen === false) {
      modalBootstrap.current?.hide();
      return;
    }
  }, [isContactModalOpen]);

  useEffect(() => {
    if (modalElement.current === null) {
      console.error(
        "Modal could not be instantiated. The HTML element is 'null'."
      );
      return;
    }

    const element = modalElement.current;

    element.addEventListener("hidden.bs.modal", handleModalHidden);
    modalBootstrap.current = new Modal(modalElement.current);

    return () => {
      element.removeEventListener("hidden.bs.modal", handleModalHidden);
      modalBootstrap.current?.dispose();
    };
  }, []);

  useEffect(() => {
    const languageUpdatedFormFields = getInitialFormFields().map(
      (initialFormField, index) => ({
        ...initialFormField,
        value: formFields[index].value,
      })
    );
    setFormFields(languageUpdatedFormFields);
  }, [i18n.language]);

  return (
    <div
      ref={modalElement}
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {t("modalContact.title")}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <Form
              doShowValidation={doShowValidation}
              fields={formFields}
              onFieldValueChange={updateFormFieldValues}
              onValidationChange={(isValid) => {
                isFormValid.current = isValid;
              }}
            />
            {doShowRequestSuccess === true && (
              <p className="text-success mb-0">
                {t("modalContact.request.success")}
              </p>
            )}
            {doShowRequestError === true && (
              <p className="text-danger mb-0">
                {t("modalContact.request.error")}
              </p>
            )}
          </div>

          <div className="modal-footer justify-content-between">
            <button
              type="button"
              className="btn btn-outline-danger"
              data-bs-dismiss="modal"
            >
              {t("modalContact.buttons.close")}
            </button>
            <button
              type="button"
              className={`btn btn-primary ${
                isMailRequestPending === true && "disabled"
              }`}
              onClick={handleSendClick}
            >
              {t("modalContact.buttons.send")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalFormContact;
