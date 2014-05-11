/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />
/// <reference path="../../Scripts/typings/durandal/durandal.d.ts" /> 

//Handle application data, currenly only the loading indicator and the main menu

import m_router = require('plugins/router');
import m_conf = require('config');
import m_menu = require('base/menuContainer');
import m_data = require('services/dataService');
import m_logger = require('services/logger');

export class MainClass  {
    constructor() {
        //We want to show the loader when navigating or when loading data from the data service
        this.isLoading = ko.computed(function () {
            return (m_router.isNavigating() || m_data.ctx.isLoading());
        }, this);
    }

    public appTitle: KnockoutObservable<string> = ko.observable('Hot|Split Towel SPA');
    public isLoading: KnockoutComputed<boolean>; //Computed must be declared in the constructor
    public mainMenu: KnockoutObservable<m_menu.MenuContainer>;

    public boot(): Q.IPromise<any> {
        var my: MainClass = this; //must have handle on the correct scope inside Q function (some like to use the name _self for this)
        m_logger.logger.log('Hot Towel SPA Loaded!', null, 'app', true);
        m_router.on('router:route:not-found', function (fragment) {
            m_logger.logger.logError('No Route Found', my, 'app', true);
        });

        my.mainMenu = ko.observable(new m_menu.MenuContainer('mainMenu'));
        // select proper mainmenu item when starting from a non-home route
        var initialActivation = m_router.activeInstruction.subscribe(nv => {
            // run only once, unsubscribe from further notifications
            initialActivation.dispose();
            // set proper menu item according to the current fragment (route)
            my.mainMenu().selectById(nv.fragment);
        });
        //Using Q for loading the menu is not strictly needed now but.. if we are to load for example the menu texts from service, this is handy
        return Q.when(my.mainMenu().init(m_conf.cfg.mainMenuItems, false, '').then(function (promise) {
            //The standard Durandal2 startup, once we have our menu up and ready
            return m_router.makeRelative({ moduleId: 'viewmodels' }) // router will look here for viewmodels by convention
                    .map(m_conf.cfg.routes)            // Map the routes
                    .buildNavigationModel() // Finds all nav routes and readies them
                    .activate()           // Activate the router
            }));
    }
}

export var cspMain = new MainClass();