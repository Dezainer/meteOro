import React from 'react'
import './button.css'

export default class Button extends React.Component {
	render() {
		return (
			<div 
				className="button"
				onClick={ this.props.clickAction }
			>
				<span>+</span>
			</div>
		)
	}
}