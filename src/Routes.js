import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Places from './components/Places'
import Signup from './components/Signup'
import Login from './components/Login'
import Bookings from './components/Bookings'
import Confirm from './components/Confirm'
import Create from './components/Create'
import Favorites from './components/Favorites'
import Host from './components/Host'
import Profile from './components/Profile'
import './styles/buttons.css'
import './styles/cards.css'
import './styles/filters.css'
import './styles/forms.css'
// import './styles/gallery.css'
import './styles/global.css'
import './styles/grid.css'
// import './styles/icons.css'
import './styles/nav.css'
// import './styles/reviews.css'
import './styles/sidebar.css'
// import './styles/users.css'





class Routes extends React.Component {
	render () {
	  return (
	    <BrowserRouter>
	      <Switch>
					<Route path='/signup' component={Signup} />
					<Route path='/login' component={Login} />
					<Route path='/host' component={Host} />
					<Route path='/profile' component={Profile} />
					<Route path='/favorites' component={Favorites} />
					<Route path='/bookings' component={Bookings} />
					<Route path='/create' component={Create} />
					<Route path='/confirm' component={Confirm} />
	        <Route path='/' component={Places} />
	      </Switch>
	    </BrowserRouter>
	  )
	}
}

export default Routes
