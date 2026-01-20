import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const [errors, setErrors] = useState({});

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prev) => {
      const updatedInput = {
        ...prev,
        [inputIdentifier]: +newValue,
      };

      setErrors(validate(updatedInput));
      return updatedInput;
    });
  }

  function validate(input) {
    const errors = {};

    if (!input.initialInvestment || input.initialInvestment <= 0) {
      errors.initialInvestment = "Initial investment must be greater than 0";
    }

    if (!input.annualInvestment || input.annualInvestment <= 0) {
      errors.annualInvestment = "Annual investment must be greater than 0";
    }

    if (!input.expectedReturn || input.expectedReturn <= 0) {
      errors.expectedReturn = "Expected return must be greater than 0";
    }

    if (!input.duration || input.duration <= 0) {
      errors.duration = "Duration must be greater than 0";
    }

    return errors;
  }
  const hasErrors = Object.keys(errors).length > 0;
  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        onChange={handleChange}
        errors={errors}
      />

      {!hasErrors && <Results userInput={userInput} />}
    </>
  );
}

export default App;
