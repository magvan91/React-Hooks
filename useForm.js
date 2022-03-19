import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const reset = () => {
    setValues(initialState);
  };
  const handleChange = ({ target }) => {
    console.log("Values", values);
    setValues({ ...values, [target.name]: target.value });
  };
  return [values, handleChange, reset];
};
