import { useState, useEffect } from "react";

const useValidation = (value, validators) => {
  const [validationResults, setValidationResults] = useState({
    isEmpty: true,
    isEmailError: false,
    minLength: false,
    maxLength: false,
    isInputValid: false,
  });

  useEffect(() => {
    const results = {};
    results.isEmpty = !value;
    results.isEmailError = !/^\S+@\S+\.\S+$/.test(value);
    results.minLength = value.length < validators.minLength;
    results.maxLength = value.length > validators.maxLength;
    results.isInputValid = !Object.values(results).some((result) => result);
    setValidationResults(results);
  }, [value, validators]);

  return validationResults;
};

const useInput = (initialValue, validators) => {
  const [value, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);
  const validationResults = useValidation(value, validators);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setIsTouched(true);
  };

  return { value, onChange, onBlur, isTouched, ...validationResults };
};

export default useInput;
