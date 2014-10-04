require.config({
    paths: {
        "jquery": "libs/jquery/dist/jquery",
        "backbone": "libs/backbone-amd/backbone",
        "underscore": "libs/underscore-amd/underscore",

        // views
        'AppView': "views/app"
    }
});

require(['AppView'], function(AppView) {
    new AppView;
})