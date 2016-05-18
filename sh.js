var spawn = require('child_process').spawn

// This function can be refactored
module.exports = function sh (command, env) {
	env = Object.assign({}, process.env, env)

	return new Promise(function (resolve) {
		var c = spawn('sh', ['-c', command], { env, stdio: 'inherit' });
		c.on('close', function (code) {
			resolve(code)
		})
	})
}