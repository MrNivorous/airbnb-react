import React from 'react'
import {Link} from 'react-router-dom'

class Login extends React.Component {
	render () {
		return (
			<div className="grid center middle tall image">
				<div className="card small">
					<div className="content">
						<div className="logo" style={{ backgroundImage: `url(${"./images/logo-airbnb.png"})` }}></div>
						<form>
							<div className="group">
								<label>Email</label>
								<input type="email"></input>
							</div>
							<div className="group">
								<label>Password</label>
								<input type="password"></input>
							</div>
							<button className="primary">Login</button>
						</form>
						<p className="footer">
							New to Airbnb? <Link to="/signup">Signup</Link>
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Login
