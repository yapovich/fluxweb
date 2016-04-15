/**
 * Created by yebo on 2016/4/8.
 */
var Flux = require('../../vendor/util/FluxUtil');
var resultText="";
var IndexStore = Flux.createStore({
    update:function(action) {
        var text = action.text.trim();
        switch(action.actionType) {
            case "updateText":
                if (text !== '') {
                    resultText=text;
                }
                break;
            default:
            // no op
        }
    },
    getResultText: function() {
        return resultText;
    }
});
module.exports = IndexStore;