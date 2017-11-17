import { Database } from './firebaseIgniter'

export default class Data {

	constructor() {
		this.status = 'on'
	}

	ref(ref, isAuthed) {
		return Database.ref(
			isAuthed ? 'uid'+ref : ref
		)
	}

	setOff() {
		this.status = 'off'
	}

	list(result) {
		let data = []

		result.forEach(each => {
			let item = each.val()
			item.key = each.key

			data.push(item)
		})

		return data
	}
}