import { useState } from "react";

const UseInput =(validateForm)=>{
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateForm(enteredValue);
  const hasError = isTouched && !isValid;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };
  return {
    value:enteredValue,
    inputChangeHandler,
    hasError,
    inputBlurHandler,
    reset,
    isValid
  };
};
export default UseInput;
