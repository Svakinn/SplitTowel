define(["require", "exports", 'base/app'], function(require, exports, m_app) {
    

    //Basic viewmodel class each view in the application inherits from
    var ViewModelView = (function () {
        function ViewModelView(modelId) {
            this.app = m_app.cspMain;
            //This is mainly useful when deciding if to react to subscription events from other objects
            this.isActivePage = ko.observable(false);
            this.modelId = modelId;
            //this.app.currentCultureId.subscribe(() => this.updateTexts(), this);
        }
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
        ViewModelView.prototype.activate = function (parms) {
            this.isActivePage(true);
            this.app.pageModuleId = this.modelId;
        };
        ViewModelView.prototype.deactivate = function (parms) {
            this.isActivePage(false);
        };

        //Durandal default lifecycle functions that are supposed to be overwritten (if usage is required)
        //Placed here so the same durandal hookup can be done on evry viewmodel:
        //export var activate = () => vm.activate();
        //export var deactivate = () => vm.deactivate();
        //export var attached = view=> vm.viewAttached(view);
        //export var canActivate = () => vm.canActivate();
        //export var canDeactivate = () => vm.canDeactivate();
        ViewModelView.prototype.canActivate = function (parms) {
            return true;
        };
        ViewModelView.prototype.canDeactivate = function () {
            return true;
        };
        ViewModelView.prototype.attached = function (view) {
            return true;
        };
        return ViewModelView;
    })();
    exports.ViewModelView = ViewModelView;
});
//# sourceMappingURL=viewmodelBase.js.map
