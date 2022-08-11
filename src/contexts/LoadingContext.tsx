import React, { useEffect, useState } from 'react';
import useMultipleLoadings from '../hooks/useMultipleLoadings';

interface Props {
  children?: React.ReactNode;
}

interface LoadingContext {
  isLoading: boolean;
  isSceneLoading: boolean;
  isDataLoading: boolean;
  isAssetsLoading: boolean;
  setIsSceneLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDataLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAssetsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState: LoadingContext = {
  isLoading: true,
  isAssetsLoading: true,
  isDataLoading: true,
  isSceneLoading: true,
  setIsAssetsLoading: () => {},
  setIsDataLoading: () => {},
  setIsSceneLoading: () => {}
};

const LoadingContext = React.createContext<LoadingContext>(initialState);

const LoadingContextProvider: React.FC<Props> = ({ children }) => {
  const { isLoading, watchLoading } = useMultipleLoadings();
  const [isSceneLoading, setIsSceneLoading] = useState(
    initialState.isSceneLoading
  );
  const [isDataLoading, setIsDataLoading] = useState(
    initialState.isDataLoading
  );
  const [isAssetsLoading, setIsAssetsLoading] = useState(
    initialState.isAssetsLoading
  );

  useEffect(() => {
    watchLoading('scene', isSceneLoading);
    watchLoading('data', isDataLoading);
    watchLoading('assets', isAssetsLoading);
  }, [isSceneLoading, isDataLoading, isAssetsLoading]);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        isAssetsLoading,
        isDataLoading,
        isSceneLoading,
        setIsAssetsLoading,
        setIsDataLoading,
        setIsSceneLoading
      }}>
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingContextProvider };
