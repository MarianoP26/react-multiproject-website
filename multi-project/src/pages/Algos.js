import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Sidebar from '../components/Algos-Sidebar';
//algos
import SelectedAlgo from '../algos/SelectedAlgo';


const Algos = () => {

	const selectAlgo = (selected) => {
		console.log(selected);
	}

  return (
    <section className="section about-section">
			<Router>
				<Sidebar selectAlgo={selectAlgo}/>
				<Switch>
					<Route path="/algos/:name">
						<SelectedAlgo/>
					</Route>
				</Switch>
			</Router>
    </section>
  )
}

export default Algos