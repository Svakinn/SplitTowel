/// <reference path="../../Scripts/typings/q/Q.d.ts" />
/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />
define(["require", "exports"], function(require, exports) {
    var MenuContainer = (function () {
        function MenuContainer(id) {
            this.selectedItem = ko.observable(null);
            this.itemsList = ko.observableArray();
            this.id = id;
        }
        MenuContainer.prototype.selectItem = function (item) {
            //Start by disselecting previously selected item
            if (this.selectedItem && this.selectedItem() != null && this.selectedItem().id != item.id) {
                this.selectedItem().isSelected(false);
            }
            item.isSelected(true);
            this.selectedItem(item);
            return true;
        };

        MenuContainer.prototype.selectById = function (id) {
            var match = ko.utils.arrayFirst(this.itemsList(), function (item) {
                return item.id === id;
            });
            if (match)
                this.selectItem(match);
        };

        //Init internal array from menuTemplate
        MenuContainer.prototype.init = function (arr, isTooltip, route) {
            var newArr = new Array();

            //Note using forEach(function (item)) causes this keyword to fall out of scope and is generaly slower to execute
            var i = 0;
            for (var tot = arr.length; i < tot; i++) {
                var item = arr[i];
                var tTip = ko.observable('');
                if (isTooltip)
                    tTip(item.toolTip);
                newArr.push({ id: item.id, route: item.route, name: ko.observable(item.id), toolTip: tTip, isSelected: ko.observable(false) });
            }
            this.itemsList(newArr);
            if (route)
                this.selectById(route);
            else if (this.selectedItem() == null && this.itemsList().length > 0)
                this.selectItem(this.itemsList()[0]);
            return Q(true);
        };
        return MenuContainer;
    })();
    exports.MenuContainer = MenuContainer;
});
//# sourceMappingURL=menuContainer.js.map
