var sauceConfig = require('./build/saucelabs.config.js')

module.exports = function (grunt) {

  grunt.initConfig({

    version: grunt.file.readJSON('package.json').version,

    eslint: {
      src: {
        src: ['src/**/*.js']
      },
      build: {
        src: ['gruntfile.js', 'build/**/*.js']
      }
    },

    karma: {
      options: {
        frameworks: ['jasmine', 'commonjs'],
        files: [
          'vendor/*.js',
          'src/**/*.js'
        ],
        preprocessors: {
          'vendor/*.js': ['commonjs'],
          'src/**/*.js': ['commonjs']
        },
        singleRun: true
      },
      browsers: {
        options: {
          browsers: ['Chrome', 'Firefox', 'Safari'],
          reporters: ['progress']
        }
      },
      coverage: {
        options: {
          browsers: ['PhantomJS'],
          reporters: ['progress', 'coverage'],
          preprocessors: {
            'vendor/*.js': ['commonjs'],
            'src/**/*.js': ['commonjs', 'coverage']
          },
          coverageReporter: {
            reporters: [
              { type: 'lcov', subdir: '.' },
              { type: 'text-summary', subdir: '.' }
            ]
          }
        }
      },
      sauce1: {
        options: sauceConfig.batch1
      },
      sauce2: {
        options: sauceConfig.batch2
      },
      sauce3: {
        options: sauceConfig.batch3
      }
    }

  })

  // load npm tasks
  grunt.loadNpmTasks('grunt-eslint')
  grunt.loadNpmTasks('grunt-karma')

  // load custom tasks
  require('./build/grunt-tasks/build')(grunt)
  require('./build/grunt-tasks/casper')(grunt)
  require('./build/grunt-tasks/codecov')(grunt)
  require('./build/grunt-tasks/release')(grunt)
  require('./build/grunt-tasks/open')(grunt)

  // register composite tasks
  grunt.registerTask('unit', ['karma:browsers'])
  grunt.registerTask('cover', ['karma:coverage'])
  grunt.registerTask('test', ['unit', 'cover', 'casper'])
  grunt.registerTask('sauce', ['karma:sauce1', 'karma:sauce2', 'karma:sauce3'])
  grunt.registerTask('default', ['eslint', 'build', 'test'])

  // CI
  if (process.env.CI_PULL_REQUEST) {
    grunt.registerTask('ci', ['eslint', 'cover', 'build', 'casper'])
  } else {
    grunt.registerTask('ci', ['eslint', 'cover', 'codecov', 'build', 'casper', 'sauce'])
  }
}
