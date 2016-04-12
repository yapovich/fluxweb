// 添加CSS样式
var CssUtil={
   loadCSS:function(url) { // Copyright @ rainic.com
			if (document.createStyleSheet) {
				document.createStyleSheet(url);
			} else {
				var e = document.createElement("link");
				e.rel = "stylesheet";
				e.type = "text/css";
				e.href = url;
				document.getElementsByTagName("head")[0].appendChild(e);
		}
	}
}
//字符串全替换
String.prototype.replaceAll = function(s1, s2) {
	return this.replace(new RegExp(s1, "gm"), s2); // g全局
}
//图像工具
var ImageUtils = function() {
	var t_img; // 定时器
	var isLoad = true; // 控制变量
	var _this=this;
	// 判断图片加载的函数
	this.getBatFitSize=function(objs,containerWidth,containerHeight,callback){
		// 注意我的图片类名都是cover，因为我只需要处理cover。其它图片可以不管。
		// 查找所有封面图，迭代处理
		objs.each(function(){
			// 找到为0就将isLoad设为false，并退出each
			if($(this).height() === 0){
				isLoad = false;
				return false;
			}
		});
		// 为true，没有发现为0的。加载完毕
		if(isLoad){
			clearTimeout(t_img); // 清除定时器
			// 回调函数
			objs.each(function(){
				_this.getFitSize(containerWidth,containerHeight,$(this));
			});
			// 为false，因为找到了没有加载完成的图，将调用定时器递归
			if(callback)
			   callback();
		}else{
			isLoad = true;
			t_img = setTimeout(function(){
				_this.getBatFitSize(objs,containerWidth,containerHeight,callback); // 递归扫描
			},500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
		}
	}
	//尺寸自适应
	this.getFitSize=function(containerWidth,containerHeight,obj){
		var rake=containerWidth/containerHeight;
		var w = obj.width();
		var h = obj.height();
		if((w / h) > rake) {
			h = Math.round(containerWidth * h / w)
			w = containerWidth;
		} else {
			w = Math.round(containerHeight * w / h);
			h = containerHeight;
		}
		obj.width(w<=0?containerWidth:w);
		obj.height(h<=0?containerHeight:h);
		var left = Math.round((containerWidth - w) / 2);
		var top = Math.round((containerHeight - h) / 2);
		obj.parent().css("textAlign","center");
		obj.css({marginTop:top});
		obj.show();
	}
}
var JsonFormatTool= {
	formatJson: function (json) {
		var result = "";
		var length = json.length;
		var number = 0;
		var key = 0;
		function indent(number) {
			var result = "";
			for (var i = 0; i < number; i++)
				result += ("   ");
			return result;
		};
		//遍历输入字符串。
		for (var i = 0; i < length; i++) {
			//1、获取当前字符。
			key = json[i];
			//2、如果当前字符是前方括号、前花括号做如下处理：
			if((key=='[') || (key=='{')) {
				//（1）如果前面还有字符，并且字符为“：”，打印：换行和缩进字符字符串。
				if((i - 1 > 0) && (json[i - 1]==':')) {
					result += '\n';
					result += (indent(number));
				}
				//（2）打印：当前字符。
				result += (key);
				//（3）前方括号、前花括号，的后面必须换行。打印：换行。
				result += ('\n');
				//（4）每出现一次前方括号、前花括号；缩进次数增加一次。打印：新行缩进。
				number++;
				result += (indent(number));
				//（5）进行下一次循环。
				continue;
			}
			//3、如果当前字符是后方括号、后花括号做如下处理：
			if((key==']') || (key=='}')) {
				//（1）后方括号、后花括号，的前面必须换行。打印：换行。
				result += ('\n');
				//（2）每出现一次后方括号、后花括号；缩进次数减少一次。打印：缩进。
				number--;
				result += (indent(number));
				//（3）打印：当前字符。
				result += (key);
				//（4）如果当前字符后面还有字符，并且字符不为“，”，打印：换行。
				if(((i + 1) < length) && (json[i + 1]!=',') && (json[i + 1]!='}') && (json[i + 1]!=']')) {
					result += ('\n');
				}
				//（5）继续下一次循环。
				continue;
			}
			//4、如果当前字符是逗号。逗号后面换行，并缩进，不改变缩进次数。
			if((key==',')&&(json[i + 1]=='"'||json[i + 1]=='\\')) {
				result += (key);
				result += ('\n');
				result += (indent(number));
				continue;
			}
			//5、打印：当前字符。
			result += (key);
		}
		return result;
	}
}
/**
 * 获取本周、本季度、本月、上月的开端日期、停止日期
 */
var DateUtils = function() {
	var _self=this;
	var now = new Date(); // 当前日期
	var nowDayOfWeek = now.getDay(); // 今天本周的第几天
	var nowDay = now.getDate()+1; // 当前日
	var nowMonth = now.getMonth(); // 当前月
	var nowYear = now.getYear(); // 当前年
	nowYear += (nowYear < 2000) ? 1900 : 0; //

	var lastMonthDate = new Date(); // 上月日期
	lastMonthDate.setDate(1);
	lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
	var lastYear = lastMonthDate.getYear();
	var lastMonth = lastMonthDate.getMonth();
	//字符串转日期
	this.str2Date=function(dateStr)
	{
		return new Date(Date.parse(dateStr.replace(/-/g,"/")));
	}
	// 格局化日期：yyyy-MM-dd
	this.formatDate=function(date) {
		var myyear = date.getFullYear();
		var mymonth = date.getMonth() + 1;
		var myweekday = date.getDate();

		if (mymonth < 10) {
			mymonth = "0" + mymonth;
		}
		if (myweekday < 10) {
			myweekday = "0" + myweekday;
		}
		return (myyear + "-" + mymonth + "-" + myweekday);
	}
	this.formatTime=function(date,type) {
		var myyear = date.getFullYear();
		var mymonth = date.getMonth() + 1;
		var myweekday = date.getDate();
		var myhour=date.getHours();
		var mymin=date.getMinutes();
		var mysec=date.getSeconds();
		if (mymonth < 10) {
			mymonth = "0" + mymonth;
		}
		if (myweekday < 10) {
			myweekday = "0" + myweekday;
		}
		if (myhour < 10) {
			myhour = "0" + myhour;
		}
		if (mymin < 10) {
			mymin = "0" + mymin;
		}
		if (mysec < 10) {
			mysec = "0" + mysec;
		}
		if(type=="hour")
			return myhour+":"+mymin;
		return (myyear + "-" + mymonth + "-" + myweekday +" "+myhour+":"+mymin+":"+mysec);
	}
	//获取实际
	this.getTime=function(timeStr,type)
	{
		var date=_self.str2Date(timeStr);//new Date(timeStr);
		return _self.formatTime(date,type);
	}
	//获取当前天
	this.getDay=function(dateStr){
		var date=dateStr?_self.str2Date(dateStr):new Date();
		return _self.formatDate(date);
	}
	//获取当前天（可按天偏移）
	this.getToday=function(offset){
		var date=new Date();
		if(offset!=undefined)
			date=new Date(date.getTime()+(offset*24*60*60*1000));
		return _self.formatDate(date);
	}
	//获取当前时刻（可按小时偏移）
	this.getTodayTime=function(offset){
		var date=new Date();
		if(offset!=undefined)
			date=new Date(date.getTime()+(offset*60*60*1000));
		return _self.formatTime(date);
	}
	//获取当前月份
	this.getMonth=function(dateStr){
		var now = new Date(); // 当前日期
		var myyear = now.getFullYear();
		var mymonth = now.getMonth() + 1;
		var myweekday = now.getDate();
		if(dateStr)
		{
			var date=_self.str2Date(dateStr);
			myyear = date.getFullYear();
			mymonth = date.getMonth() + 1;
			myweekday = date.getDate();
		}

		if (mymonth < 10) {
			mymonth = "0" + mymonth;
		}
		if (myweekday < 10) {
			myweekday = "0" + myweekday;
		}
		return (myyear + "-" + mymonth);
	}
	// 获得某月的天数
	this.getMonthDays=function(myMonth) {
		var monthStartDate = new Date(nowYear, myMonth, 1);
		var monthEndDate = new Date(nowYear, myMonth + 1, 1);
		var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
		return days;
	}

	// 获得本季度的开端月份
	this.getQuarterStartMonth=function() {
		var quarterStartMonth = 0;
		if (nowMonth < 3) {
			quarterStartMonth = 0;
		}
		if (2 < nowMonth && nowMonth < 6) {
			quarterStartMonth = 3;
		}
		if (5 < nowMonth && nowMonth < 9) {
			quarterStartMonth = 6;
		}
		if (nowMonth > 8) {
			quarterStartMonth = 9;
		}
		return quarterStartMonth;
	}

	// 获得本周的开端日期
	this.getWeekStartDate=function(dateStr) {
		var weekStartDate;
		if(!dateStr)
			weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
		else
		{
			var defDate=_self.str2Date(dateStr);
			var defYear=defDate.getYear()
			var defMonth=defDate.getMonth()
			var defDay=defDate.getDate()+1;
			var defDayOfWeek=defDate.getDay();
			defYear += (defYear < 2000) ? 1900 : 0;
			weekStartDate = new Date(defYear, defMonth, defDay - defDayOfWeek);
		}
		return _self.formatDate(weekStartDate);
	}

	// 获得本周的停止日期
	this.getWeekEndDate=function(dateStr) {
		var weekEndDate;
		if(!dateStr)
			weekEndDate = new Date(nowYear, nowMonth, nowDay+ (6 - nowDayOfWeek));
		else
		{
			var defDate=_self.str2Date(dateStr);
			var defYear=defDate.getYear()
			var defMonth=defDate.getMonth()
			var defDay=defDate.getDate()+1;
			var defDayOfWeek=defDate.getDay()
			defYear += (defYear < 2000) ? 1900 : 0;
			weekEndDate = new Date(defYear, defMonth, defDay+ (6 - defDayOfWeek));
		}
		return _self.formatDate(weekEndDate);
	}

	// 获得本月的开端日期
	this.getMonthStartDate=function() {
		var monthStartDate = new Date(nowYear, nowMonth, 1);
		return _self.formatDate(monthStartDate);
	}

	// 获得本月的停止日期
	this.getMonthEndDate=function() {
		var monthEndDate = new Date(nowYear, nowMonth, _self.getMonthDays(nowMonth));
		return _self.formatDate(monthEndDate);
	}

	// 获得上月开端时候
	this.getLastMonthStartDate=function() {
		var lastMonthStartDate = new Date(nowYear, lastMonth, 1);
		return _self.formatDate(lastMonthStartDate);
	}

	// 获得上月停止时候
	this.getLastMonthEndDate=function() {
		var lastMonthEndDate = new Date(nowYear, lastMonth,
			_self.getMonthDays(lastMonth));
		return _self.formatDate(lastMonthEndDate);
	}

	// 获得本季度的开端日期
	this.getQuarterStartDate=function() {

		var quarterStartDate = new Date(nowYear, _self.getQuarterStartMonth(), 1);
		return _self.formatDate(quarterStartDate);
	}

	// 或的本季度的停止日期
	this.getQuarterEndDate=function() {
		var quarterEndMonth = _self.getQuarterStartMonth() + 2;
		var quarterStartDate = new Date(nowYear, quarterEndMonth,
			_self.getMonthDays(quarterEndMonth));
		return _self.formatDate(quarterStartDate);
	}
}
