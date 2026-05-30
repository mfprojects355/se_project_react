import { useState } from "react";

export function useForm(inputValues) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = (newValues = inputValues) => {
    setValues(newValues);
  };

  return { values, handleChange, setValues, resetForm };
}
