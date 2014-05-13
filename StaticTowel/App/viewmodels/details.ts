/// <reference path="../../Scripts/typings/bootstrap/bootstrap.d.ts" />

import m_data = require('services/dataService'); //Need this for the interfaces, even thoug the ctx is accessible throug the app
import m_base = require('base/viewmodelBase');

//The typescript viewmodel class
export class DetailsView extends m_base.ViewModelView {
    constructor(modelId: string) {
        super(modelId);
        //Note that computeds and subscriptions should be initialized in constructor or activate function in typescript viewmodel class
        this.compTitle = ko.computed(function () {
            return this.title() + ' (computed)';
        }, this);
    }

    public title: KnockoutObservable<string> = ko.observable('');
    public countries: KnockoutObservableArray<m_data.ICountry> = ko.observableArray<m_data.ICountry>();
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
        this.app.logger.log('Details View Activated', null, my.modelId, true);
        
        //Note: remember that when waiting for data i.e. from service query, the promise should be returned instead of the "true" value
        return Q.when(my.app.ctx.getCountries(my.countries)).then(() => {
            this.activateToolTips();
            return Q(true);
        });
    }
    public viewAttached(view) {
        this.activateToolTips();
    }
}
//Export oru viewmodel to the DOM as vm
export var vm = new DetailsView('details');

//The Durandal plugin-interface. 
export var activate = () => vm.activate();
export var deactivate = () => vm.deactivate();
//Note that in previous version of Durandal the attached() was named viewAttached()
export var attached = view=> vm.viewAttached(view);
export var canActivate = () => vm.canActivate();
export var canDeactivate = () => vm.canDeactivate();

