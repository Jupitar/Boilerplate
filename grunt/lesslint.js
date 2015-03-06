/**
 * Created by btilford on 9/9/14.
 */

'use strict';
module.exports = function configLessLint(grunt) {
    var config = {
        options: {
            paths  : ['css'],
            imports: ['css/**/*.less'],
            csslint: {
                csslintrc : '.csslintrc',
                formatters: [
                    {id: 'junit-xml', dest: 'dist/reports/csslint_junit.xml'}
                ]
            }
        },
        src    : ['css/styles.less']
    };

    return config;
};