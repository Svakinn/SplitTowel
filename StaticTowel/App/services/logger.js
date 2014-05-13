/// <reference path="../../Scripts/typings/toastr/toastr.d.ts" />
/// <reference path="../../Scripts/typings/durandal/durandal.d.ts" />
define(["require", "exports", 'durandal/system'], function(require, exports, _system) {
    var LoggerClass = (function () {
        function LoggerClass() {
        }
        LoggerClass.prototype.log = function (message, data, source, showToast) {
            this.logIt(message, data, source, showToast, 'info');
        };

        LoggerClass.prototype.logError = function (message, data, source, showToast) {
            this.logIt(message, data, source, showToast, 'error');
        };

        LoggerClass.prototype.logIt = function (message, data, source, showToast, toastType) {
            source = source ? '[' + source + '] ' : '';
            if (data) {
                _system.log(source, message, data);
            } else {
                _system.log(source, message);
            }
            if (showToast) {
                if (toastType === 'error') {
                    toastr.error(message);
                } else {
                    toastr.info(message);
                }
            }
        };
        return LoggerClass;
    })();
    exports.LoggerClass = LoggerClass;

    exports.logger = new LoggerClass();
});
//# sourceMappingURL=logger.js.map
