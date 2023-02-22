import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchGreeting } from '../redux/greetings/greetings';

const Greetings = () => {
  const greeting = useSelector((state) => state.greetings);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <>
      <h1>Random Messages:</h1>
      <p>{greeting}</p>
    </>
  );
};

export default Greetings;
