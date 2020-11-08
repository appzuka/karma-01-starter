import React, { useState } from 'react';

function ComponentWithState() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = React.useState(0);
  return <div id='outer-wrapper'>
      <p id='count-result'>You clicked {count} times</p>
      <button id='count-button' onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>;
}

export {
  ComponentWithState
}