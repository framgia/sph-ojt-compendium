import { useState } from 'react';
import styles from './Input.module.css';

const Input = ({
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
        className={`${styles.input} ${className}`}
        value={value}
        onChange={onTextChange}
      />
    </div>
  );
};

export default Input;
