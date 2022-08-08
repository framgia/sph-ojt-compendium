import React from 'react';

const Register = () => {
  return (
    <div className="ui placeholder segment">
      <div className="ui two column very relaxed stackable grid">
        <div className="column">
          <div className="sign-up fluid ui button">
            <i className="signup icon"></i>
            Sign Up
          </div>
        </div>
        <div className="middle aligned column">
          <div className="ui form">
            <div className="field">
              <label>First Name</label>
              <div className="ui left icon input">
                <input type="text" placeholder="First Name" />
              </div>
            </div>
            <div className="field">
              <label>Last Name</label>
              <div className="ui left icon input">
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="field">
              <label>Email</label>
              <div className="ui left icon input">
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="field">
              <label>Birthdate</label>
              <div className="ui left icon input">
                <input type="date" />
              </div>
            </div>
            <div className="field">
              <label>Sex</label>
              <div className="ui selection dropdown">
                <input type="hidden" name="gender" />
                <i className="dropdown icon"></i>
                <div className="default text">Gender</div>
                <div className="menu">
                  <div className="item" data-value="1">
                    Male
                  </div>
                  <div className="item" data-value="0">
                    Female
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <label>Password</label>
              <div className="ui left icon input">
                <input type="password" placeholder="Password" />
              </div>
            </div>
            <div className="ui blue submit button">CREATE!</div>
          </div>
        </div>
      </div>
      <div className="ui vertical divider"></div>
    </div>
  );
};

export default Register;
