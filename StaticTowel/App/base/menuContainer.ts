/// <reference path="../../Scripts/typings/q/Q.d.ts" />
/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />

import m_conf = require('config');

export interface IMenuItem {
    id: string;
    route: string;
    name: KnockoutObservable<string>;
    toolTip: KnockoutObservable<string>;
    isSelected: KnockoutObservable<boolean>;
}

export class MenuContainer {
    constructor(Id: string) {
        this.id = Id;
    }
    public id: string;
    public selectedItem: KnockoutObservable<IMenuItem> = ko.observable(null);
    public itemsList: KnockoutObservableArray<IMenuItem> = ko.observableArray<IMenuItem>();

    public selectItem(item: IMenuItem) {
        //Start by disselecting previously selected item
        if (this.selectedItem && this.selectedItem() != null && this.selectedItem().id != item.id) {
            this.selectedItem().isSelected(false);
        }
        item.isSelected(true);
        this.selectedItem(item);
        return true;
    }

    public selectById(id: string) {
        var match: IMenuItem = ko.utils.arrayFirst(this.itemsList(), function (item) {
            return item.id === id;
        });
        if (match)
            this.selectItem(match);
    }

    //Init internal array from menuTemplate 
    public init(arr: Array<m_conf.IMenuItemTemplate>, IsTooltip: boolean, route: string): Q.IPromise<any> {
        var newArr = new Array<IMenuItem>();
        //Note using forEach(function (item)) causes this keyword to fall out of scope and is generaly slower to execute
        var i = 0;
        for (var tot = arr.length; i < tot; i++) {
            var item = arr[i];
            var tTip = ko.observable('');
            if (IsTooltip)
                tTip(item.toolTip);
            newArr.push({ id: item.id, route: item.route, name: ko.observable(item.id), toolTip: tTip, isSelected: ko.observable(false) });
        }
        this.itemsList(newArr);
        if (route)
            this.selectById(route);
        else if (this.selectedItem() == null && this.itemsList().length > 0)
            this.selectItem(this.itemsList()[0]);
        return Q(true);
    }

}