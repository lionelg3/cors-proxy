# CORS Proxy

## C'est quoi ? 

CORS Proxy est un simple outil permettant de proxifier les requêtes HTTP GET de requête CORS GET, POST ou PUT. Cet outil n'est pas destiné
à la production mais a pour objectif de permettre la visualisation de 
la requête dite "preflight" d'un appel CORS avec la méthode PUT.

## Comment çà s'utilise ?

L'objectif étant de visualiser si une requête de preflight lors d'un
appel CORS. L'appel doit être réalisé à partir d'une autre "Origin" 
que le site serveur. Pour ma part, je recommande l'utilisation du 
site [http://www.test-cors.org](http://www.test-cors.org). Ce site
permet de tester la validiter d'un appel CORS.


Utiliser la méthode GET (ne permet pas de voir le preflight) :

[http://www.test-cors.org/#?client_method=GET&client_credentials=false&server_url=http%3A%2F%2Flocalhost%3A3000%2Fcors%3Ftarget%3Dhttps%3A%2F%2Fwww.metaweather.com%2Fapi%2Flocation%2F615702&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote](http://www.test-cors.org/#?client_method=GET&client_credentials=false&server_url=http%3A%2F%2Flocalhost%3A3000%2Fcors%3Ftarget%3Dhttps%3A%2F%2Fwww.metaweather.com%2Fapi%2Flocation%2F615702&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote)


Utiliser la méthode POST (ne permet pas de voir le preflight :

[http://www.test-cors.org/#?client_method=POST&client_credentials=false&client_postdata=target%3Dhttps%3A%2F%2Fwww.metaweather.com%2Fapi%2Flocation%2F615702%0A&server_url=http%3A%2F%2Flocalhost%3A3000%2Fcors&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote](http://www.test-cors.org/#?client_method=POST&client_credentials=false&client_postdata=target%3Dhttps%3A%2F%2Fwww.metaweather.com%2Fapi%2Flocation%2F615702%0A&server_url=http%3A%2F%2Flocalhost%3A3000%2Fcors&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote)

Utiliser la méthode PUT (permet de voir le preflight) :

[http://www.test-cors.org/#?client_method=PUT&client_credentials=false&client_postdata=%7B%22target%22%3A%22https%3A%2F%2Fwww.metaweather.com%2Fapi%2Flocation%2F615702%2F%22%7D%0A&server_url=http%3A%2F%2Flocalhost%3A3000%2Fcors&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote&client_headers=content-type%3A%20application%2Fjson ](http://www.test-cors.org/#?client_method=PUT&client_credentials=false&client_postdata=%7B%22target%22%3A%22https%3A%2F%2Fwww.metaweather.com%2Fapi%2Flocation%2F615702%2F%22%7D%0A&server_url=http%3A%2F%2Flocalhost%3A3000%2Fcall&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote&client_headers=content-type%3A%20application%2Fjson)