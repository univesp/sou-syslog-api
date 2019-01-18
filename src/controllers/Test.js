const Test = require('../models/Test');

module.exports = {
	async index(req, res) {
		const result = await Test.findAll();
		res.send(result);
	},
	async create(req, res) {
		const result = await Test.create(req.body);
		res.send(result);
	}
};
