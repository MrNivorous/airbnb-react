import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Thumbnail from './Thumbnail'

class Bookings extends React.Component {
	state = { upcomingtrips : [
		{background: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg', type: "Entire Villa • 3 Rooms", title: "Luxury Villa Indu Siam", location: "Koh Samui, Thailand", price: "5 night • $1,750 total", reviews: "29 reviews", date: "10 Aug 2020 - 15 Aug 2020" } ],
		pasttrips : [
			{
			background: 'https://a0.muscache.com/4ea/air/v2/pictures/eee424d0-ca05-4405-8bdb-e5caf2db3fbe.jpg', type: "Entire Villa • 3 Rooms", title: "Luxury Villa Indu Siam", location: "Koh Samui, Thailand", price: "5 night • $1,750 total", reviews: "29 reviews", date: "10 Aug 2020 - 15 Aug 2020"
		},
		{
		background: 'https://a0.muscache.com/4ea/air/v2/pictures/58f86a91-a526-4e1b-934e-8f6bc3f60e10.jpg', type: "Private Room", title: "Tropical Architecture", location: "Koh Samui, Thailand", price: "9 nights • $2,980 Total", reviews: "290 reviews", date: "18 Apr 2019 - 27 Apr 2019"
	}]
	}

	render () {
		return (
		<div>
			<Nav />
			<div className="grid medium">
			<div className="grid sidebar-left">
			<Sidebar />
					<div className="content">
						<h2>Upcoming Trips</h2>
						<div className="grid two">
						{this.state.upcomingtrips.map((place, index) => {return  (<Thumbnail key={index} place={place} />)})}

						</div>
						<h2>Past Trips</h2>
						<div className="grid two">
						{this.state.pasttrips.map((place, index) => {return  (<Thumbnail key={index} place={place} />)})}

						</div>
					</div>
				</div>
				</div>
			</div>

		)
	}
}

export default Bookings
