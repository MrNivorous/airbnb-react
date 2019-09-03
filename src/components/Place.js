import React from 'react'
import Nav from './Nav'
import Gallery from './Gallery'
import Review from './Review'

class Place extends React.Component {
	state = { reviews : [
		{avatar: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Ol%27_Dirty_Bastard.jpg', date: "27 July 2019", name: "ODB", review: "Ooo baby I like it raw" },

		{avatar: 'https://upload.wikimedia.org/wikipedia/commons/6/64/50_Cent.jpg', date: "22 Aug 2019", name: "50 Cent", review: "P.I.M.P." },

		{avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Kanye_West_at_the_2009_Tribeca_Film_Festival-2_%28cropped%29.jpg', date: "14 May 2019", name: "Kanye", review: "I liked that old Kanye better" } ]
	}

	render () {
		return (
		<div>
			<Nav />
			<Gallery />
			<div className="grid medium">
				<div className="grid sidebar-right">
					<div className="content">
						<h1>Luxury Villa Indu Siam</h1>
						<small>
							<i className="fas fa-map-marker-alt"></i>
							<span>Koh Samui, Thailand</span>
						</small>
						<div className="user">
							<div className="avatar" style={{backgroundImage: "url('https://randomuser.me/api/portraits/women/2.jpg')"}}></div>
							<div className="name">
								<small>Hosted by</small>
								<span>Kitty</span>
							</div>
						</div>
						<div className="card specs">
							<div className="content">
								<ul className="grid two">
									<li><i className="fas fa-fw fa-home"></i>Entire Villa</li>
									<li><i className="fas fa-fw fa-user-friends"></i>10 guests</li>
									<li><i className="fas fa-fw fa-bed"></i>7 bedrooms</li>
									<li><i className="fas fa-fw fa-bath"></i>6 baths</li>
								</ul>
							</div>
						</div>
						<p>Stylish, tropical, luxurious, airy and absolute beach front, this villa combines form and function, enjoying magnificent views of Samui’s small islands and the sea beyond. With 520sqm of indoor/outdoor living space with 5 ensuite bedrooms, large living area, beachfront infinity pool, garden, air conditioned gym, professional pool table, bbq and Sala, this villa is perfect for up to 10 adults With 260sqm (2798sqfeet) of living space and 250sqm (2,700sqfeet) of outdoor space.</p>
						<h3>Amenities</h3>
						<div className="card specs">
							<div className="content">
								<ul className="grid two">
									<li><i className="fas fa-utensils"></i>Kitchen</li>
									<li><i className="fas fa-dumbbell"></i>Gym</li>
									<li><i className="fas fa-dumbbell"></i>Wi-Fi</li>
									<li><i className="fas fa-tshirt"></i>Iron</li>
									<li><i className="fas fa-swimmer"></i>Swimming Pool</li>
									<li><i className="fas fa-wind"></i>Air Conditioning</li>
									<li><i className="fas fa-tv"></i>TV</li>
								</ul>
							</div>
						</div>
			</div>
			<div className="sidebar booking">
				<div className="card shadow">
					<div className="content large">
						<h3>$350<small>per night</small></h3>
						<small>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="far fa-star"></i>
							<span>4 Reviews</span>
						</small>
						<form className="small">
							<div className="group">
								<label>Dates</label>
								<input type="text" placeholder="Check-in" />
								<input type="text" placeholder="Check-out" />
							</div>
							<div className="group">
								<label>Guests</label>
								<select>
									<option>1 guest</option>
									<option>2 guests</option>
									<option>3 guests</option>
									<option>4 guests</option>
									<option>5 guests</option>
									<option>6 guests</option>
									<option>7 guests</option>
									<option>8 guests</option>
									<option>9 guests</option>
									<option>10 guests</option>
								</select>
							</div>
							<div className="group">
								<button className="secondary full">Book this place</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="reviews">
				<h2>4 Reviews</h2>
				<form>
					<div className="group">
						<label>Leave a review</label>
						<textarea></textarea>
						<div className="rating">
							<i className="far fa-star"></i>
							<i className="far fa-star"></i>
							<i className="far fa-star"></i>
							<i className="far fa-star"></i>
							<i className="far fa-star"></i>
						</div>
						<button className="primary small">Submit</button>
					</div>
				</form>
			{this.state.reviews.map((review, index) => {return  (<Review key={index} review={review} />)})}
			</div>
			</div>

		</div>
		</div>

		)
	}
}

export default Place
