module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')

    });

    //grunt.loadNpmTasks('');

    // Default task(s).
    grunt.registerTask('default', function () {
        console.log(123123);
    });

};