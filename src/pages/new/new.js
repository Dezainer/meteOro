import React from 'react'
import { browserHistory } from 'react-router'
import './new.css'

import FileData from 'services/fileService'
import Modal from 'modal/modal'

export default class New extends React.Component {

	handleSave() {
		FileData.prototype
			.pushRelic(this.state)
			.then(() => {
				browserHistory.push('/')
			})
	}

	bindInput(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		return (
			<Modal bg="white">
				<div className="new">
					<h2>Nova Relíquia</h2>
					<input
						name="title"
						placeholder="Título"
						onChange={ e => this.bindInput(e) }
					/>
					<input
						name="url"
						placeholder="URL"
						onChange={ e => this.bindInput(e) }
					/>
					<button onClick={ () => this.handleSave() }>
						Salvar
					</button>
				</div>
			</Modal>
		)
	}
}