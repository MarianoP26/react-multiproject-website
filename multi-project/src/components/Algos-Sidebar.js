import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = ({selectAlgo}) => {


	return(
		<aside className="sidebar show-sidebar">
			<div className="sidebar-header">
				<h1>algo</h1>
			</div>
			<ul className="links">
				<li><Link to="/algos/ArrayRearrange" onClick={()=>selectAlgo('ArrayRearrange')}>test 1</Link></li>
				<li><Link to="/algos/CharCounter" onClick={()=>selectAlgo('CharCounter')}>test 2</Link></li>
				<li><Link to="/algos/ArrayRearrange" onClick={selectAlgo}>test 3</Link></li>
				<li><Link to="/algos/ArrayRearrange" onClick={selectAlgo}>test 4</Link></li>
			</ul>
		</aside>
	)
}

export default Sidebar;