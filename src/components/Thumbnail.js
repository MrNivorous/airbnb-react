import React from 'react'

class Thumbnail extends React.Component {
	render () {


		return (


			<div className="card link">
				<div className="image" style={{backgroundImage: `url(${this.props.place.image})`}}>
					<button className="icon">
						<i className="far fa-heart"></i>
					</button>
				</div>
				<div className="content">
					<small className="meta">{this.props.place.type}</small>
					<h2>{this.props.place.title}</h2>
						{this.props.place.city ? <small className="location">
															<i className="fas fa-map-marker-alt"></i>
															<span>{this.props.place.city}, {this.props.place.country}</span>
														</small> : null}
					<span className="price">${this.props.place.price}</span>
					<span className="rating">
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="far fa-star"></i>
						<span>{this.props.place.reviews}</span>
						{this.props.place.date ? <span className="date">{this.props.place.date}</span> : null}

					</span>
				</div>
			</div>
		)
	}
}

export default Thumbnail;
