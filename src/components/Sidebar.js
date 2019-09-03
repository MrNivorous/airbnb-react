import React from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends React.Component {
	render () {
		return (
				<div className="sidebar">
					<ul>
						<li className="">
							<Link to="profile.html">Profile</Link>
						</li>
						<li className="">
							<Link to="/bookings">Bookings</Link>
						</li>
						<li className="">
							<Link to="/favorites">Favorites</Link>
						</li>
						<li className="">
							<Link to="/host">Host</Link>
						</li>
					</ul>
				</div>
		)
	}
}

export default Sidebar
