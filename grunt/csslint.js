/**
 * Created by btilford on 7/31/14.
 */
module.exports = function csslint(grunt) {
    return {
        options: {
            import    : 2,
            csslintrc : '.csslintrc',
            formatters: [
                {id: 'junit-xml', dest: 'dist/reports/csslint-junit.xml'}
            ]
        },
        src : []
    }
};