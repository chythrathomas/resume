import { useState } from "react";
import Card from "../UI/Card";
import classes from "./InputData.module.css";
import UseInput from "../hooks/use-input";

const InputData = (props) => {
  const {
    value: enteredName,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
    isValid: nameIsValid,
    reset: reset1,
  } = UseInput((value) => value.trim() !== "");

  const {
    value: enteredAge,
    inputChangeHandler: ageChangeHandler,
    inputBlurHandler: ageBlurHandler,
    hasError: ageHasError,
    isValid: ageIsValid,
    reset: reset2,
  } = UseInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    hasError: emailHasError,
    isValid: emailIsValid,
    reset: reset3,
  } = UseInput((value) => value.includes("@"));

  const {
    value: enteredDegree,
    inputChangeHandler: degreeChangeHandler,
    inputBlurHandler: degreeBlurHandler,
    hasError: degreeHasError,
    isValid: degreeIsValid,
    reset: reset4,
  } = UseInput((value) => value.trim() !== "");

  const [enteredExperience, setEnteredExperience] = useState("");
  const [enteredDetails, setEnteredDetails] = useState("");

  const experienceHandler = (event) => {
    setEnteredExperience(event.target.value);
  };
  const detailsHandler = (event) => {
    setEnteredDetails(event.target.value);
  };

  let formIsValid = false;

  if (nameIsValid && ageIsValid && emailIsValid && degreeIsValid) {
    formIsValid = true;
  }
  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredExperience("");
    setEnteredDetails("");

    if (!formIsValid) {
      return;
    }
    const resumeData = {
      name: enteredName,
      age: enteredAge,
      email: enteredEmail,
      degree: enteredDegree,
      experience: enteredExperience,
      details: enteredDetails
    };
    props.onAddResume(resumeData);
    reset1();
    reset2();
    reset3();
    reset4();
  };

  return (
    <Card>
      <form className={classes.form}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="enter your name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        ></input>
        {nameHasError && <p>Name shouldnot be empty!</p>}
        <label htmlFor="age">Age</label>
        <input
          type="text"
          htmlFor="age"
          placeholder="enter your age"
          onChange={ageChangeHandler}
          onBlur={ageBlurHandler}
          value={enteredAge}
        />
        {ageHasError && <p>Age shouldnot be empty!</p>}
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="enter email address"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && <p>Email shouldnot be empty!</p>}
        <label htmlFor="qualification">Qualification</label>
        <input
          type="text"
          id="qualification"
          onChange={degreeChangeHandler}
          onBlur={degreeBlurHandler}
          value={enteredDegree}
        />
        {degreeHasError && <p>Enter your qualification</p>}
        <label htmlFor="experience">Experience(if any)</label>
        <textarea
          type="text"
          id="experience"
          onChange={experienceHandler}
          value={enteredExperience}
        />

        <label htmlFor="description">Additional Details (if any)</label>
        <textarea
          type="text"
          id="description"
          onChange={detailsHandler}
          value={enteredDetails}
          placeholder="type here"
        />

        <div>
          <button disabled={!formIsValid} type="submit" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </form>
    </Card>
  );
};

export default InputData;
