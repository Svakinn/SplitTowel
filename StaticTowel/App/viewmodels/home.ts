import m_base = require('base/viewmodelBase');

export class HomeView extends m_base.ViewModelView {
    public title: string = 'Home View'; 

    //Activated by Durandal
    public activate() {
        this.app.logger.log('We are at home now', null, this.modelId, true);
        return Q.resolve(true);
    }
}
export var vm = new HomeView('home');

//The Durandal plugin-interface. 
export var activate = () => vm.activate();
export var deactivate = () => vm.deactivate();
//Note that in previous version of Durandal the attached() was named viewAttached()
//export var attached = view=> vm.viewAttached(view);
export var canActivate = () => vm.canActivate();
export var canDeactivate = () => vm.canDeactivate();