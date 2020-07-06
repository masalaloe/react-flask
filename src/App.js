import React from 'react';

import Main from './Components/Main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Form/Home';
import Login from './Components/Form/Login';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Home} exact/>
				<Route path="/login" component={Login}/>
			</Switch>
		</BrowserRouter>
		
	);
}

export default App;
