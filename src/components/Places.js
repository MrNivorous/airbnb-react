import React from 'react'
import Nav from './Nav'
import Filter from './Filter'
import Thumbnail from './Thumbnail'
import PlaceGrid from './PlaceGrid'

class Places extends React.Component {
	state = { places : [
		{background: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg', type: "Entire Villa • 7 Rooms", title: "Luxury Villa Indu Siam", price: "$200/night", reviews: "12 reviews" },
		{background: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',type: "Entire Villa • 2 Rooms", title: "Luxury Hotel Indu Siam", price: "$150/night", reviews: "5 reviews" },
		{background: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',type: "Entire Villa • 7 Rooms", title: "Luxury Villa Indu Siam", price: "$350/night", reviews: "40 reviews" },
		{background: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg', type: "Entire Villa • 7 Rooms", title: "Luxury Villa Indu Siam", price: "$350/night", reviews: "37 reviews" },
	]
}
	render () {
		return (
		<div>
		<Nav />
		<Filter />
			{this.state.places.map((place, index) => {return  (<Thumbnail key={index} place={place} />)})}

		</div>
		)
	}
}

export default Places
