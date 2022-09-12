import { useRef, useState, useEffect } from 'react';
import { User, ReqResListado } from '../interfaces/requestResponse';
import { requestResponse } from '../api/requestResponse';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const pageRef = useRef(1);

  const chargeUsers = async () => {
    const resp = await requestResponse.get<ReqResListado>('/users', {
      params: {
        page: pageRef.current,
      },
    });

    if (resp.data.data.length > 0) {
      setUsers(resp.data.data);
    } else {
      pageRef.current--;
      alert('There is no more users');
    }
  };

  useEffect(() => {
    chargeUsers();
  }, []);

  const nextPage = () => {
    pageRef.current++;
    chargeUsers();
  };

  const previousPage = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      chargeUsers();
    }
  };

  return {
    users,
    nextPage,
    previousPage,
  };
};
