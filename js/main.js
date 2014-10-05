require.config({
    paths: {
        "jquery": "libs/jquery/dist/jquery",
        "backbone": "libs/backbone-amd/backbone",
        "underscore": "libs/underscore-amd/underscore",
        "text": "libs/requirejs/requirejs-plugins/text",

        // views
        "app": "views/app"
    }
});

require(['app'], function(App) {
    var ribaModel = new App.Models.riba();

    var ribaView = new App.Views.riba({ model: ribaModel });

    var ribaCollection = new App.Collections.riba();

    ribaCollection.add(ribaModel);

    console.log(ribaCollection);
});