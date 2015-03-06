/**
 * Created by btilford on 7/31/14.
 */
module.exports = function concurrent(grunt) {
    return {
        'compile-1st-pass' : [
            'newer:concat:js',
            'newer:concat:css'
        ],
        'compile-2nd-pass' : [
            'newer:less'
        ],
        'compile-3rd-pass' : [
            'copy:cssMap'
        ],
        'compile-4th-pass': [
            'newer:autoprefixer',
            'newer:imagemin'
        ],
        min : [
            'cssmin',
            'closurecompiler'
        ],
        lint : [
            'jshint',
            'lesslint'
        ]
    }
};
