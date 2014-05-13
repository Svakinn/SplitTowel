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
        this.cfg = m_conf.cfg;
        this.logger = m_logger.logger;
        this.ctx = m_data.ctx;
        this.mainMenu = ko.observable(new m_menu.MenuContainer('mainMenu'));
        this.isLoading = ko.computed(() => {
            return (m_router.isNavigating() || this.ctx.isLoading());
        }, this);
    }

    public appTitle: KnockoutObservable<string> = ko.observable('Hot|Split Towel SPA');
    public isLoading: KnockoutComputed<boolean>; //Computed must be declared in the constructor
    public mainMenu: KnockoutObservable<m_menu.MenuContainer>;
    public cfg: m_conf.ConfigClass;       //Make most used module classes available from here
    public logger: m_logger.LoggerClass;
    public ctx: m_data.DataService;
    public pageModuleId: string = ''; //Viewmodels log here current active page

    //Navigation support methods:

    //Note that this will change page but not update the menu
    public navigateTo(routeId: string): boolean {
        var rr: string = routeId;
        if (rr == 'home') //Handle the fact that module home is routeid as '' (as Durandal default route)
            rr = '';
        return m_router.navigate(rr);
    }
    //To navigate to particular item within route i.e. for editing customer no 'id'
    public navigateToItem(routeId: string, id: number): boolean {
        var rr: string = routeId + '/' + String(id);
        return m_router.navigate(rr);
    }
    public navigateToItemStr(routeId: string, id: string): boolean {
        var rr: string = routeId + '/' + id;
        return m_router.navigate(rr);
    }

    //The entrypoint into the app from the shell
    public boot(): Q.IPromise<any> {
        var my: MainClass = this; //must have handle on the correct scope inside Q function (some like to use the name _self for this)
        my.logger.log('Hot Towel SPA Loaded!', null, 'app', true);
        m_router.on('router:route:not-found', () => {
            my.logger.logError('No Route Found', my, 'app', true);
        });

        // select proper mainmenu item when starting from a non-home route
        var initialActivation = m_router.activeInstruction.subscribe(nv => {
            initialActivation.dispose();// run only once, unsubscribe from further notifications
            my.mainMenu().selectById(nv.fragment); // set proper menu item according to the current fragment (route)
        });
        //Using Q for loading the menu is not strictly needed now but.. if we are to load for example the menu texts from service, this is handy
        return Q.when(my.mainMenu().init(my.cfg.mainMenuItems, false, '').then(() => {
            //The standard Durandal2 startup, once we have our menu up and ready
            return m_router.makeRelative({ moduleId: 'viewmodels' }) // router will look here for viewmodels by convention
                .map(my.cfg.routes) // Map the routes
                .buildNavigationModel() // Finds all nav routes and readies them
                .activate(); // Activate the router
        }));
    }

    //ToDo:
    //Other things that you would typically add to the application class could be all or any of the following:
    //1: Login info, login-logout methods (if app should support login)
    //2: Culture selection: List of available cultures and selected culture (if app is to support multiple languages)
    //3: Client logging methods: for logging errors and activity to server
    //4: Local storage methods, to save and retreive strings, dates, numbers and object to and from local storage, 
    //  i.e. using local storage class based on amplifyjs
    //5: Application texts handling.  For example by retreiving application texts from server given particular context (i.e. the viewmodel id)
}

export var cspMain = new MainClass();