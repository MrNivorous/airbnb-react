import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Thumbnail from './Thumbnail'
import {Link} from 'react-router-dom'


class Host extends React.Component {
	state = { places : [
		{background: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg', type: "Entire Villa • 7 Rooms", title: "Luxury Villa Indu Siam", location: "Koh Samui, Thailand", price: "$200/night", reviews: "29 reviews" }, {background: 'https://a0.muscache.com/4ea/air/v2/pictures/eee424d0-ca05-4405-8bdb-e5caf2db3fbe.jpg', type: "Entire House • 1 Room", title: "Dreamy Tropical Tree House", location: "Hilo Forest, Hawaii", price: "$200/night", reviews: "12 reviews" }]
	}
	render () {
		return (
			<div>
				<Nav />
				<div className="grid medium">
				<div className="grid sidebar-left">
				<Sidebar />
				<div className="content">
					<Link className="button primary" to="/create">Host new place</Link>
					<hr></hr>
					<h2>Places I'm hosting</h2>
					<div className="grid two">
						{this.state.places.map((place, index) => {return  (<Thumbnail key={index} place={place} />)})}
					</div>
				</div>
				</div>
				</div>
				</div>
		)
	}
}

export default Host
