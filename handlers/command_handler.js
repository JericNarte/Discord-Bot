const fs = require('fs');
const tool = require('../functions/function.js');

module.exports = (client, Discord) => {
	const load_dir = (dirs) => {
		const command_files = fs.readdirSync('./commands/' + dirs).filter((file) => file.endsWith('.js'));
		for (const file of command_files) {
			const command = require('../commands/' + dirs + '/' + file);
			if (command.name) {
				client.commands.set(command.name, command);
			}
		}
	};
	['valorant', 'general'].forEach((e) => load_dir(e));
	console.log('command_handler');
};
