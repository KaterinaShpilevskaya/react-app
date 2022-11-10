import React from "react";

export const SearcIcon = ({ width = "86", height = "84", fill = "none" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 86 84"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M85 0L85 84" stroke="#5360CD" />
      <path d="M1.00001 0L1 84" stroke="#5360CD" />
      <path
        d="M42 48C45.866 48 49 44.866 49 41C49 37.134 45.866 34 42 34C38.134 34 35 37.134 35 41C35 44.866 38.134 48 42 48Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51 50L47 46"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
