import { useEffect, useRef } from "react";
import { Modal } from "bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import Form from "./Form";
import type { IProps as IForm } from "./Form";
import { close } from "../store/modalSlice";
import type { RootState } from "../store";

function ModalFormContact() {
  const modalElement = useRef<HTMLDivElement | null>(null);
  const modalBootstrap = useRef<Modal | null>(null);
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

  const handleModalHidden = (): void => {
    dispatch(close());
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
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
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
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <Form
              doShowValidation={false}
              fields={formFields}
              onFieldValueChange={() => {}}
              onValidationChange={() => {}}
            />
          </div>

          <div className="modal-footer justify-content-between">
            <button
              type="button"
              className="btn btn-outline-danger"
              data-bs-dismiss="modal"
            >
              {t("modalContact.buttons.close")}
            </button>
            <button type="button" className="btn btn-primary">
              {t("modalContact.buttons.send")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalFormContact;
