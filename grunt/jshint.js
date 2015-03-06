/**
 * Created by btilford on 7/31/14.
 */
module.exports = function jshint(grunt) {
    return {
        options: {
            jshintrc      : '.jshintrc',
            reporter      : require('jshint-junit-reporter'),
            reporterOutput: 'dist/reports/jshint-junit.xml'
        },
        src : ['js/**/*.js']
    };
};