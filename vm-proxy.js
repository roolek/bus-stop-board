var http = require('http'),
    httpProxy = require('http-proxy');

httpProxy.createProxyServer({target:'http://www.peka.poznan.pl/'}).listen(8000); 
