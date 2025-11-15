import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const LoadingAnimation = () => {
  return (
    <div
      className="loading-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
      }}
    >
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default LoadingAnimation;
