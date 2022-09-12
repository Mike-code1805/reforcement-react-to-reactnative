import React from 'react';
import { Counter, CounterWithHook, Login, Users } from './components';
import { BasicTypes, LiteralObjects, Functions } from './typescript';

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduction</h1>
      {/* <BasicTypes /> */}
      {/* <LiteralObjects /> */}
      {/* <Functions /> */}
      {/* <Counter /> */}
      {/* <CounterWithHook /> */}
      {/* <Login /> */}
      <Users />
    </div>
  );
};

export default App;
