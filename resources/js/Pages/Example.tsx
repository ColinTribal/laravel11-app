import React from 'react';
import Button from '../Components/Button';
const Example = () => {

    const message: string = "Hello World";

  return <div>{message}, Inertia.js with React and TypeScript!
  <Button type="button" onClick={() => alert('Hello World')}>
    Click me
  </Button>
  </div>;
};

export default Example;