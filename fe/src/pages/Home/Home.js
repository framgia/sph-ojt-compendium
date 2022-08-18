
import style from './Home.module.css';
import { Link } from 'react-router-dom';

const RegisterSuccess = () => {
  return (
    <div>
      <div className={style.outer}>
        <Link to="/login" className="item">
          <button className={style.button}>Login</button>
        </Link>
        <Link to="/Register" className="item">
          <button className={style.button2}>Register</button>
        </Link>
      </div>
      <div className={style.middle}>
        <div className={style.container}>
          <div className={style.position}>
            <img src="/images/logo.png" height={250} />
          </div>
        </div>
      </div>
    </div>

  );
};
export default RegisterSuccess;
