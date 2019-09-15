import React from 'react'

class Gallery extends React.Component {
	render () {
		return (
			<div className="gallery">
				<div className="image-main" style={{backgroundImage: `url(${this.props.selected})`}}>
					<button className="icon">
						<i className="far fa-heart"></i>
					</button>
				</div>
				<div className="thumbnails">
								{this.props.images.map((e, i) => <div className="thumbnail" style={{backgroundImage: `url(${e})`}} onClick={() => this.props.changeSelected(e)} key={`image${i}`}></div>)}
							</div>
			</div>
				)
	}
}

export default Gallery
