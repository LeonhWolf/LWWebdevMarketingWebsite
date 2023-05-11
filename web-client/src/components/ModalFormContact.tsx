import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import Form from "./Form";
import type { IProps as IForm } from "./Form";
import { close } from "../store/modalSlice";
import type { RootState } from "../store";
import { sendMailFormContact } from "../services";

type FormValues = Parameters<IForm["onFieldValueChange"]>[0];

function ModalFormContact() {
  const modalElement = useRef<HTMLDivElement | null>(null);
  const modalBootstrap = useRef<Modal | null>(null);
  const [isMailRequestPending, setIsMailRequestPending] =
    useState<boolean>(false);
  const [doShowRequestError, setDoShowRequestError] = useState<boolean>(false);
  const [doShowRequestSuccess, setDoShowRequestSuccess] =
    useState<boolean>(false);
  const [doShowValidation, setDoShowValidation] = useState<boolean>(false);
  const formValues = useRef<FormValues>([]);
  const isFormValid = useRef<boolean>(false);

  const { t } = useTranslation();
  const isContactModalOpen = useSelector(
    (state: RootState) => state.modal.isContactModalOpen
  );
  const dispatch = useDispatch();
  const formFields: IForm["fields"] = [
    {
      type: "text",
      id: "name",
      label: t("modalContact.form.name.label"),
      isRequired: true,
      placeholder: t("modalContact.form.name.placeholder"),
    },
    {
      type: "email",
      id: "email",
      label: t("modalContact.form.email.label"),
      isRequired: true,
      placeholder: t("modalContact.form.email.placeholder"),
    },
    {
      type: "text",
      id: "subject",
      label: t("modalContact.form.subject.label"),
      isRequired: true,
      placeholder: t("modalContact.form.subject.placeholder"),
    },
    {
      type: "textarea",
      id: "message",
      label: t("modalContact.form.message.label"),
      isRequired: true,
      placeholder: t("modalContact.form.message.placeholder"),
    },
  ];

  const handleSendMailRequest = async (): Promise<void> => {
    try {
      setDoShowRequestSuccess(false);
      setDoShowRequestError(false);
      setIsMailRequestPending(true);

      const response = await sendMailFormContact({
        senderName: "some name",
        senderEmail: "some email",
        topic: "some topic",
        message: "some message",
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
  };

  const handleSendClick = async (): Promise<void> => {
    if (isFormValid.current === true) {
      setDoShowValidation(false);
      await handleSendMailRequest();
    }

    setDoShowValidation(true);
  };

  const updateFieldValues = (newFormValues: FormValues): void => {
    newFormValues.forEach((formValue, index) => {
      formValues.current[index] = formValue;
    });
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
              onFieldValueChange={updateFieldValues}
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
