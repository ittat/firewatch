#!/usr/bin/env node

var exec = require('child_process').exec;



exec('ls ../', function(err, stdout, strerr) {
		if (err) {
			console.log(err);
			return;
		}
		console.log(stdout);

});
