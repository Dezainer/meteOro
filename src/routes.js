import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import './style.css'

import Home from 'home/home'
import New from 'new/new'
import Single from 'single/single'

render((
	<Router history={ browserHistory }>
		<Route path="/" component={ Home }>
			<Route path="new" component={ New }/>
			<Route path=":key" component={ Single }/>
		</Route>
	</Router>
), document.getElementById('main'))