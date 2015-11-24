/*
 * grunt-release-check
 * https://github.com/kriffe/grunt-contrib-release-check
 *
 * Copyright (c) 2015 kriffe
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerTask('release_check', 'Simple check structure before proceeding with other build or deploy commands', function() {
    
    var pkg = grunt.file.readJSON('package.json');
	var version = pkg.version.split(".");
		if (version.length !== 4){
		grunt.fail.warn("Version structure should be major.minor.pathc-stage.build!");
	}
	var stage = version[2].split("-");
	if (stage[1] !== "RELEASE"){
		grunt.fail.warn("Package state is "+stage[1]+". Please use version_bump:stage if stable.");
	}

 
  });

};
