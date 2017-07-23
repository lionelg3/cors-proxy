# CORS Proxy

https://cors-test-srv.appspot.com/

## What is it ? 

CORS Proxy is a simple tool that can be use to proxify HTTP GET requests 
into CORS GET, POST or PUT requests. This tool is not made form prodution,
its' goal is to visualise the "preflight" request call made before a CORS
request made with PUT.

## How to use it ?

Since the goal is to see the "preflight" request call made before a CORS,
the request must be made from another "Origin" than the server one. 
I use the web site [http://www.test-cors.org](http://www.test-cors.org).
This site is made for this.


Using GET method:

[http://www.test-cors.org/#?client_method=GET&client_credentials=false&server_url=https%3A%2F%2Fwww.metaweather.com%2Fapi%2Flocation%2F615702%2F&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote](http://www.test-cors.org/#?client_method=GET&client_credentials=false&server_url=https%3A%2F%2Fwww.metaweather.com%2Fapi%2Flocation%2F615702%2F&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote)


Using POST method:

[http://www.test-cors.org/#?client_method=POST&client_credentials=false&client_headers=Content-Type%3A%20application%2Fx-www-form-urlencoded&client_postdata=target%3Dhttps%3A%2F%2Fwww.metaweather.com%2Fapi%2Flocation%2F615702%2F&server_url=https%3A%2F%2Fcors-test-srv.appspot.com%2Fcors&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote](http://www.test-cors.org/#?client_method=POST&client_credentials=false&client_headers=Content-Type%3A%20application%2Fx-www-form-urlencoded&client_postdata=target%3Dhttps%3A%2F%2Fwww.metaweather.com%2Fapi%2Flocation%2F615702%2F&server_url=https%3A%2F%2Fcors-test-srv.appspot.com%2Fcors&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote)


Using PUT method (now you will seen the preflight OPTIONS request):

[http://www.test-cors.org/#?client_method=PUT&client_credentials=false&client_postdata=%7B%22target%22%3A%22https%3A%2F%2Fwww.metaweather.com%2Fapi%2Flocation%2F615702%2F%22%7D%0A&server_url=https%3A%2F%2Fcors-test-srv.appspot.com%2Fcors&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote&client_headers=content-type%3A%20application%2Fjson](http://www.test-cors.org/#?client_method=PUT&client_credentials=false&client_postdata=%7B%22target%22%3A%22https%3A%2F%2Fwww.metaweather.com%2Fapi%2Flocation%2F615702%2F%22%7D%0A&server_url=https%3A%2F%2Fcors-test-srv.appspot.com%2Fcors&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote&client_headers=content-type%3A%20application%2Fjson)

