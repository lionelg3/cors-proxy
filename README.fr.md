# CORS Proxy

## C'est quoi ? 

CORS Proxy est un simple outil permettant de proxifier les requêtes HTTP 
GET de requête CORS GET, POST ou PUT. Cet outil n'est pas destiné
à la production mais a pour objectif de permettre la visualisation de 
la requête dite "preflight" d'un appel CORS avec la méthode PUT.

## Comment çà s'utilise ?

L'objectif étant de visualiser une requête de preflight lors d'un
appel CORS, l'appel doit être réalisé à partir d'une autre "Origin" 
que le site serveur. Pour ma part, je recommande l'utilisation du 
site [http://www.test-cors.org](http://www.test-cors.org). Ce site
permet de tester la validiter d'un appel CORS.


Utiliser la méthode GET:

[http://www.test-cors.org/#?client_method=GET&client_credentials=false&server_url=https%3A%2F%2Fwww.metaweather.com%2Fapi%2Flocation%2F615702%2F&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote](http://www.test-cors.org/#?client_method=GET&client_credentials=false&server_url=https%3A%2F%2Fwww.metaweather.com%2Fapi%2Flocation%2F615702%2F&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote)


Utiliser la méthode POST:

[http://www.test-cors.org/#?client_method=POST&client_credentials=false&client_headers=Content-Type%3A%20application%2Fx-www-form-urlencoded&client_postdata=target%3Dhttps%3A%2F%2Fwww.metaweather.com%2Fapi%2Flocation%2F615702%2F&server_url=https%3A%2F%2Fcors-test-srv.appspot.com%2Fcors&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote](http://www.test-cors.org/#?client_method=POST&client_credentials=false&client_headers=Content-Type%3A%20application%2Fx-www-form-urlencoded&client_postdata=target%3Dhttps%3A%2F%2Fwww.metaweather.com%2Fapi%2Flocation%2F615702%2F&server_url=https%3A%2F%2Fcors-test-srv.appspot.com%2Fcors&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote)

Utiliser la méthode PUT (permet de voir le preflight) :

[http://www.test-cors.org/#?client_method=PUT&client_credentials=false&client_postdata=%7B%22target%22%3A%22https%3A%2F%2Fwww.metaweather.com%2Fapi%2Flocation%2F615702%2F%22%7D%0A&server_url=https%3A%2F%2Fcors-test-srv.appspot.com%2Fcors&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote&client_headers=content-type%3A%20application%2Fjson](http://www.test-cors.org/#?client_method=PUT&client_credentials=false&client_postdata=%7B%22target%22%3A%22https%3A%2F%2Fwww.metaweather.com%2Fapi%2Flocation%2F615702%2F%22%7D%0A&server_url=https%3A%2F%2Fcors-test-srv.appspot.com%2Fcors&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote&client_headers=content-type%3A%20application%2Fjson)
