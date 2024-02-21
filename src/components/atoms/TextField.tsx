import { ErrorMessage, FieldHookConfig, useField } from "formik";

interface ICustomInput {
  type: "text" | "password" | "number" | "textarea";
  placeholder?: string;
  name?: string;
  id?: string;
  customClass?: string;
  disabled?: boolean;
  label?: string;
  autoComplete?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  rows?: number;
  children?: React.ReactNode;
  hasChildren?: boolean;
}

const TextField: React.FC<FieldHookConfig<string> & ICustomInput> = (props) => {
  const {
    type,
    name,
    id,
    onChange,
    onBlur,
    disabled,
    customClass,
    placeholder,
    label,
    autoComplete = "off",
    rows,
    children,
    hasChildren,
  } = props;
  const [field] = useField(props);

  const renderInput = () => (
    <input
      className={`${customClass || "form-controls"} `}
      type={type}
      id={id}
      name={name || field.name}
      onChange={
        (onChange as React.ChangeEventHandler<HTMLInputElement>) ||
        field.onChange
      }
      disabled={disabled}
      placeholder={placeholder}
      autoComplete={autoComplete}
      onBlur={
        (onBlur as React.FocusEventHandler<HTMLInputElement>) || field.onBlur
      }
    />
  );

  const renderTextarea = () => (
    <textarea
      className={`${customClass || "form-controls"} `}
      id={id}
      name={name || field.name}
      onChange={
        (onChange as React.ChangeEventHandler<HTMLTextAreaElement>) ||
        field.onChange
      }
      rows={rows ?? 3}
      disabled={disabled}
      placeholder={placeholder}
      autoComplete={autoComplete}
      onBlur={
        (onBlur as React.FocusEventHandler<HTMLTextAreaElement>) || field.onBlur
      }
    />
  );

  const renderInputField = () => {
    if (type === "textarea") {
      return renderTextarea();
    }
    return renderInput();
  };

  const renderData = () => {
    if (hasChildren) {
      return children;
    }
    return renderInputField();
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-900">
        {label}
      </label>

      {renderData()}

      <ErrorMessage
        name={field.name}
        component={"div"}
        className="text-sm text-error"
      />
    </div>
  );
};

export default TextField;
