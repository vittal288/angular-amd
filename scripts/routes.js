define([], function()
{
    return {
        defaultRoutePath: '/',
        routes: {
            'home': {
                templateUrl: 'views/home.html',
                dependencies: [
                    'controllers/HomeViewController'
                ]
            },
            'about': {
                templateUrl: 'views/about.html',

                dependencies: [
                    'controllers/AboutViewController',
                    'directives/app-color'
                ]
            },
            'contact': {
                templateUrl: 'views/contact.html',
                dependencies: [
                    'controllers/ContactViewController'
                ]
            },
            'display': {
                templateUrl: 'views/displaybags.html',
                controller:'DisplayViewController',
                controllerAs:'DisplayView',
                dependencies: [
                    'controllers/DisplayViewController',

                ]
            }
        }
    };
});
