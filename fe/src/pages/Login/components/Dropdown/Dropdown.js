import style from './Dropdown.module.css';

const Dropdown = ({ options, name, defaultValue }) => {
  return (
    <select className={style.select} name={name} id="">
      <option value="">{defaultValue}</option>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Dropdown;
