module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        coffee : {
            app : {
                files : [{
                    expand : true,
                    cwd : 'src/',
                    src : ['*.coffee', '**/*.coffee'],
                    dest : './',
                    ext : '.js'
                }],
            }
        },
        stylus : {
            app : {
                    options :{
                      compress: false
                    },
                files : [{
                    expand : true,
                    cwd : 'src/public/stylesheets/',
                    src : ['**/*.styl', '*.styl'],
                    dest : 'public/stylesheets',
                    ext : '.css'
                }],
            }
        },
        watch : {
            coffee : {
                files : ['src/*.coffee', 'src/**/*.coffee'],
                tasks : 'coffee'
            },
            stylus : {
                files : ['src/public/stylesheets/*.styl', 'src/public/stylesheets/**/*.styl'],
                tasks : 'stylus'
            }
        }
    });

    // Load the plugin that provides the "stylus" task.
    grunt.loadNpmTasks('grunt-contrib-stylus');
    // Load the plugin that provides the "coffee" task.
    grunt.loadNpmTasks('grunt-contrib-coffee');
    // Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
};
