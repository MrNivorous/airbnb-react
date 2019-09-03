import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Thumbnail from './Thumbnail'

class Favorites extends React.Component {
	state = { places : [
		{background: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg', type: "Entire Villa • 7 Rooms", title: "Luxury Villa Indu Siam", price: "$200/night", reviews: "12 reviews" },
		{background: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',type: "Entire Villa • 2 Rooms", title: "Luxury Hotel Indu Siam", price: "$150/night", reviews: "5 reviews" }]
	}


	render () {
		return (
			<div>
				<Nav />
				<div className="grid medium">
				<div className="grid sidebar-left">
				<Sidebar />
				<div className="content">
					<h2>My Favorites</h2>
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

export default Favorites
