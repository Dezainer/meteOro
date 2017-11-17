import React from 'react'
import './single.css'

import Modal from 'modal/modal'
import FileData from 'services/fileService'

export default class Single extends React.Component {

	state = { url: null }

	componentDidMount() {
		this.fetchImage()
	}

	fetchImage() {
		FileData.prototype
			.getRelic(this.props.params.key)
			.then(file => {
				this.setState({ url: file.url })
			})
	}

	getDisplay() {
		return !this.state.url
			? <span>Carregando...</span>
			: (
				<div 
					className="display"
					style={{ backgroundImage:
						'url('+this.state.url+')'
					}}
				/>
			)
	}

	render() {
		return (
			<Modal>
				{ this.getDisplay() }
			</Modal>
		)
	}
}