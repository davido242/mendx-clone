"use client";

import React, { FormEvent, useContext } from 'react';
import { StateContext } from '../AuthContext/StateContext'

function ExampleComponent() {
  const { name, setName } = useContext(StateContext);

  const handleNameChange = (e: { target: { value: string; }; }) => {
    setName(e.target.value);
  };

  return (
    <div className='py-48 bg-red-500'>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Hello, {name}!</p>
    </div>
  );
}

export default ExampleComponent;