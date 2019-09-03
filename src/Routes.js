import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Places from './components/Places'
import Signup from './components/Signup'
// import './styles/buttons.css'
import './styles/cards.css'
import './styles/filters.css'
import './styles/forms.css'
// import './styles/gallery.css'
import './styles/global.css'
import './styles/grid.css'
// import './styles/icons.css'
import './styles/nav.css'
// import './styles/reviews.css'
// import './styles/sidebar.css'
// import './styles/users.css'





class Routes extends React.Component {
	render () {
	  return (
	    <BrowserRouter>
	      <Switch>
	        <Route path='/' component={Signup} />
				{
						// <Route path='/signup' component={Signup} />
					}
	      </Switch>
	    </BrowserRouter>
	  )
	}
}

export default Routes
