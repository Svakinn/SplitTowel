define(["require", "exports"], function(require, exports) {
    //Why not put configs in TypeScript class?
    var ConfigClass = (function () {
        function ConfigClass() {
            this.breezeServiceName = 'http://localhost:55414/breeze/Country';
            this.routes = [
                { route: '', moduleId: 'home', title: 'Home', nav: 1 },
                { route: 'details', moduleId: 'details', title: 'Details', nav: 2 }
            ];
            this.mainMenuItems = [
                { id: 'home', route: '#/', title: 'Home', visible: true, toolTip: 'Go home' },
                { id: 'details', route: '#/details', title: 'Customers', visible: true, toolTip: 'Customers' }
            ];
        }
        return ConfigClass;
    })();
    exports.ConfigClass = ConfigClass;

    exports.cfg = new ConfigClass();
});
//# sourceMappingURL=config.js.map
