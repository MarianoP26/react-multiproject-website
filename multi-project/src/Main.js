import React, {useState} from 'react';
import NoneSelected from './components/aside-components/NoneSelected';

const Main = () => {

  const [isSelected, setIsSelected] = useState(false);

	return (
		<section className="page-main">
      <div className="main-content">
        {isSelected || <NoneSelected/>}
      </div>
    </section>
	)
};


export default Main;