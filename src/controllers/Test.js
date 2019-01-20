const Test = require('../models/Test');

module.exports = {
	async index(req, res) {
		try {
			const result = await Test.findAll();
			res.send(result);
		} catch (e) {
			res.status(500).send({ message: 'something went wrong on the server' });
		}
	},
	async create(req, res) {
		const result = await Test.create(req.body);
		res.send(result);
	}
};
