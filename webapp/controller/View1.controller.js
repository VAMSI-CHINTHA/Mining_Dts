sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller,Filter,FilterOperator) => {
    "use strict";

    return Controller.extend("miningjson0956.vam0956miningjson.controller.View1", {
        onInit() {
        },
        onRowSelect:function(oEvt){
            var oItem = oEvt.mParameters.listItem;
            var locId = oItem.mProperties.title

            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo('RouteView2',{
                locationId:locId
            })

        }, onFilterSearch: function(oEvt){
            
            var oNameInput1 = this.byId("searchField");
            var sNameValue1 = oNameInput1.getValue();
           
            var aFilters = [];
            if (sNameValue1) {
              aFilters.push(new Filter("country", FilterOperator.Contains, sNameValue1));
            }
            
            var oTable = this.byId("idList");
            var oBinding = oTable.getBinding("items")
            oBinding.filter(aFilters)
        },
    });
});