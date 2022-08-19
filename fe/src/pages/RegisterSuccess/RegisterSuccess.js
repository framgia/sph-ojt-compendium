
import style from './RegisterSuccess.module.css';
import { Link } from 'react-router-dom';

const RegisterSuccess = () => {
  return (
    <div className={style.outer}>
      <div className={style.middle}>
        <div className={style.container}>
          <img src="/images/logo.png" />
        </div>
        <h3>Congratulations!</h3>
        <p>
          You have successfully created an account!
          <br />
          <Link to="/login" className="item">
            <button className={style.button}>Login</button>
          </Link>
        </p>
      </div>
    </div >

  );
};
export default RegisterSuccess;
