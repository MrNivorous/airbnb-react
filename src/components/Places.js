import React from 'react'
import Nav from './Nav'
import Filter from './Filter'
import PlaceGrid from './PlaceGrid'

class Places extends React.Component {
	render () {
		return (
		<div>
		<Nav />
		<Filter />
		<PlaceGrid />

		</div>
		)
	}
}

export default Places
