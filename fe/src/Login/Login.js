import Breakline from './components/Breakline';
import InputField from './components/InputField';
import style from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <div className={style.row}>
      <div className={style.column}>
        <div className={style.container}>
          <div className={style.outer}>
            <div className={style.middle}>
              <div className={style.fields}>
                <h1>Log In</h1>
                <InputField placeholder="Email Address" type="email" />
                <Breakline></Breakline>
                <InputField placeholder="Password" />
                <Breakline></Breakline>
                <div>
                  <button className={style.button2}> LOGIN </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className={style.columnright}>
        <div className={style.containerRight}>
          <Link to="/register">
            <button className={style.button}> SIGN UP </button>
          </Link>
          <div className={style.image}>

            <img src='images/logo.png' />
          </div>
        </div>
      </div>
    </div >

  );
};
export default Login;
