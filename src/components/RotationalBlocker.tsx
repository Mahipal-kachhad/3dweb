import React from 'react';

const RotationBlocker = () => {
  return (
    <div className="fixed inset-0 z-50 flex-col items-center justify-center bg-black text-white md:hidden portrait:flex landscape:hidden">
      
      <svg
        className="h-24 w-24 animate-spin-slow text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M4 4v5h5M20 20v-5h-5M4 20h5v-5M20 4h-5v5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 9l4.5-4.5M9 15l-4.5 4.5M15 15l4.5 4.5M9 9L4.5 4.5"
        />
      </svg>
      
      <h2 className="mt-4 text-center text-xl font-semibold">
        Please rotate your device for the best experience
      </h2>

    </div>
  );
};

export default RotationBlocker;