import React, { useState } from 'react';

const MainPage = () => {
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return <h1>Test</h1>;
};

export default MainPage;
