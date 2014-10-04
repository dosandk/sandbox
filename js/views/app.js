define(['backbone'], function (Backbone) {

    var App = Backbone.View.extend({
        initialize: function () {
            console.log('Hello World');
        }
    });

    return App;
})