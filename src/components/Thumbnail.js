import React from 'react'
import {Link} from 'react-router-dom'
import Places from './Places'

class Thumbnail extends React.Component {
	render () {
		return (


			<Link_to="place" className="card link">
				<div className="image" style={{backgroundImage: `url(${this.props.place.background})`}}>
					<button className="icon">
						<i className="far fa-heart"></i>
					</button>
				</div>
				<div className="content">
					<small className="meta">{this.props.place.type}</small>
					<h2>{this.props.place.title}</h2>
					<span className="price">{this.props.place.price}</span>
					<span className="rating">
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="far fa-star"></i>
						<span>{this.props.place.reviews}</span>
					</span>
				</div>
			</Link>
		)
	}
}

export default Thumbnail;
