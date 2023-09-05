import React, { useState } from 'react';

const MainPage = () => {
    
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
          f
        </div>
    );
};

export default MainPage;
