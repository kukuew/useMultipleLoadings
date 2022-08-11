import React from 'react';

interface Props {
  onClick: () => void;
  isLoading: boolean;
  children?: React.ReactNode;
}

const LoadingSwitcher: React.FC<Props> = ({ children, isLoading, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ color: isLoading ? 'red' : 'green' }}>
      {children}
    </button>
  );
};

export default LoadingSwitcher;
