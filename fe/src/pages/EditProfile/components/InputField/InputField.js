import React, { useState } from 'react';
import styles from './InputField.module.css';

const InputField = ({
  placeholder = '',
  className = '',
  type = 'text',
  onValueChange = () => {},
}) => {
  const [value, setValue] = useState('');

  const onTextChange = (e) => {
    setValue(e.target.value);
    onValueChange(e.target.value);
  };

  return (
    <div className={styles.field}>
      <input
        placeholder={placeholder}
        type={type}
        className={`${styles.inputField} ${className}`}
        value={value}
        onChange={onTextChange}
      />
    </div>
  );
};

export default InputField;
