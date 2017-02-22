var SS = (function(){
	var result = "";
	var regex = /\{\{([A-Za-z_\$]+(\[\d+\]+|\.[A-Za-z_\$]+|[A-Za-z0-9_$])*)\}\}/g;
	var ss = {};
	ss.Render = function (template, scope) {
    	return result = template.replace(regex, function ($, $1) {
            $1 = $1.trim();
            var innerdata = scope;
            var items = $1.split('.');

            for (var i = 0; i < items.length; i++) {
                var m;
                if (/\[\d+\]/.test(items[i])) {
                    innerdata = innerdata[items[i].split('[')[0]];
                    var reNumber = /\[(\d+)\]/g;
                    while (m = reNumber.exec(items[i])) {
                        innerdata = innerdata[m[1]];
                    }
                }
                else {
                    innerdata = innerdata[items[i]];
                }
            }
            return innerdata;
        	});
        }
	return ss;
})()