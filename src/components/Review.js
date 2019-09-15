import React from 'react'
import moment from 'moment'

class Review extends React.Component {


	render () {
		return (
				<div className="card review">
					<div className="content">
						<div className="user">
							<div className="avatar" style={{backgroundImage: `url(${this.props.review.author.avatar})`}}></div>
							<div className="name">
								<small>{moment(this.props.review.date).format('D MMMM YYYY')}</small>
								<span>{this.props.review.author.name}</span>
							</div>
						</div>
						<div className="rating">
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
						</div>
						<p>{this.props.review.content}</p>
					</div>
				</div>
		)
	}
}

export default Review
