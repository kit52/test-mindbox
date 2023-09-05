import React, { useState } from 'react';

const MainPage = () => {
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return <div>1</div>;
};

export default MainPage;
