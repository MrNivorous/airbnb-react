import React from 'react'
import Nav from './Nav'
import Thumbnail from './Thumbnail'

class Confirm extends React.Component {
	state = { places : [
		{background: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg', type: "Entire Villa • 7 Rooms", title: "Luxury Villa Indu Siam", price: "$200/night", reviews: "12 reviews" } ]
	}

	render () {
		return (
			<div>
				<Nav />
				<div class="grid medium">
					<div class="grid sidebar-left">
						<div class="sidebar">
							{this.state.places.map((place, index) => {return  (<Thumbnail key={index} place={place} />)})}

						</div>
						<div class="content">
							<h2>Confirm Booking</h2>
							<form>
								<div class="group">
									<label>From</label>
									<input type="text" value="12/11/2019"></input>
								</div>
								<div class="group">
									<label>To</label>
									<input type="text" value="15/11/2019"></input>
								</div>
								<div class="group">
									<label>Guests</label>
									<select>
										<option>1 guest</option>
										<option>2 guests</option>
										<option>3 guests</option>
										<option selected>4 guests</option>
										<option>5 guests</option>
										<option>6 guests</option>
										<option>7 guests</option>
										<option>8 guests</option>
										<option>9 guests</option>
										<option>10 guests</option>
									</select>
								</div>
								<div class="group">
									<label>Total: 3 nights</label>
									<h2>$1,050</h2>
								</div>
								<button class="primary">Confirm</button>
							</form>
							<hr></hr>
							<button>Cancel</button>
						</div>
					</div>
				</div>
				</div>

					)
	}
}

export default Confirm
