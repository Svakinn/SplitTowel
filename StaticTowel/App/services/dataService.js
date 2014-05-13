/// <reference path="../../Scripts/typings/breeze/breeze.d.ts" />
/// <reference path="../../Scripts/typings/q/Q.d.ts" />
/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />
define(["require", "exports", 'config', 'services/logger'], function(require, exports, m_cfg, m_logger) {
    

    var DataService = (function () {
        function DataService() {
            this.loadArray = ko.observableArray();
            this.isLoading = ko.observable(false);
            this.configBreezeManager();
        }
        DataService.prototype.pushLoader = function () {
            this.loadArray.push('.');
            if (!this.isLoading())
                this.isLoading(true);
        };
        DataService.prototype.popLoader = function () {
            this.loadArray.pop();
            this.isLoading(this.loadArray().length > 0);
        };

        DataService.prototype.configBreezeManager = function () {
            this.manager = new breeze.EntityManager(m_cfg.cfg.breezeServiceName);
            breeze.NamingConvention.none.setAsDefault();
        };

        DataService.prototype.handleExceptions = function (error, context) {
            m_logger.logger.logError(error.message, error, context, true);
        };

        DataService.prototype.getCountries = function (customerData) {
            var my = this;
            my.pushLoader();
            var query = breeze.EntityQuery.from('GetCountries');
            return my.manager.executeQuery(query).then(querySucceded).fail(queryFailed);

            function querySucceded(data) {
                if (customerData && data.results) {
                    var items = new Array();
                    var len = data.results.length;
                    if (len > 0)
                        for (var i = 0; i < len; i++) {
                            //We should be able to use the knocoutobservables from breeze so following line can be replased by the following line thereafter
                            //items.push({ id: ko.observable(data.results[i].Id), name: ko.observable(data.results[i].Name), toolTip: ko.observable(data.results[i].ToolTip) });
                            items.push({ id: data.results[i].Id, name: data.results[i].Name, toolTip: data.results[i].ToolTip });
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
        };
        return DataService;
    })();
    exports.DataService = DataService;

    exports.ctx = new DataService();
});
//# sourceMappingURL=dataService.js.map
