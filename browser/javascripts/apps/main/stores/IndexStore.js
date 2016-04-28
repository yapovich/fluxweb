/**
 * Created by yebo on 2016/4/8.
 */
var resultText="init value";
//var HashMap=require("../entitys/HashMap");
var IndexStore = Flux.createStore({
    state:{
        //模态框是否打开
        open:false,
        //当前主题字
        text:"我是大灰狼",
        //当前功能区
        current:"left",
        //性别
        male:"male",
        //感兴趣的话题
        interests:"1,3,6,8,10",
        chooseAll:false,
    },
    openModal:function(data) {
        this.state.open=data.resultOpen;
    },
    updateText:function(data){
        this.state.text=data.resultText;
        this.state.open=false;
    },
    updateCurrent:function(data){
        this.state.current=data.resultCurrent;
        this.state.open=false;
        //console.log(this.state);
    },
    updateInterests:function(data){
        this.state.interests=data.interests;
         /*if(this.state.interests.containsKey(data.interests)){
             this.state.interests.remove(data.interests);
         }else{
             this.state.interests.put(data.interest,data.interests);
         }
        console.log(this.state.interests.values());*/
    },
    updateMale:function(data){
        this.state.male=data.male;
    },
    chooseAll:function(){
        if(this.state.interests==""){
            this.state.interests="1,2,3,4,5,6,7,8,9,10"
        }else {
            var len = this.state.interests.match(/,/ig).length;
            if (len >= 0 && len < 9)
                this.state.interests = "1,2,3,4,5,6,7,8,9,10"
            else {
                this.state.interests = "";
            }
        }
        //console.log(this.state.interests.keys());
    }
});
//for(var i=0;i<1000;i++)
//resultText+="波波维奇";
module.exports = IndexStore;