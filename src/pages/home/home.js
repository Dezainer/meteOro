import React from 'react'
import { browserHistory } from 'react-router'
import './home.css'

import Header from 'header/header'
import Button from 'button/button'
import File from 'file/file'

import FileData from 'services/fileService'


export default class Home extends React.Component {

	state = { files: null }

	componentDidMount() {
		this.watchFiles()
	}
	
	handleButtonClick() {
		browserHistory.push('new')
	}

	watchFiles() {
		FileData.prototype
			.getFiles(files => {
				this.setState({ files })
			})
	}

	getContent() {
		return !this.state.files 
			? <span>Carregando...</span>
			: this.state.files.map(file =>
				<File id={ file.key } { ...file }/>
			)
	}

	render() {
		return (
			<div className="home">
				<Header/>
				<div className="content">
					{ this.getContent() }
				</div>
				<Button 
					clickAction={ () => this.handleButtonClick() }
				/>
				{ this.props.children }
			</div>
		)
	}
}