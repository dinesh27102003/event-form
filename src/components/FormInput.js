import "./forminput.css";
import { useState } from "react";


const FormInput = (props) => {
  const { label, errorMessage, onChange, id, type, ...inputProps } = props;
  const [focused,setFocused]=useState(false);

  const isRadioType = type === "radio";
  const isTextareaType = type === "textarea";
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label htmlFor={id}>{label}</label>
      {isRadioType ? (
        <>
          <label>
            <input
              type={type}
              name={inputProps.name}
              value="yes"
              onChange={onChange}
            />
            Yes
          </label>
          <label>
            <input
              type={type}
              name={inputProps.name}
              value="no"
              onChange={onChange}
            />
            No
          </label>
        </>
      ) : isTextareaType ? (
        <textarea {...inputProps} onChange={onChange} />
      ) : (
        <input {...inputProps} type={type} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} min={new Date().toISOString().split('T')[0]} />
      )}
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
