import { useState } from "react";

export const useFormInput = (initial) => {
  const [value, setValue] = useState(initial.initialvalue || "");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
    name: initial.name,
    type: initial.type || "text",
  };
};
