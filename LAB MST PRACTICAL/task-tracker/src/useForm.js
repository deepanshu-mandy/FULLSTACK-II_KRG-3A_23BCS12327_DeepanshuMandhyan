import { useState } from "react";

function useForm(initial) {

  const [values, setValues] = useState(initial);

  const ch = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  const reset = () => {
    setValues(initial);
  };

  return { values, ch, reset };
}

export default useForm;