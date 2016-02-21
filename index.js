'use strict'

// classifyBy(data, 'date', cb)

module.exports = function (data, prop, cb) {
	if (!Array.isArray(data)) {
		throw new TypeError('Expected an array')
	}

	prop = prop || 'date'

	cb = cb || function (value) {
		return new Date(value).getFullYear()
	}

	var result = {}
	data.forEach(function (item) {
		var key = cb(item[prop])
		result[key] = result[key] || []
		result[key].push(item)
	})

	return {
		toObject: function () {
			return result
		},
		toArray: function () {
			var array = []
			for (var key in result) {
				if (result[key]) {
					array.push(result[key])
				}
			}
			return array
		}
	}
}
