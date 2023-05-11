import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface IInputBase {
  id: string;
  label: string;
  isRequired: boolean;
  placeholder: string;
  value: string;
}
export interface IEmailInput extends IInputBase {
  type: "email";
}
export interface ITextInput extends IInputBase {
  type: "text";
}
export interface ITextarea extends IInputBase {
  type: "textarea";
}

export interface IProps {
  doShowValidation: boolean;
  fields: (IEmailInput | ITextInput | ITextarea)[];
  onFieldValueChange: (newValue: string, index: number) => void;
  onValidationChange: (isValid: boolean) => void;
}

export interface IInputValidity extends Pick<IInputBase, "id"> {
  isValid: boolean;
}

function Form(props: IProps) {
  const { t } = useTranslation();
  const [fieldValidities, setFieldValidities] = useState<IInputValidity[]>(
    props.fields.map((field) => ({ id: field.id, isValid: false }))
  );
  const isFormValid = useRef<boolean>(false);

  const handleFieldValueChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldIndex: number
  ): void => {
    const newValue = event.currentTarget.value;
    props.onFieldValueChange(newValue, fieldIndex);
  };

  const validateForm = (): void => {
    let isWholeFormValid = true;

    const updatedFieldValidities = fieldValidities.map(
      (fieldValidity, index) => {
        const isFieldRequired = props.fields[index].isRequired;
        const fieldValue = props.fields[index].value;

        if (isFieldRequired && fieldValue === "") {
          isWholeFormValid = false;
          return { ...fieldValidity, isValid: false };
        }
        return { ...fieldValidity, isValid: true };
      }
    );

    setFieldValidities(updatedFieldValidities);
    isFormValid.current = isWholeFormValid;
  };

  useEffect(() => {
    validateForm();
  }, [props.fields]);
  useEffect(() => {
    props.onValidationChange(isFormValid.current);
  }, [isFormValid.current]);

  return (
    <form className="d-flex flex-column" style={{ rowGap: "25px" }}>
      {props.fields.map((field, index) => (
        <div key={field.id}>
          <label className="form-label">
            {field.label}
            {field.isRequired === true && (
              <span className="text-danger">&nbsp;*</span>
            )}
          </label>

          {(field.type === "email" || field.type === "text") && (
            <input
              className="form-control"
              type={field.type}
              placeholder={field.placeholder}
              value={field.value}
              onInput={(event) => handleFieldValueChange(event, index)}
            />
          )}

          {field.type === "textarea" && (
            <textarea
              className="form-control"
              placeholder={field.placeholder}
              value={field.value}
              onInput={(event) => handleFieldValueChange(event, index)}
            />
          )}

          {props.doShowValidation === true &&
            fieldValidities[index].isValid === false && (
              <div className="form-text text-danger">
                {t("forms.requiredMessage", { field: field.label })}
              </div>
            )}
        </div>
      ))}
    </form>
  );
}

export default Form;
