/**
 * Created by yebo on 2016/4/8.
 */
var resultText="init value";
//var HashMap=require("../entrys/HashMap");
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
        interests:"1,3"
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
         if(this.state.interests.containsKey(data.interests)){
             this.state.interests.remove(data.interests);
         }else{
             this.state.interests.put(data.interest,data.interests);
         }
        console.log(this.state.interests.values());
    },
    updateMale:function(data){
        this.state.male=data.male;
    },
    chooseAll:function(){
        //console.log(this.state.interests.keys().length);
        if(this.state.interests.keys().length==6){
            this.state.interests.clear();
        }else{
            this.state.interests.clear();
            for(var i=1;i<7;i++){
                //console.log(i);
                this.state.interests.put(i,i);
            }
        }
        //console.log(this.state.interests.keys());
    }
});
//for(var i=0;i<1000;i++)
//resultText+="波波维奇";
module.exports = IndexStore;