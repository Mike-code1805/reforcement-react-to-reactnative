import { useState } from 'react';

export const useCounter = (inicial: number = 10) => {
  const [value, setvalue] = useState(inicial);

  const accumulate = (numero: number) => {
    setvalue(value + numero);
  };

  return {
    value,
    accumulate,
  };
};
