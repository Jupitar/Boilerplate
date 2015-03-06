var fs = require('fs');

module.exports = function(grunt) {

    return {
        options: {
            sourceMap: true
        },
        js: {
            src: [
                'js/app.js',
                'js/controllers.js'
            ],
            dest: 'dist/production.js',
            nonull: true,
            options: {
                process: function(src, filepath) {
                    var str;
                    if (!fs.existsSync(filepath)) {
                        throw new Error('File [' + filepath + '] does not exist!');
                    }
                    str = filepath + ' (' + src.length + ' bytes)';

                    return '\n\n/** ' + str + ' */' + '\n\n' + src;
                },
                sourceMap: true
            }
        },
        css: {
            src: [
                'css/main.less'
            ],
            dest: '.tmp/production.less',
            nonull: true,
            options: {
                process: function(src, filepath) {
                    var str;
                    if (!fs.existsSync(filepath)) {
                        throw new Error('File [' + filepath + '] does not exist!');
                    }
                    str = filepath + ' (' + src.length + ' bytes)';

                    return '\n\n/** ' + str + ' */' + '\n\n' + src;
                },
                sourceMap: true
            }
        }
    };

};
