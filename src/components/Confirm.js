import React from 'react'
import Nav from './Nav'

class Confirm extends React.Component {
	render () {
		return (
			<div>
				<Nav />
				<div class="grid medium">
					<div class="grid sidebar-left">
						<div class="sidebar">
							<div class="card link">
								<div class="image" style={{backgroundImage: "url('https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg')"}}>
									<button class="icon">
										<i class="far fa-heart"></i>
									</button>
								</div>
								<div class="content">
									<small class="meta">Entire Villa • 7 Rooms</small>
									<h2>Luxury Villa Indu Siam</h2>
									<span class="price">$350/night</span>
									<span class="rating">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="far fa-star"></i>
										<span>37 Reviews</span>
									</span>
								</div>
							</div>
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
