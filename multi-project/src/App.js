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
      <div className="btn-container">
        {components.map((Component, index) => <button className="btn-component-selector" key={index} onClick={() => handleClick(index)}>{Component.name}</button>)}
      </div>
      <div className="component-container">
        {render && React.createElement(components[componentId].component)}
      </div>
    </div>
  );
}

export default App;
