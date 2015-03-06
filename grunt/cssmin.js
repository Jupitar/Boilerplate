/**
 * Created by btilford on 7/31/14.
 */



module.exports = function cssMin(grunt) {
    return {
        dist: {
            files: {
                'dist/production.min.css': ['dist/production.css']
            }
        }
    }
};