import { useRef, useState, useEffect } from 'react';
import { User, ReqResListado } from '../interfaces/requestResponse';
import { requestResponse } from '../api/requestResponse';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const paginaRef = useRef(1);

  const chargeUsers = async () => {
    const resp = await requestResponse.get<ReqResListado>('/users', {
      params: {
        page: paginaRef.current,
      },
    });

    if (resp.data.data.length > 0) {
      setUsers(resp.data.data);
    } else {
      paginaRef.current--;
      alert('There is no more users');
    }
  };

  useEffect(() => {
    chargeUsers();
  }, []);

  const nextPage = () => {
    paginaRef.current++;
    chargeUsers();
  };

  const previousPage = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
      chargeUsers();
    }
  };

  return {
    users,
    nextPage,
    previousPage,
  };
};
