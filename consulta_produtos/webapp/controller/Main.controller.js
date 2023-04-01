sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, library, JSONModel) {
        "use strict";
        var urlObject = library.URLHelper;

        return Controller.extend("consultaprodutos.controller.Main", {
            onInit: function () {
                //alert("Meu programa esta no ar");
                //onInit = INITIALIZATION no ABAP  this = ME no ABAP
                let produto = {};
                let productModel = new JSONModel(produto);
                let view = this.getView();
                view.setModel(productModel,"ModeloProduto");
            },
            
            onClickImage: function(oEvent){
                urlObject.redirect(oEvent.getSource().getSrc(), true);
            },

            onPressBuscar: function(){
                let inpu;
                inpu = this.byId("inpBusca");
                let valor = inpu.getValue();
                //alert(valor);

                let parameters = {
                    url : "https://world.openfoodfacts.org/api/v2/product/" + valor,
                    method : "GET",
                    async : true,
                    crossDomain : true
                };

                $.ajax(parameters).done(function(response){
                    let oProdutoModel = this.getView().getModel("ModeloProduto");
                    //clear
                    oProdutoModel.setData({});
                    oProdutoModel.refresh();
                    oProdutoModel.setData(response);
                    oProdutoModel.refresh();
                }.bind(this)) //sucesso
                .fail(function(){
                    debugger
                }.bind(this)); //erro

            }
        });
    });
