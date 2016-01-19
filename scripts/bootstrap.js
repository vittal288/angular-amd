require.config({
    baseUrl: 'scripts',
    paths: {
		'angular': '../bower_components/angular/angular',
		'angular-route': '../bower_components/angular-route/angular-route',
    'angular-ui-router': '../bower_components/angular-ui-router/angular-ui-router.min',
		'bootstrap': '../lib/bootstrap/js/bootstrap.min',
		'jquery': '../bower_components/jquery/dist/jquery'
    },
	shim: {
		'app': {
			deps: ['angular', 'angular-route', 'angular-ui-router', 'bootstrap']
		},
		'angular-route': {
			deps: ['angular']
		},
    'angular-ui-router': {
			deps: ['angular']
		},
		'bootstrap': {
			deps: ['jquery']
		}
	}
});

require
(
    [
        'app'
    ],
    function(app)
    {
        angular.bootstrap(document, ['app']);
    }
);
