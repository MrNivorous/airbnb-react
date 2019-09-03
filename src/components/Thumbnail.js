import React from 'react'
import {Link} from 'react-router-dom'

class Thumbnail extends React.Component {
	render () {
		return (


			<Link to="/place" className="card link">
				<div className="image" style={{backgroundImage: `url(${this.props.place.background})`}}>
					<button className="icon">
						<i className="far fa-heart"></i>
					</button>
				</div>
				<div className="content">
					<small className="meta">{this.props.place.type}</small>
					<h2>{this.props.place.title}</h2>
					{this.props.place.location ? <small className="location">
															<i className="fas fa-map-marker-alt"></i>
															<span>{this.props.place.location}</span>
														</small> : null}
					<span className="price">{this.props.place.price}</span>
					<span className="rating">
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="far fa-star"></i>
						<span>{this.props.place.reviews}</span>
						{this.props.place.date ? <span className="date">18 Apr 2019 - 27 Apr 2019</span> : null}

					</span>
				</div>
			</Link>
		)
	}
}

export default Thumbnail;
