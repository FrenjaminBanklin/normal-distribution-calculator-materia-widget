module.exports = function(config) {
	config.set({

		// autoWatch: false, // moved into pakcage.json script option

		basePath: './',

		browsers: ['PhantomJS'],

		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'node_modules/materia-client-assets/dist/js/materia.js',
			'node_modules/materia-client-assets/dist/js/student.js',
			'node_modules/materia-client-assets/dist/js/author.js',
			'build/demo.json',
			'build/controllers/*.js',
			'tests/*.js'
		],

		frameworks: ['jasmine'],

		plugins: [
			'karma-coverage',
			'karma-eslint',
			'karma-jasmine',
			'karma-json-fixtures-preprocessor',
			'karma-mocha-reporter',
			'karma-phantomjs-launcher'
		],

		preprocessors: {
			'build/controllers/*.js': ['coverage', 'eslint'],
			'build/demo.json': ['json_fixtures']
		},

		// singleRun: true, // moved into pakcage.json script option

		//plugin-specific configurations
		eslint: {
			stopOnError: true,
			stopOnWarning: false,
			showWarnings: true,
			engine: {
				configFile: '.eslintrc.json'
			}
		},

		jsonFixturesPreprocessor: {
			variableName: '__demo__'
		},

		reporters: ['coverage', 'mocha'],

		//reporter-specific configurations

		coverageReporter: {
			check: {
				global: {
					statements: 100,
					branches:   80,
					functions:  90,
					lines:      90
				},
				each: {
					statements: 100,
					branches:   80,
					functions:  90,
					lines:      90
				}
			},
			reporters: [
				{ type: 'html', subdir: 'report-html' },
				{ type: 'cobertura', subdir: '.', file: 'coverage.xml' }
			]
		},

		mochaReporter: {
			output: 'autowatch'
		}

	});
};
