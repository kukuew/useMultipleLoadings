import React, { useContext } from 'react';
import { LoadingContext } from '../contexts/LoadingContext';

const Loader = () => {
  const { isLoading } = useContext(LoadingContext);
  return <div>{isLoading && 'Loading...'}</div>;
};

export default Loader;
