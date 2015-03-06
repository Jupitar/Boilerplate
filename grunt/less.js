/**
 * Created by btilford on 9/9/14.
 */
'use strict';
module.exports = function lessConfig(grunt) {
    var config = {
        compile: {
            files  : {
                '.tmp/production.css': '.tmp/production.less'
            },
            options: {
                paths            : ['app'],
                sourceMap        : true,
                sourceMapURL     : 'less.map',
                sourceMapFilename: '.tmp/less.map'
            }
        }
    }
    return config;
};