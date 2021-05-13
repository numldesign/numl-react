import React from 'react';
import { El } from '@numl-react/core';

function Dropzone(props: any) {
  const {
    width = '100%',
    height = '15.625rem',
    children,
    ...otherProps
  } = props;

  return (
    <El.FileInput width={width} height={height} {...otherProps} flow="row">
      <El.Block row="-3">
        <svg
          width="97"
          viewBox="0 0 97 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M72.5 12V9.25C72.4937 7.06392 71.6224 4.96918 70.0766 3.42338C68.5308 1.87758 66.4361 1.00635 64.25 1H9.25C7.06392 1.00635 4.96918 1.87758 3.42338 3.42338C1.87758 4.96918 1.00635 7.06392 1 9.25V53.25C1.00635 55.4361 1.87758 57.5308 3.42338 59.0766C4.96918 60.6224 7.06392 61.4937 9.25 61.5H12"
            stroke="#E1DEE4"
            strokeLinejoin="round"
          />
          <path
            d="M62.3455 35.752C65.2663 35.752 67.6341 33.4012 67.6341 30.5012C67.6341 27.6013 65.2663 25.2505 62.3455 25.2505C59.4247 25.2505 57.0569 27.6013 57.0569 30.5012C57.0569 33.4012 59.4247 35.752 62.3455 35.752Z"
            stroke="#E1DEE4"
            strokeMiterlimit="10"
          />
          <path
            d="M57.057 56.7159L42.0781 41.8676C41.1206 40.9216 39.8398 40.374 38.4943 40.3354C37.1487 40.2968 35.8386 40.77 34.8284 41.6597L14.75 59.3748"
            stroke="#E1DEE4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43.8365 72.5004L64.2192 52.2655C65.1571 51.3405 66.4045 50.7957 67.7204 50.7363C69.0364 50.677 70.3277 51.1072 71.3451 51.944L79.5001 58.691"
            stroke="#E1DEE4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M76.3125 72.2587L82.25 66.3672L88.1875 72.2587"
            stroke="#E1DEE4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M82.25 67.1858V79.1328"
            stroke="#E1DEE4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M83.5 58V22.6545C83.5 18.289 79.961 14.75 75.5955 14.75H22.6545C18.289 14.75 14.75 18.289 14.75 22.6545V64.5955C14.75 68.961 18.289 72.5 22.6545 72.5H68"
            stroke="#E1DEE4"
            strokeLinejoin="round"
          />
          <path
            d="M96.5 72.75C96.5 64.8828 90.1172 58.5 82.25 58.5C74.3828 58.5 68 64.8828 68 72.75C68 80.6172 74.3828 87 82.25 87C90.1172 87 96.5 80.6172 96.5 72.75Z"
            stroke="#E1DEE4"
            strokeMiterlimit="10"
          />
        </svg>
      </El.Block>
      <El.Button row="-2">Add file</El.Button>
      <El.Block row="-1">or drop files to upload</El.Block>
      {children}
    </El.FileInput>
  );
}

export default Dropzone;
