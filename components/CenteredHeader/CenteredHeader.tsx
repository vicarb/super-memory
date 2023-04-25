import React from 'react';

type Props = {
  header: string;
  subheader: string;
};

const CenteredHeader = ({ header, subheader }: Props) => {
  return (
    <div className="text-center mt-4 pt-16">
      <h1 className="text-4xl mt-4 font-bold">{header}</h1>
      <p className="text-lg text-gray-700">{subheader}</p>
    </div>
  );
};

export default CenteredHeader;