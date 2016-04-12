/**
 * Created by yebo on 2016/4/8.
 */
var Flux = require('../vendor/util/FluxUtil');
var LoginAction = Flux.createAction({
    updateText: function(text) {
        this.dispatch("updateText",text);
    }
});
module.exports = LoginAction;