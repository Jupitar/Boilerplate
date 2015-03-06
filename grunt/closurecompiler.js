/**
 * Created by btilford on 7/31/14.
 */
module.exports = function closure(grunt) {
    return {
        dist   : {
            files: {
                'dist/production.min.js': ['dist/production.js']
            }

        },
        options: {
            compilation_level: 'SIMPLE_OPTIMIZATIONS'//,
            // Turning this off to allow passage of tipswift and spin.js
            // spin.js can probably be updated to the most recent version, which does pass
            // tipswift has not been updated in a few years, and is the more problematic
            // file.  Ideally we would replace the usage of tipswift altogether.
            // language_in      : 'ECMASCRIPT5_STRICT'
        }
    };
};