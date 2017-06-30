import React from 'react';
import './LoadingIndicator.css';

const LoadingIndicator = ({ isLoading, pastDelay, error }) => {
  if (isLoading && pastDelay) {
    return <div className="spinner" />;
  }

  if (error) {
    return <div className="error">Error! Component failed to load.</div>;
  }
  return null
};

export default LoadingIndicator;
