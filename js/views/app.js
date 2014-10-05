define(
    [
        'backbone',
        'underscore',
        'config'
    ],

    function (Backbone, _, config) {

        var App = config;

        App.Views = {};
        App.Models = {};
        App.Collections = {};

        App.Collections.riba = Backbone.Collection.extend({
            model: App.Models.riba
        });

        App.Models.riba = Backbone.Model.extend({
            defaults: {
                name: 'Bob',
                age: '23',
                job: 'web-developer'
            }
        });

        App.Views.riba = Backbone.View.extend({
            tagName: 'li',
            template: _.template('<%= name%> ( <%= age %> ) - <%= job%>'),

            initialize: function() {
                this.render();
            },
            render: function() {
                var self = this;
                var a = self.$el.html(self.template( self.model.toJSON() ));
                $('body').append(a);
            }
        });

        return App;
})