import Breakline from './components/Breakline/Breakline';
import InputField from './components/InputField/InputField';
import Dropdown from './components/Dropdown/Dropdown';
import style from './Register.module.css';
import { Link } from 'react-router-dom';

const Register = () => {

  const genderOptions = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    },
  ];

  return (
    <div className={style.row}>
      <div className={style.columnright}>
        <div className={style.container}>
          <div className={style.outer}>
            <div className={style.middle}>
              <div className={style.fields}>
                <h1>Sign Up</h1>
                <InputField placeholder="First Name" type="text" />
                <Breakline></Breakline>
                <InputField placeholder="Last Name" type="text" />
                <Breakline></Breakline>
                <Dropdown name='Sex'
                  options={genderOptions}
                  defaultValue="Sex"
                />
                <Breakline></Breakline>
                <InputField placeholder="Birthdate" type="date" />
                <Breakline></Breakline>
                <InputField placeholder="Email Address" type="email" />
                <Breakline></Breakline>
                <InputField placeholder="Password" />
                <Breakline></Breakline>

                <Breakline></Breakline>
                <div>
                  <button className={style.button2}> CREATE! </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className={style.column}>
        <div className={style.containerRight}>
          <Link to="/login">
            <button className={style.button}> LOG IN </button>
          </Link>
          <div className={style.image}>

            <img src='images/logo.png' />
          </div>
        </div>
      </div>
    </div >

  );
};
export default Register;
