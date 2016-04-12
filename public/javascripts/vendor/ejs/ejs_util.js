/**
* 模板应用 对EJS的封装，包含了国际化内容
*
*/
/**
 * 将html中由lang属性标记的部分翻译成当前语系下的字符串 <div lang="key"></div>
 */
(function(){
	var translate_init = function(){
		
		var dict = "page_template";
		jQuery.i18n.properties({
		    name:dict,
		    path:'bundle/',
		    mode:'both'
		});
	};

	var translate_html = function(html){

		var html_i18n = $("<div>" + translate_all_string(html) + "</div>");
		
		$("[lang]", html_i18n).each(function(){				
			var keystring = $(this).attr("lang");
			switch(this.tagName.toLowerCase()){
				case "input" : 
					$(this).val(translate_string(keystring));				
					break;
				default:
					$(this).text(translate_string(keystring));
				break;
			}		
		});	
		
		return html_i18n.html();
	};

	/**
	 * 根据 key 获取当前语言下的字符串
	 */
	var translate_string = function(keystring, dictionary){
		var str = keystring.split(':');
		var key = str[0];
		
		if(str.length > 1){
			var data_arry = str[1].split(',');
			return jQuery.i18n.prop(key, data_arry);
		}

		return jQuery.i18n.prop(key);
	};

	var translate_all_string = function(string, dictionary){
		
		var string_i18n = string;	
		var reg = new RegExp("<lang:[^>]+>", "g");
		
		$(string_i18n.match(reg)).each(function(index, str){
			
			var reg = new RegExp(str, "g");
			string_i18n = string_i18n.replace(reg, translate_string(str.substring(6, str.length - 1)));
		});
		
		return string_i18n;
	};

	/**
	 * 翻译json中需要翻译的部分(由 <lang:key> 设定)，生成json对象
	 */
	var translate_json = function(jsonString, dictionary) {

		return $.parseJSON(translate_all_string(jsonString));
	};
	EjsUtil=function(){
		translate_init();
		this.update = function(id,tpllink,data,isAppend){
			var html
			if(id==undefined)
				html = new EJS({url: tpllink}).render(data?data:new Object());
			else
			{
			        if($("#"+id).get(0))
			        {
			            if(!isAppend)
			              $("#"+id).html("");
				    html=new EJS({url:tpllink}).update(id,data?data:new Object(),function(_html){
						//return _html;
						return translate_html(_html);
				    },isAppend);
			        }
			}
			return html?translate_html(html):'';
		};
	}
})();