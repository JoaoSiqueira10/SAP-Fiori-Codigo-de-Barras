sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("consultaprodutos.controller.Main", {
            onInit: function () {
                //alert("Meu programa esta no ar");
            },
            onPressBuscar: function(){
                let inpu;
                inpu = this.byId("inpBusca");
                let valor = inpu.getValue();
                alert(valor);
            }
        });
    });
