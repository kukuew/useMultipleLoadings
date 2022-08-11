import React, { useEffect, useState } from 'react';

interface Loaders {
  [key: string]: boolean;
}

const useMultipleLoadings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loaders, setLoaders] = useState<Loaders>({});
  const watchLoading = (key: string, value: boolean) => {
    setLoaders((prev) => {
      const newLoaders = { ...prev };
      newLoaders[key] = value;
      return newLoaders;
    });
  };

  useEffect(() => {
    setIsLoading(!Object.values(loaders).every((loader) => !loader));
  }, [loaders]);

  return {
    isLoading,
    watchLoading
  };
};

export default useMultipleLoadings;
