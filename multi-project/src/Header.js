import React from 'react';




const Header = () => {

	return (
		<header className="page-header">
      <div className="header-content">
          <div className="flexbox">
            <div className="flexbox-item">
              <div className="flexbox-content">
                <button className="button-header">Website</button>
              </div>
              </div>
            <div className="flexbox-item">
              <div className="flexbox-content">
                <button className="button-header">About</button>
              </div>
            </div>
            <div className="flexbox-item">
              <div className="flexbox-content">
                <button className="button-header">Contact</button>
              </div>
            </div>
            <div className="flexbox-item">
              <div className="flexbox-content">
                <button className="button-header">Saviola</button>
              </div>
            </div>
          </div>
      </div>
    </header>
	)
};


export default Header;