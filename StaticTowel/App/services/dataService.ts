/// <reference path="../../Scripts/typings/breeze/breeze.d.ts" />
/// <reference path="../../Scripts/typings/q/Q.d.ts" />
/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />

import m_cfg = require('config');
import m_logger = require('services/logger');
//import m_base = require('base/viewmodelBase');

//Since we do not have coutries in Metadata we provide interface for consumer of the service
export interface ICountry {
    id: KnockoutObservable<string>;
    name: KnockoutObservable<string>;
    toolTip: KnockoutObservable<string>;
}

export class DataService {
    constructor() {
        this.configBreezeManager();
    }

    private loadArray: KnockoutObservableArray<string> = ko.observableArray<string>();
    public isLoading: KnockoutObservable<boolean> = ko.observable(false);
    private manager: breeze.EntityManager;

    private pushLoader() {
        this.loadArray.push('.');
        if (!this.isLoading())
            this.isLoading(true);
    }
    private popLoader() {
        this.loadArray.pop();
        this.isLoading(this.loadArray().length > 0);
    }

    public configBreezeManager() {
        this.manager = new breeze.EntityManager(m_cfg.cfg.breezeServiceName);
        breeze.NamingConvention.none.setAsDefault();
    }

    private handleExceptions(error: any, context: string) {
        m_logger.logger.logError(error.message, error, context, true);
    }

    public getCountries(customerData: KnockoutObservableArray<ICountry>) {
        var my: DataService = this; //Need this for the eventhandlers since 'this' may have another scope when executed
        my.pushLoader();
        var query: breeze.EntityQuery = breeze.EntityQuery.from('GetCountries');
        return my.manager.executeQuery(query).then(querySucceded).fail(queryFailed);

        function querySucceded(data) {
            if (customerData && data.results) {
                var items: Array<ICountry> = new Array();
                var len: number = data.results.length;
                if (len > 0)
                    for (var i = 0; i < len; i++) {
                        //We should be able to use the knocoutobservables from breeze so following line can be replased by the following line thereafter
                        //items.push({ id: ko.observable(data.results[i].Id), name: ko.observable(data.results[i].Name), toolTip: ko.observable(data.results[i].ToolTip) });
                        items.push({ id: data.results[i].Id, name: data.results[i].Name, toolTip: data.results[i].ToolTip});
                    } 
                customerData(items);
            }
            console.log('Got our coutries');
            my.popLoader();
            return Q(true);
        }
        function queryFailed(error) {
            my.popLoader();
            my.handleExceptions(error, 'GetCountries');
            return Q(false);
        }
    }

    //Finally example on how application text retreival function could look like:
    //public getTexts(context: string, texts: KnockoutObservableArray<m_base.ITextItem>, manager?: breeze.EntityManager): Q.Promise<any> {
    //    var my = this;
    //    var man = manager;
    //    if (!man)
    //        man = this.manager; //By default
    //    my.pushLoader();
    //    var query: breeze.EntityQuery = breeze.EntityQuery.from('GetTexts/' + context);
    //    return man.executeQuery(query).then(querySucceded).fail(queryFailed);
    //
    //    function querySucceded(data) {
    //        if (data.results.length > 0) {
    //            if (texts) {
    //                var arr: Array<m_base.ITextItem> = new Array();
    //                data.results.forEach(entry=> {
    //                    arr.push({ id: entry.Id, value: ko.observable(entry.Value) });
    //                });
    //                texts(arr);
    //            }
    //        }
    //        my.popLoader();
    //        return Q.resolve(true);
    //    }
    //
    //    function queryFailed(error) {
    //        my.popLoader();
    //        return m_logger.logger.logError(error.message, error, 'Dataservice', true);
    //    }
    //}
}

export var ctx = new DataService();