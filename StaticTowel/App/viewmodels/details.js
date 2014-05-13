/// <reference path="../../Scripts/typings/bootstrap/bootstrap.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'base/viewmodelBase'], function(require, exports, m_base) {
    //The typescript viewmodel class
    var DetailsView = (function (_super) {
        __extends(DetailsView, _super);
        function DetailsView(modelId) {
            _super.call(this, modelId);
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
            var _this = this;
            var my = this;
            this.title('My title');
            this.app.logger.log('Details View Activated', null, my.modelId, true);

            //Note: remember that when waiting for data i.e. from service query, the promise should be returned instead of the "true" value
            return Q.when(my.app.ctx.getCountries(my.countries)).then(function () {
                _this.activateToolTips();
                return Q(true);
            });
        };
        DetailsView.prototype.viewAttached = function (view) {
            this.activateToolTips();
        };
        return DetailsView;
    })(m_base.ViewModelView);
    exports.DetailsView = DetailsView;

    //Export oru viewmodel to the DOM as vm
    exports.vm = new DetailsView('details');

    //The Durandal plugin-interface.
    exports.activate = function () {
        return exports.vm.activate();
    };
    exports.deactivate = function () {
        return exports.vm.deactivate();
    };

    //Note that in previous version of Durandal the attached() was named viewAttached()
    exports.attached = function (view) {
        return exports.vm.viewAttached(view);
    };
    exports.canActivate = function () {
        return exports.vm.canActivate();
    };
    exports.canDeactivate = function () {
        return exports.vm.canDeactivate();
    };
});
//# sourceMappingURL=details.js.map
