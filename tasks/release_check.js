/*
 * grunt-release-check
 * https://github.com/kriffe/grunt-contrib-release-check
 *
 * Copyright (c) 2015 kriffe
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('release_check', 'Simple check structure before proceeding with other build or deploy commands', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });
    
    var pkg = grunt.file.readJSON('package.json'),
	var version = pkg.version.split(".");
		if (version.length !== 4){
		grunt.fail.warn("Version strcture should be major.minor.pathc-stage.build!");
	}
	var stage = version[2].split("-");
	if (stage[1] !== "RELEASE"){
		grunt.fail.warn("Package state is "+stage[1]+". Please use version_bump:stage if stable.");
	}

    // Iterate over all specified file groups.
    //this.files.forEach(function(f) {
      // Concat specified files.
      //var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
      //  if (!grunt.file.exists(filepath)) {
      //    grunt.log.warn('Source file "' + filepath + '" not found.');
      //    return false;
       // } else {
      //    return true;
      //  }
      //}).map(function(filepath) {
        // Read file source.
      //  return grunt.file.read(filepath);
      //}).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      //src += options.punctuation;

      // Write the destination file.
     // grunt.file.write(f.dest, src);

      // Print a success message.
      //grunt.log.writeln('File "' + f.dest + '" created.');
    //});
  });

};
