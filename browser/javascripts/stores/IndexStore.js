/**
 * Created by yebo on 2016/4/8.
 */
var resultText="init value";
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
//for(var i=0;i<1000;i++)
    //resultText+="波波维奇";
module.exports = IndexStore;