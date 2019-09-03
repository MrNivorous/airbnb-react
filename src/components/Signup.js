import React from 'react'

class Signup extends React.Component {
	render () {
		return (
			<div className="grid center middle tall image">
				<div className="card small">
					<div className="content">
						<div className="logo" style={{ backgroundImage: `url(${"./images/logo-airbnb.png"})` }}></div>
						<form>
							<div className="group">
								<label>Name</label>
								<input type="text"></input>
							</div>
							<div className="group">
								<label>Email</label>
								<input type="email"></input>
							</div>
							<div className="group">
								<label>Password</label>
								<input type="password"></input>
							</div>
							<div className="group">
								<label>Location</label>
								<input type="text"></input>
							</div>
							<div className="group">
								<label>Profile Picture</label>
								<input type="file" />
							</div>
							<button className="primary">Signup</button>
						</form>
						<p className="footer">
							Already have an account? <a href="">Login</a>
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Signup;
