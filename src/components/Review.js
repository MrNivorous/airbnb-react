import React from 'react'

class Review extends React.Component {
	render () {
		return (
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
				<div className="card review">
					<div className="content">
						<div className="user">
							<div className="avatar" style={{backgroundImage: "url('https://randomuser.me/api/portraits/women/3.jpg')"}}></div>
							<div className="name">
								<small>27 July 2019</small>
								<span>Amanda</span>
							</div>
						</div>
						<div className="rating">
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
						</div>
						<p>It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.</p>
					</div>
				</div>
				<div className="card review">
					<div className="content">
						<div className="user">
							<div className="avatar" style={{backgroundImage: "url('https://randomuser.me/api/portraits/men/4.jpg')"}}></div>
							<div className="name">
								<small>22 July 2019</small>
								<span>John</span>
							</div>
						</div>
						<div className="rating">
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="far fa-star"></i>
							<i className="far fa-star"></i>
						</div>
						<p>It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.</p>
					</div>
				</div>
				<div className="card review">
					<div className="content">
						<div className="user">
							<div className="avatar" style={{backgroundImage: "url('https://randomuser.me/api/portraits/men/5.jpg')"}}></div>
							<div className="name">
								<small>4 July 2019</small>
								<span>Sam</span>
							</div>
						</div>
						<div className="rating">
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="far fa-star"></i>
						</div>
						<p>It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.</p>
					</div>
				</div>
				<div className="card review">
					<div className="content">
						<div className="user">
							<div className="avatar" style={{backgroundImage: "url('https://randomuser.me/api/portraits/women/7.jpg')"}}></div>
							<div className="name">
								<small>27 May 2019</small>
								<span>Ella</span>
							</div>
						</div>
						<div className="rating">
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
						</div>
						<p>It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Review
