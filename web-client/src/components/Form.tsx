import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface IInputBase {
  id: string;
  label: string;
  isRequired: boolean;
  placeholder: string;
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
  onFieldValueChange: (formValues: IFormValue[]) => void;
  onValidationChange: (isValid: boolean) => void;
}

interface IFormValue extends Pick<IInputBase, "id"> {
  value: string;
  isValid: boolean;
}

function Form(props: IProps) {
  const { t } = useTranslation();
  const [fieldValues, setFieldValues] = useState<IFormValue[]>(
    props.fields.map((field) => ({ id: field.id, value: "", isValid: false }))
  );
  const isFormValid = useRef<boolean>(false);
  const doesNeedValidation = useRef<boolean>(false);

  const handleFieldValueChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldIndex: number
  ): void => {
    const newValue = event.currentTarget.value;
    const updatedFieldValues = fieldValues.map((fieldValue, index) => {
      if (index === fieldIndex) return { ...fieldValue, value: newValue };
      return fieldValue;
    });
    setFieldValues(updatedFieldValues);
    doesNeedValidation.current = true;
  };

  const validateForm = (): void => {
    let isWholeFormValid = true;

    const updatedFieldValues = fieldValues.map((fieldValue, index) => {
      const isFieldRequired = props.fields[index].isRequired;

      if (isFieldRequired && fieldValue.value === "") {
        isWholeFormValid = false;
        return { ...fieldValue, isValid: false };
      }
      return { ...fieldValue, isValid: true };
    });

    setFieldValues(updatedFieldValues);
    isFormValid.current = isWholeFormValid;
    doesNeedValidation.current = false;
  };

  useEffect(() => {
    if (doesNeedValidation.current === false) return;
    validateForm();
  }, [fieldValues]);
  useEffect(() => {
    props.onValidationChange(isFormValid.current);
  }, [isFormValid]);

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
              onInput={(event) => handleFieldValueChange(event, index)}
            />
          )}

          {field.type === "textarea" && (
            <textarea
              className="form-control"
              placeholder={field.placeholder}
              onInput={(event) => handleFieldValueChange(event, index)}
            />
          )}

          {props.doShowValidation === true &&
            fieldValues[index].isValid === false && (
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
