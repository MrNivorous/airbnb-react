import React from 'react'
import Nav from './Nav'
import Gallery from './Gallery'
import Review from './Review'
import axios from 'axios'


class Place extends React.Component {
	state = {
		place: {
			images: [],
			amenities: [],
			type: {},
			host: {},
			reviews: []
			},
		selected: '',
		review: ''
	}

	componentWillMount() {
		axios.get('http://localhost:4000/places/5d761a65a7e1e234cd692283')
		.then(res => {
			this.setState({
				place: res.data,
				selected: res.data.images[0],
		})
	})}

	changeSelected = (selected) => {
		this.setState({
			selected: selected
		})
	}

	render () {
		return (
		<div>
			<Nav />
			<Gallery selected={this.state.selected} images={this.state.place.images} changeSelected={this.changeSelected} />
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
						<p></p>
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
						{this.state.place.reviews.map((review, index) => {return  (<Review key={index} review={review} />)})}

			</div>
			</div>

		</div>
		</div>

		)
	}
}

export default Place
