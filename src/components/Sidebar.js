import React from 'react'
import {NavLink} from 'react-router-dom'

class Sidebar extends React.Component {
	render () {
		return (
				<div className="sidebar">
					<ul>
						<li className="">
							<NavLink activeClassName="active" to="/profile">Profile</NavLink>
						</li>
						<li className="">
							<NavLink activeClassName="active" to="/bookings">Bookings</NavLink>
						</li>
						<li className="">
							<NavLink activeClassName="active" to="/favorites">Favorites</NavLink>
						</li>
						<li className="">
							<NavLink activeClassName="active" to="/host">Host</NavLink>
						</li>
					</ul>
				</div>
		)
	}
}

export default Sidebar
