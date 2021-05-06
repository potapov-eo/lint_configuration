import React from 'react';
import { useDispatch } from 'react-redux';
import style from './ErrorSnackBar.module.css';
import { setAppError } from '../../store/app-reduser/app-reducer';

type ErrorSnackBarPropsType = {
  errorMessage: string;
};

export const ErrorSnackBar = (props: ErrorSnackBarPropsType) => {
  const { errorMessage } = { ...props };
  const dispatch = useDispatch();

  const onClickHandler = () => dispatch(setAppError(null));

  return (
    <div className={style.notification}>
      <div className={style.text}> {errorMessage} </div>
      <div className={`${style.close}`}>
        <div className={style.text} onClick={onClickHandler} aria-hidden="false">
          X
        </div>
      </div>
    </div>
  );
};
