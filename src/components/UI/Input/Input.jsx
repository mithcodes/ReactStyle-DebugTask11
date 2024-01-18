import React from 'react';
import classes from './Input.module.css';

const Input = ({ emailIsValid, enteredEmail, emailChangeHandler, validateEmailHandler }) => {
  return (
    <div
      className={`${classes.control} ${
        emailIsValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="email">E-Mail</label>
      <input
        type="email"
        id="email"
        value={enteredEmail}
        onChange={emailChangeHandler}
        onBlur={validateEmailHandler}
      />
    </div>
  );
}

export default Input;
