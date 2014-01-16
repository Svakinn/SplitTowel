/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />
/// <reference path="../../Scripts/typings/durandal/durandal.d.ts" />
define(["require", "exports", 'plugins/router', 'config', 'base/menuContainer', 'services/dataService', 'services/logger'], function(require, exports, m_router, m_conf, m_menu, m_data, m_logger) {
    var MainClass = (function () {
        function MainClass() {
            this.appTitle = ko.observable('Hot|Split Towel SPA');
            //We want to show the loader when navigating or when loading data from the data service
            this.isLoading = ko.computed(function () {
                return (m_router.isNavigating() || m_data.ctx.isLoading());
            }, this);
        }
        MainClass.prototype.boot = function () {
            var my = this;
            m_logger.logger.log('Hot Towel SPA Loaded!', null, 'app', true);
            m_router.on('router:route:not-found', function (fragment) {
                m_logger.logger.logError('No Route Found', my, 'app', true);
            });

            my.mainMenu = ko.observable(new m_menu.MenuContainer('mainMenu'));

            //Using Q for loading the menu is not strictly needed now but.. if we are to load for example the menu texts from service, this is handy
            return Q.when(my.mainMenu().init(m_conf.cfg.mainMenuItems, false, '').then(function (promise) {
                //The standard Durandal2 startup, once we have our menu up and ready
                return m_router.makeRelative({ moduleId: 'viewmodels' }).map(m_conf.cfg.routes).buildNavigationModel().activate();
            }));
        };
        return MainClass;
    })();
    exports.MainClass = MainClass;

    exports.cspMain = new MainClass();
});
//# sourceMappingURL=app.js.map
