import React from 'react'
import Nav from './Nav'
import Thumbnail from './Thumbnail'
import axios from 'axios'



class Places extends React.Component {
	state = { places : [],
	originalPlaces : [],
	types: []
}


componentWillMount() {
	axios.get('http://localhost:4000/places')
	.then(res => {
		this.setState({
			places: res.data,
			originalPlaces: res.data
	})
	})
	.catch(err => {})
	axios.get('http://localhost:4000/types')
	.then(res => {
		this.setState({
			types: res.data,
	})
	})
	.catch(err => {})
}


search = (event) => {
 let filteredPlaces = this.state.places.filter(p =>  p.title.toLowerCase().includes(event.target.value.toLowerCase()))
 this.setState({
	 places: filteredPlaces})
}



	render () {

		let typeOptions = this.state.types.map((types) =>
							 <option key={types.name}>{types.name}</option>
					 )


		return (
		<div>
		<Nav />
			<div className="filters">
				<select>
					<option value="1">Rooms: 1</option>
					<option value="1">Rooms: 2</option>
					<option value="1">Rooms: 3</option>
					<option value="1">Rooms: 4</option>
					<option value="1">Rooms: 5</option>
					<option value="1">Rooms: 6</option>
					<option value="1">Rooms: 7</option>
					<option value="1">Rooms: 8</option>
					<option value="1">Rooms: 9</option>
					<option value="1">Rooms: 10</option>
				</select>
				<select>
					{typeOptions}
				</select>
				<input type="number" placeholder="max price" />
				<select>
					<option value="date">Latest</option>
					<option value="price">Price</option>
					<option value="rating">Rating</option>
				</select>
				<input type="text" onChange={this.search} className="search" placeholder="Search..." />
			</div>
			<div class="grid five large">
			{this.state.places.map((place, index) => {return  (<Thumbnail key={index} place={place} />)})}
			</div>
		</div>
		)
	}
}

export default Places
