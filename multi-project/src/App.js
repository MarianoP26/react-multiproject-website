import './index.css';
import React, { useState } from 'react';
import components from './componentList';

function App() {

  const [componentId, setComponentId] = useState(0);
  const [render, setRender] = useState(false);

  const handleClick = (id) => {
    setComponentId(components[id].id);
    setRender(true);
};

  return (
    <div>
      <div>
        {components.map((Component, index) => <button className="btn-component-selecor" key={index} onClick={() => handleClick(index)}>{Component.name}</button>)}
      </div>
      <div>
        {render && React.createElement(components[componentId].component)}
      </div>
    </div>
  );
}

export default App;
