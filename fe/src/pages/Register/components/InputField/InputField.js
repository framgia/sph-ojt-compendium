import { useState } from 'react';
import style from './InputField.module.css';

const InputField = ({
  className = '',
  type = 'text',
  placeholder = '',
  onValueChange = () => {},
}) => {
  const [value, setValue] = useState('');

  const onTextChange = (e) => {
    setValue(e.target.value);
    onValueChange(e.target.value);
  };

  return (
    <input
      type={type}
      className={`${style.inputField} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onTextChange}
    />
  );
};

export default InputField;
