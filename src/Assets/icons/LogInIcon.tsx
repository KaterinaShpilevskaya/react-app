import React from "react";

export const LogInIcon = ({ width = "86", height = "84", fill = "none" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 86 84"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M85 0L85 84" stroke="#5360CD" />
      <path d="M1 0L1 83" stroke="#5360CD" />
      <path
        d="M51 50V48C51 46.9391 50.5786 45.9217 49.8284 45.1716C49.0783 44.4214 48.0609 44 47 44H39C37.9391 44 36.9217 44.4214 36.1716 45.1716C35.4214 45.9217 35 46.9391 35 48V50"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M43 40C45.2091 40 47 38.2091 47 36C47 33.7909 45.2091 32 43 32C40.7909 32 39 33.7909 39 36C39 38.2091 40.7909 40 43 40Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
