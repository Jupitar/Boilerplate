/**
 * Created by btilford on 7/31/14.
 */
module.exports = function imagemin(grunt) {
    return {
        options: {
            optimizationLevel: 7,
            progressive      : true
        },
        dist   : {
            files: [
                {
                    expand: true, // Enable dynamic expansion
                    cwd   : 'dist/i/', // Src matches are relative to this path
                    src   : ['**/*.{png,jpg,gif,jpeg}'], // Actual patterns to match
                    dest  : 'dist/i/' // Destination path prefix
                }
            ]
        }
    }
};