var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'base/viewmodelBase'], function(require, exports, m_base) {
    var HomeView = (function (_super) {
        __extends(HomeView, _super);
        function HomeView() {
            _super.apply(this, arguments);
            this.title = 'Home View';
        }
        //Activated by Durandal
        HomeView.prototype.activate = function () {
            this.app.logger.log('We are at home now', null, this.modelId, true);
            return Q.resolve(true);
        };
        return HomeView;
    })(m_base.ViewModelView);
    exports.HomeView = HomeView;
    exports.vm = new HomeView('home');

    //The Durandal plugin-interface.
    exports.activate = function () {
        return exports.vm.activate();
    };
    exports.deactivate = function () {
        return exports.vm.deactivate();
    };

    //Note that in previous version of Durandal the attached() was named viewAttached()
    //export var attached = view=> vm.viewAttached(view);
    exports.canActivate = function () {
        return exports.vm.canActivate();
    };
    exports.canDeactivate = function () {
        return exports.vm.canDeactivate();
    };
});
//# sourceMappingURL=home.js.map
