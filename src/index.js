const chalk = require('chalk');

module.exports = () => {
	console.log(chalk.cyan(`Hi, Thomas Clausen here...`));
	console.log(chalk.cyan(`    Web: ` + chalk.bold(`thomasclausen.dk`)));
	console.log(chalk.cyan(`Codepen: ` + chalk.bold(`codepen.io/thomasclausen`)));
	console.log(chalk.cyan(` GitHub: ` + chalk.bold(`github.com/thomasclausen`)));
};
