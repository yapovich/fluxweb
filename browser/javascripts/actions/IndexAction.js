/**
 * Created by yebo on 2016/4/8.
*/
var IndexAction = Flux.createAction({
    updateText: function(text) {
        this.dispatch("updateText",text);
    }
});
module.exports = IndexAction;