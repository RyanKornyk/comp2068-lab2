//requres to be run in browser
var http = require('http');

//url library to parse a querystring value
var url = require('url');

//start the server
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text-plain'});
    res.write('<h1>Calculator</h1>');
    
    //get the info from the url querystring
    var qs = url.parse(req.url, true).query;
    var method = qs.method;
    var x = parseFloat(qs.x);
    var y = parseFloat(qs.y);
    
    var math = 0;
    
    if(method == "add"){
        math = x+y;
        //display the math
        res.write('Total: '+math);
    }
    else if(method == 'subtract'){
        math = x-y;
        //display the math
        res.write('Total: '+math);
    }
    else if(method == 'multiply'){
        math = x*y;
        //display the math
        res.write('Total: '+math);
    }
    else if(method == 'divide'){
        math = x/y;
        //display the math
        res.write('Total: '+math);    
    }
    else{
        res.write('Error Please enter a method of add, subtract, multiply, or divide');
    }
    
    
    
    
    res.end();
}).listen(3000);
