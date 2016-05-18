var sh = require('./sh'),
	findup = require('findup'),
	path = require('path'),
	colors = require('colors')

try {
	var nodeModulesPath = path.resolve(findup.sync(process.cwd(), 'node_modules'), 'node_modules')

	var command = process.argv.slice(2).join(' ')

	console.log(colors.blue('(g)lobal (n)ode_modules') + ' NODE_PATH=' + nodeModulesPath)
	sh(command, {
		NODE_PATH: nodeModulesPath
	})
} catch (e) {
	console.error('No node_modules found in the current directory or its ancestors')
}