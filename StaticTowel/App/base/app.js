/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />
/// <reference path="../../Scripts/typings/durandal/durandal.d.ts" />
define(["require", "exports", 'plugins/router', 'config', 'base/menuContainer', 'services/dataService', 'services/logger'], function(require, exports, m_router, m_conf, m_menu, m_data, m_logger) {
    var MainClass = (function () {
        function MainClass() {
            var _this = this;
            this.appTitle = ko.observable('Hot|Split Towel SPA');
            this.pageModuleId = '';
            //We want to show the loader when navigating or when loading data from the data service
            this.cfg = m_conf.cfg;
            this.logger = m_logger.logger;
            this.ctx = m_data.ctx;
            this.mainMenu = ko.observable(new m_menu.MenuContainer('mainMenu'));
            this.isLoading = ko.computed(function () {
                return (m_router.isNavigating() || _this.ctx.isLoading());
            }, this);
        }
        //Navigation support methods:
        //Note that this will change page but not update the menu
        MainClass.prototype.navigateTo = function (routeId) {
            var rr = routeId;
            if (rr == 'home')
                rr = '';
            return m_router.navigate(rr);
        };

        //To navigate to particular item within route i.e. for editing customer no 'id'
        MainClass.prototype.navigateToItem = function (routeId, id) {
            var rr = routeId + '/' + String(id);
            return m_router.navigate(rr);
        };
        MainClass.prototype.navigateToItemStr = function (routeId, id) {
            var rr = routeId + '/' + id;
            return m_router.navigate(rr);
        };

        //The entrypoint into the app from the shell
        MainClass.prototype.boot = function () {
            var my = this;
            my.logger.log('Hot Towel SPA Loaded!', null, 'app', true);
            m_router.on('router:route:not-found', function () {
                my.logger.logError('No Route Found', my, 'app', true);
            });

            // select proper mainmenu item when starting from a non-home route
            var initialActivation = m_router.activeInstruction.subscribe(function (nv) {
                initialActivation.dispose(); // run only once, unsubscribe from further notifications
                my.mainMenu().selectById(nv.fragment); // set proper menu item according to the current fragment (route)
            });

            //Using Q for loading the menu is not strictly needed now but.. if we are to load for example the menu texts from service, this is handy
            return Q.when(my.mainMenu().init(my.cfg.mainMenuItems, false, '').then(function () {
                //The standard Durandal2 startup, once we have our menu up and ready
                return m_router.makeRelative({ moduleId: 'viewmodels' }).map(my.cfg.routes).buildNavigationModel().activate();
            }));
        };
        return MainClass;
    })();
    exports.MainClass = MainClass;

    exports.cspMain = new MainClass();
});
//# sourceMappingURL=app.js.map
