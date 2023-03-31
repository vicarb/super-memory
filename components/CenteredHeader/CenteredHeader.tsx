import React from 'react';

const CenteredHeader = ({ header, subheader }) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">{header}</h1>
      <p className="text-lg text-gray-700">{subheader}</p>
    </div>
  );
};

export default CenteredHeader;