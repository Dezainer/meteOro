import React from 'react'
import { browserHistory } from 'react-router'
import './file.css'

export default class File extends React.Component {
	render() {
		return (
			<div 
				className="file" 
				onClick={ () => browserHistory.push(this.props.id) }
			>
				<div 
					className="thumb"
					style={{ 
						backgroundImage: 'url('+this.props.url+')' 
					}}
				/>
				<div className="desc">
					<h2>{ this.props.title }</h2>
				</div>
			</div>
		)
	}
}