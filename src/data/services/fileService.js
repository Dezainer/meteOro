import Data from '../data'

export default class FileData extends Data {

	pushRelic(relic) {
		return this.ref('files')
			.push(relic)
	}

	getFiles(callback) {
		return this.ref('files')
			.on('value', snap => {
				callback(this.list(snap))
			})
	}

	getRelic(key) {
		return this.ref('files/'+key)
			.once('value')
			.then(snap =>
				snap.val()
			)
	}
}