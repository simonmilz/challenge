import React, {Component} from 'react';

import './App.css';
import 'semantic-ui-css/semantic.min.css'

import Person from "./person/Person";
class App extends Component {

	render() {
		return (
			<div className="App">
         <Person/>
			</div>
		);
	}
}

export default App;
