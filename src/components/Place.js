import React from 'react'
import Nav from './Nav'
import Gallery from './Gallery'
import Review from './Review'
import axios from 'axios'
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css';




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
		review: '',
		startDate: new Date()
	}

	componentWillMount() {
		axios.get(`http://localhost:4000/places/${this.props.match.params.id
}`)
		.then(res => {
			// console.log(res.data)
			this.setState({
				place: res.data,
				selected: res.data.images[0]
	})
})}


handleChange = date => {
	this.setState({
		startDate: date
	});
};


	changeSelected = (selected) => {
		this.setState({
			selected: selected
	})}


	selectGuests = (e) => {
		let guests = Number(e.target.value[0])
		this.setState({guests})
	}

	render () {
		return (
		<div>
			<Nav />
			<Gallery selected={this.state.selected} images={this.state.place.images} changeSelected={this.changeSelected} />
			<div className="grid medium">
				<div className="grid sidebar-right">
					<div className="content">
						<h1>{this.state.place.title}</h1>
						<small>
							<i className="fas fa-map-marker-alt"></i>
							<span>{this.state.place.city},{this.state.place.country}</span>
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
									{this.state.place.amenities.map((e, i) => <li key={i}><i className={`fas fa-$(e.icon)`}></i>{e.name}</li>)}
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
									<DatePicker selected={this.state.startDate} onChange={this.handleChange}
										placeholder="Check in"/>
										<DatePicker selected={this.state.startDate} onChange={this.handleChange}
											placeholder="Check Out"/>
							</div>
							<div className="group">
								<label>Guests</label>
								<select onChange={this.selectGuests}>
									{[...Array(this.state.place.guests)].map((e, i) => <option key={i}>{i === 0 ?'1 guest' :`${i + 1} guests`}</option>)}

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
				{this.state.place.reviews.map((review, i) => <Review key={i} review={review} />)}

			</div>
			</div>

		</div>
		</div>

		)
	}
}

export default Place
