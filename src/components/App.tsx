import React, { useContext } from 'react';
import Loader from './Loader';
import LoadingSwitcher from './LoadingSwitcher';
import { LoadingContext } from '../contexts/LoadingContext';

function App() {
  const {
    setIsSceneLoading,
    isSceneLoading,
    setIsDataLoading,
    isDataLoading,
    setIsAssetsLoading,
    isAssetsLoading
  } = useContext(LoadingContext);
  return (
    <div className="App">
      <Loader />
      <LoadingSwitcher
        onClick={() => setIsSceneLoading((prev) => !prev)}
        isLoading={isSceneLoading}>
        Scene
      </LoadingSwitcher>
      <LoadingSwitcher
        onClick={() => setIsDataLoading((prev) => !prev)}
        isLoading={isDataLoading}>
        Data
      </LoadingSwitcher>
      <LoadingSwitcher
        onClick={() => setIsAssetsLoading((prev) => !prev)}
        isLoading={isAssetsLoading}>
        Assets
      </LoadingSwitcher>
    </div>
  );
}

export default App;
