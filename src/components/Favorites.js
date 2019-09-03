import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'

class Favorites extends React.Component {
	render () {
		return (
			<div>
				<Nav />
				<div className="grid medium">
				<div className="grid sidebar-left">
				<Sidebar />
				<div className="content">
					<h2>My Favorites</h2>
					<div className="grid two">
						<a className="card link" href="place.html">
							<div className="image" style={{backgroundImage: "url('https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg')"}}>
								<button className="icon">
									<i className="fas fa-heart"></i>
								</button>
							</div>
							<div className="content">
								<small className="meta">Entire Villa • 3 Rooms</small>
								<h2>Luxury Villa Indu Siam</h2>
								<small className="location">
									<i className="fas fa-map-marker-alt"></i>
									<span>Koh Samui, Thailand</span>
								</small>
								<span className="price">$198/night</span>
								<span className="rating">
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="far fa-star"></i>
									<span>29 Reviews</span>
								</span>
							</div>
						</a>
					</div>
				</div>
			</div>
			</div>
			</div>
		)

	}
}

export default Favorites
