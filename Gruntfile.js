module.exports = function(grunt) { 
     grunt.loadNpmTasks('grunt-text-replace');
     grunt.loadNpmTasks('grunt-contrib-concat');
     grunt.loadNpmTasks('grunt-ng-annotate');
     grunt.loadNpmTasks('grunt-contrib-uglify');
     grunt.loadNpmTasks('grunt-contrib-copy');
     grunt.loadNpmTasks('grunt-contrib-clean');
     grunt.loadNpmTasks('grunt-css');
     grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-karma');

     // VARIABLES
     var scriptFiles = [];   // Every javascript file
     var now = new Date();   // The current time
     var timeString = '' + now.getFullYear() + now.getMonth() + now.getDate() + now.getHours() + now.getMinutes() + now.getSeconds();
     var jsName = 'um_scripts_' + timeString + '.min.js';
     var cssName = 'Content/um_styles_' + timeString + '.min.css';
     var cssFiles = [];

     grunt.initConfig({
         // Task configuration
         replace: {
             js: {
                 src: 'index.html',              // source files array
                 dest: 'index.html',             // destination directory or file 
                 replacements: [{
                     from: /[^-]<script src="\S+"><\/script>/g,  // regex replacement
                     to: function (scriptTag) {  // callback replacement
                         if (scriptTag.includes('keycloak/')) {
                             return scriptTag;
                            }

                         scriptTag = scriptTag.substring(1);
                         scriptFiles.push(scriptTag.split('"')[1]);
                        //  console.log( scriptTag.split('"')[1]);
                         return '<!--' + scriptTag + '-->';
                     }
                 }]
             },
             newScriptTags: {
                 src: 'index.html',              // source files array
                 dest: 'index.html',             // destination directory or file 
                 replacements: [{
                     from: /<\/body>/g,          // regex replacement
                     to: function (closingTag) { // callback replacement
                         return '<script src="' + jsName + '"></script>\n' + closingTag;
                     }
                 }]
             },
             css: {
                 src: 'index.html',
                 dest: 'index.html',
                 replacements: [{
                     from: /[^-]<link\s\S+\s\S+(\s\S+)?(>|\s\/>)/g,
                     to: function (cssTag) {
                         if (cssTag.includes('themify-icons.css')) {
                             return cssTag;
                         }
                        cssTag = cssTag.substring(1);
                        cssFiles.push(cssTag.split('href="')[1].split('"')[0]);
                        // console.log( cssTag.split('href="')[1].split('"')[0] );
                        return '<!--' + cssTag + '-->';
             }
                 }]
             },
             newStyleTags: {
                 src: 'index.html',              // source files array 
                 dest: 'index.html',             // destination directory or file 
                 replacements: [{
                     from: /<\/head>/g,          // regex replacement
                     to: function (closingTag) { // callback replacement
                         return '<link href="' + cssName + '" rel="stylesheet" />\n' + closingTag;
                     }
                 }]
             }
         },
         concat: {
             concatjs: {
                 src: scriptFiles,
                 dest: 'merged.js',
                 options: {
                     separator: ';\n'
                 }
             },
             concatcss: {
                 src: cssFiles,
                 dest: 'merged.css',
                 options: {
                     separator: '\n'
                 }
             }
         },
         ngAnnotate: {
             js: {
                 files: {
                     'annotated.js': ['merged.js']
                 }
             }
         },
         uglify: {
             js: {
                 files: {
                     'final.js': ['annotated.js']
                 }
             }
         },
         cssmin: {
             css: {
                 src: 'merged.css',
                 dest: cssName
             }
         },
         copy: {
           js: {
             src: ['final.js'],
             dest: jsName
           }
         },
         clean: {
             js: ['*merged.js', '*annotated.js', '*final.js', '*merged.css']
         }
        //  ,karma:{
        //     unit: {
        //         configFile: 'test/unit/karma.conf.js'
        //     }
        //  }
     });

     grunt.registerTask('default', ['replace:js', 'replace:newScriptTags', 'replace:css', 'replace:newStyleTags', 'concat', 'ngAnnotate', 'uglify', 'copy', 'cssmin', 'clean']);
    //  grunt.registerTask('default', ['karma']);

};