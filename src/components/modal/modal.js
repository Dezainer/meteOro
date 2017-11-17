import React from 'react'
import { browserHistory } from 'react-router'
import './modal.css'

export default class Modal extends React.Component {

	handleClose(e) {
		e.target.className == 'modal' &&
			browserHistory.goBack()
	}

	render() {
		return (
			<div className="modal" 
				onClick={ e => this.handleClose(e) }
			>
				<div className="content"
					style={{ backgroundColor: this.props.bg || 'transparent' }}
				>
					{ this.props.children }
				</div>
			</div>
		)
	}
}