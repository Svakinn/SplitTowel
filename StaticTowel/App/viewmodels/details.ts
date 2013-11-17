/// <reference path="../../Scripts/typings/bootstrap/bootstrap.d.ts" />

import m_logger = require('services/logger');
import m_system = require('durandal/system');
import m_data = require('services/dataService');


//The typescript viewmodel class
export class DetailsView {
    constructor() {
        //Note that computeds and subscriptions should be initialized in constructor or activate function in typescript viewmodel class
        this.compTitle = ko.computed(function () {
            return this.title() + ' (computed)';
        }, this);
    }

    public title: KnockoutObservable<string> = ko.observable('');
    public countries: KnockoutObservableArray<m_data.ICountry> = ko.observableArray();
    public compTitle: KnockoutComputed<string>; //See the constructor above

    //Remember to include the viewmodel as the first parameter of the knockout binding to have it function as a member function of the class
    //See the details.html
    public clickUpdatTitle(newTitle: string) {
        this.title(newTitle);
    }

    public activateToolTips() {
        //Bootstrap tooltips must be initialized after html elements have been rendered on page
        //(after knockout bindings have been applied)
        $('.toolTip').tooltip();
    }

    //Implementation of Durandal interface within the viewmodel
    public activate() {
        var my = this;
        this.title('My title');
        m_logger.logger.log('Details View Activated', null, 'details', true);
        
        //Note: remember that when waiting for data i.e. from service query, the promise should be returned instead of the "true" value
        return Q.when(m_data.ctx.getCountries(my.countries)).then(function (promise)
        {
            my.activateToolTips();
            return Q(true);
        });
    }
    public viewAttached(view) {
        this.activateToolTips();
    }
}
//Export oru viewmodel to the DOM as vm
export var vm = new DetailsView();

//The Durandal plugin-interface. 
//Note that in previous version of Durandal the attached() was named viewAttached()
export var activate = function () { return vm.activate(); };
export var attached = function (view, parent) { vm.viewAttached(view); }

