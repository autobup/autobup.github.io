var content = document.getElementById('content').innerHTML;
var template = ' \
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> \
<html> \
<head> \
<meta http-equiv="content-type" content="text/html" charset="utf-8"/> \
<meta charset="utf-8"> \
<link rel="shortcut icon" href=""> \
<meta name="robots" content="index,follow"> \
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">\
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>\
<!--<meta http-equiv="cache-control" content="no-cache">--> \
<title>Autobup\'s Cydia repo</title> \
</head> \
<body> \
 \
 <div class="container">\
	<h1>Autobup\'s Repository</h1>\
</div>\
 \
<div class="container">\
<div> \
' + content + '\
</div> \
</div> \
';
document.documentElement.innerHTML = template;