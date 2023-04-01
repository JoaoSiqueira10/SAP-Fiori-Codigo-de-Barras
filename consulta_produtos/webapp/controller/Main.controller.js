sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap//m/library"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, library) {
        "use strict";
        var urlObject = library.URLHelper;

        return Controller.extend("consultaprodutos.controller.Main", {
            onInit: function () {
                //alert("Meu programa esta no ar");
            },
            onPressBuscar: function(){
                let inpu;
                inpu = this.byId("inpBusca");
                let valor = inpu.getValue();
                alert(valor);
            },
            onClickImage: function(oEvent){
                urlObject.redirect(oEvent.getSource().getSrc(), true);
            }
        });
    });
