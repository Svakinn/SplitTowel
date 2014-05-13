/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />
/// <reference path="../../Scripts/typings/durandal/durandal.d.ts" />
import m_dataservice = require('services/dataService');
import m_app = require('base/app');

//Example structure for app texts from server
export interface ITextItem {
    id: string;
    value: KnockoutObservable<string>;
}

//Basic viewmodel class each view in the application inherits from
export class ViewModelView {
    constructor(modelId: string) {
        this.modelId = modelId;
        //this.app.currentCultureId.subscribe(() => this.updateTexts(), this);
    }

    public modelId: string; //To be overloaded with value by main class
    public pageId: string;  //To be set with moduleid from current page
    public app: m_app.MainClass = m_app.cspMain; //Access from each viewmodel to the app object

    //This is mainly useful when deciding if to react to subscription events from other objects 
    public isActivePage: KnockoutObservable<boolean> = ko.observable(false);

    //Application texts handling you could implement here, for example:
    //private textsName: string = '';
    //private lastCultureIdFetched: string = '';
    //public texts: KnockoutObservableArray<ITextItem> = ko.observableArray<ITextItem>();
    //public updateTexts(cultId: string): any {
    //    if (this.textsName === '')
    //        this.textsName = this.modelId;
    //    if (this.lastCultureIdFetched != cultId) {
    //        this.lastCultureIdFetched = cultId;
    //        return m_dataservice.ctx.getTexts(this.textsName, this.texts, this.app.textManager);
    //    }
    //    else
    //        return Q.resolve(true);
    //}
    //public tx(id: string): string {
    //    var match: ITextItem = ko.utils.arrayFirst(this.texts(), item=> item.id === id);
    //    return match ? match.value() : '';
    //}
    //Returns the observable, not plain string like tx() does
    //public txO(id: string): KnockoutObservable<string> {
    //    var match: ITextItem = ko.utils.arrayFirst(this.texts(), item=> item.id === id);
    //    return match ? match.value : ko.observable('');
    //}

    //Default durandal lifecycle andling functions when overritten by childs then this base sould be called: super.activate();
    public activate(parms?: any): any {
        this.isActivePage(true);
        this.app.pageModuleId = this.modelId;
    }
    public deactivate(parms?: any): any {
        this.isActivePage(false);
    }

    //Durandal default lifecycle functions that are supposed to be overwritten (if usage is required)
    //Placed here so the same durandal hookup can be done on evry viewmodel:
    //export var activate = () => vm.activate();
    //export var deactivate = () => vm.deactivate();
    //export var attached = view=> vm.viewAttached(view);
    //export var canActivate = () => vm.canActivate();
    //export var canDeactivate = () => vm.canDeactivate();
    public canActivate(parms?: any): any { return true; }
    public canDeactivate(): any { return true; }
    public attached(view: any): any { return true; }
} 