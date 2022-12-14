import React, { useReducer, useEffect } from 'react';

import { validate } from '../util/validators';
import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true
      }
    }
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValid || false
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, value, isValid, onInput]);

  const changeHandler = event => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH'
    });
  };

  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        className={!inputState.isValid && inputState.isTouched ? "text-red-400 placeholder-red-400 w-full border-2 border-red-500 rounded-md" : "text-gray-500 placeholder-gray-500 w-full border-2 border-violet-800 rounded-md"}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        list={props.datalist}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        className={!inputState.isValid && inputState.isTouched ?  "text-red-400 placeholder-gray-500 w-full border-2 border-red-500 rounded-md " :"text-gray-500 placeholder-gray-500 w-full border-2 border-violet-800 rounded-md"}
        placeholder={props.placeholder}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control w-full ${!inputState.isValid && inputState.isTouched &&
        'form-control--invalid'}`}
    >
      <label htmlFor={props.id} className={!inputState.isValid && inputState.isTouched ? "text-red-500" : "text-violet-800"} >{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p className="my-2 text-red-500">{props.errorText}</p>}
      
    </div>
  );
};

export default Input;
