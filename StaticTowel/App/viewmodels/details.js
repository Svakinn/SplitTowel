/// <reference path="../../Scripts/typings/bootstrap/bootstrap.d.ts" />
define(["require", "exports", 'services/logger', 'services/dataService'], function(require, exports, m_logger, m_data) {
    //The typescript viewmodel class
    var DetailsView = (function () {
        function DetailsView() {
            this.title = ko.observable('');
            this.countries = ko.observableArray();
            //Note that computeds and subscriptions should be initialized in constructor or activate function in typescript viewmodel class
            this.compTitle = ko.computed(function () {
                return this.title() + ' (computed)';
            }, this);
        }
        //Remember to include the viewmodel as the first parameter of the knockout binding to have it function as a member function of the class
        //See the details.html
        DetailsView.prototype.clickUpdatTitle = function (newTitle) {
            this.title(newTitle);
        };

        DetailsView.prototype.activateToolTips = function () {
            //Bootstrap tooltips must be initialized after html elements have been rendered on page
            //(after knockout bindings have been applied)
            $('.toolTip').tooltip();
        };

        //Implementation of Durandal interface within the viewmodel
        DetailsView.prototype.activate = function () {
            var my = this;
            this.title('My title');
            m_logger.logger.log('Details View Activated', null, 'details', true);

            //Note: remember that when waiting for data i.e. from service query, the promise should be returned instead of the "true" value
            return Q.when(m_data.ctx.getCountries(my.countries)).then(function (promise) {
                my.activateToolTips();
                return Q(true);
            });
        };
        DetailsView.prototype.viewAttached = function (view) {
            this.activateToolTips();
        };
        return DetailsView;
    })();
    exports.DetailsView = DetailsView;

    //Export oru viewmodel to the DOM as vm
    exports.vm = new DetailsView();

    //The Durandal plugin-interface.
    //Note that in previous version of Durandal the attached() was named viewAttached()
    exports.activate = function () {
        return exports.vm.activate();
    };
    exports.attached = function (view, parent) {
        exports.vm.viewAttached(view);
    };
});
//# sourceMappingURL=details.js.map
