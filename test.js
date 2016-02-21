import test from 'ava'
import by from './'

const data = [
	{
		date: '2015-09-09',
		text: 'hi'
	},
	{
		date: '2017-02-12',
		text: 'fuck'
	},
	{
		date: '2015-09-22',
		text: 'wow'
	},
	{
		date: '2016-03-12',
		text: 'wow'
	}
]

test('toObject', t => {
	const res = by(data).toObject()
	t.is(res['2015'][0].text, 'hi')
})

test('toArray', t => {
	const res = by(data).toArray()
	t.is(res[0][0].text, 'hi')
})

test('custom prop', t => {
	const res = by(data, 'date').toArray()
	t.is(res[0][0].text, 'hi')
})

test('custom callback', t => {
	const res = by(data, 'text', function (value) {
		return value
	}).toObject()
	t.is(res.wow.length, 2)
})
