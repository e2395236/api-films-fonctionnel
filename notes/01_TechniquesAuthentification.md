# Techniques d'authentification avec Node.js

Table des matières

-   [Concepts](#concepts)
-   [Authentification par mot de passe](#authentification-par-mot-de-passe)
    -   [Sécuriser les mots de passe](#sécuriser-les-mots-de-passe)
    -   [Bcrypt](#bcrypt)
-   [L'authentification par jeton (token) - JWT](#lauthentification-par-jeton-token---jwt)
    -   [JWT](#jwt)
    -   [Envoyer un jeton avec une requête HTTP](#envoyer-un-jeton-avec-une-requête-http)
        -   [Étape 1 - Connexion](#étape-1---connexion)
        -   [Étape 2 - Envoi d'une requête HTTP](#étape-2---envoi-dune-requête-http)
        -   [Étape 3 - Vérification du jeton](#étape-3---vérification-du-jeton)
-   [L'authentification avec un service tiers (OAuth, SAML, OpenID Connect, etc.)](#lauthentification-avec-un-service-tiers-oauth-saml-openid-connect-etc)
-   [L'authentification par empreinte biométrique](#lauthentification-par-empreinte-biométrique)

## Concepts

L'authentification est le processus qui permet de vérifier l'identité d'un utilisateur. Il existe plusieurs méthodes d'authentification, les plus courantes sont :

-   L'authentification par mot de passe
-   L'authentification par jeton (token) - JWT
-   L'authentification avec un service tiers (OAuth, SAML, OpenID Connect, etc.)
-   L'authentification par empreinte biométrique

Le choix de la méthode d'authentification dépend du contexte de l'application, du niveau de sécurité requis et de la facilité d'utilisation.

## Authentification par mot de passe

L'authentification par mot de passe est la méthode la plus courante. Elle consiste à demander à l'utilisateur de saisir un nom d'utilisateur et un mot de passe. Le serveur vérifie ensuite que le mot de passe correspond au nom d'utilisateur et autorise ou non l'accès à l'application. Cette méthode est simple à mettre en place, mais elle présente plusieurs failles de sécurité.

Par exemple, si un attaquant parvient à intercepter le mot de passe, il peut se connecter à l'application et accéder aux données de l'utilisateur. De plus, si l'utilisateur utilise le même mot de passe pour plusieurs applications, l'attaquant peut accéder à toutes ces applications.

### Sécuriser les mots de passe

Pour sécuriser les mots de passe, il faut les stocker sous forme de hachage. Un hachage est une fonction qui prend une chaîne de caractères en entrée et qui renvoie une chaîne de caractères de longueur fixe. Il existe plusieurs fonctions de hashage, les plus courantes sont SHA-1, SHA-256 et SHA-512.

Par exemple, si on applique la fonction de hashage SHA-256 à la chaîne de caractères `password`, on obtient la chaîne de caractères `5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8`.

L'avantage d'un hachage est qu'il est impossible de retrouver la chaîne de caractères d'origine à partir du hachage. Cependant, si on applique la fonction de hashage SHA-256 à la chaîne de caractères `password`, on obtient toujours la chaîne de caractères `5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8`. Cela signifie que si un attaquant intercepte le hachage, il peut facilement trouver la chaîne de caractères d'origine en appliquant la fonction de hashage à toutes les chaînes de caractères possibles à partir d'un dictionnaire de mots de passe.

Pour éviter ce problème, il faut ajouter un sel (salt) au mot de passe avant de l'appliquer à la fonction de hashage. Un sel est une chaîne de caractères aléatoire qui est ajoutée au mot de passe avant de l'appliquer à la fonction de hashage. Par exemple, si on ajoute le sel `salt` à la chaîne de caractères `password`, on obtient la chaîne de caractères `saltpassword`. Si on applique la fonction de hashage SHA-256 à la chaîne de caractères `saltpassword`, on obtient la chaîne de caractères `b7a875fc1ea228b9061041b7cec4bd3c52ab3ce3a46e5e6b1cbac6ce836b879c`. Le sel ne peut pas être intercepté par un attaquant, car il est stocké sur le serveur.

### Bcrypt

Bcrypt est une bibliothèque qui permet de sécuriser les mots de passe. Elle permet de générer un sel aléatoire et d'appliquer la fonction de hashage SHA-256 au mot de passe et au sel. Elle permet également de définir le nombre d'itérations de la fonction de hashage. Plus le nombre d'itérations est élevé, plus le temps de calcul est long et plus le mot de passe est sécurisé. Nous l'utiliserons dans le projet lors de l'inscription d'un utilisateur.

## L'authentification par jeton (token) - JWT

L'authentification par jeton (token) est une méthode d'authentification qui permet de sécuriser les échanges entre le client et le serveur. Elle consiste à générer un jeton (token) qui est envoyé au client lors de la connexion. Le client envoie ensuite ce jeton au serveur lors de chaque requête. Le serveur vérifie ensuite que le jeton est valide et autorise ou non l'accès à l'application. Le jeton est généralement stocké dans le stockage local (localStorage) du navigateur. Cette méthode est plus sécurisée que l'authentification par mot de passe, car le jeton n'est pas stocké sur le serveur. De plus, le jeton est signé avec une clé secrète, ce qui permet de vérifier son authenticité. Cette clé secrète est stockée sur le serveur donc non accessible par un attaquant.

### JWT

JWT (JSON Web Token) est une bibliothèque qui permet de générer et de vérifier des jetons (tokens). Elle permet de définir la clé secrète utilisée pour signer les jetons. Elle permet également de définir la durée de validité des jetons. Nous l'utiliserons dans le projet pour sécuriser certaines routes de l'API.

### Envoyer un jeton avec une requête HTTP

#### Étape 1 - Connexion

Lors de la connexion, le serveur génère un jeton et l'envoie au client. Le client stocke ensuite le jeton dans le stockage local (localStorage) du navigateur. Ex:

```javascript
const token = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        email: "test@test.com",
        password: "password",
    }),
}).then((res) => res.json());

localStorage.setItem("token", token);
```

#### Étape 2 - Envoi d'une requête HTTP

Lors de chaque requête HTTP, le client envoie le jeton au serveur dans le header `Authorization` de la requête. Ex:

```javascript
const token = localStorage.getItem("token");
const requete = await fetch("http://localhost:3000/api/users", {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});
```

#### Étape 3 - Vérification du jeton

Lorsque le serveur reçoit une requête, il vérifie que le jeton est valide. Pour cela, il vérifie que le jeton est signé avec la clé secrète et qu'il n'est pas expiré. Si le jeton est valide, le serveur autorise l'accès à la ressource. Sinon, il renvoie une erreur 401 (Unauthorized). Avec express, nous allons utiliser un middleware pour vérifier le jeton.

Le middleware est une fonction qui est exécutée avant la fonction de rappel (callback) de la route. Si le jeton est valide, le middleware contient une fonction next() qui permet d'exécuter la fonction de rappel de la route. Sinon, le middleware renvoie une erreur et bloque l'accès à la ressource.

Ex:

```javascript
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
            const token = req.headers.authorization.split(" ")[1]; // Récupère le jeton dans le header Authorization sans le mot clé Bearer
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // Vérifie le jeton avec la clé secrète. La clé secrète est stockée dans une variable d'environnement

            const docRef = await db.collection("utilisateurs").doc(decodedToken.id).get(); // Vérifie que l'utilisateur existe dans la base de données

            if (!docRef.exists) {
                throw "Non autorisé";
            } else {
                req.user = docRef.data(); // Ajoute les données de l'utilisateur à la requête
                next(); // Exécute la fonction de rappel de la route. La requête initiale est envoyée à la route
            }
        } else {
            throw "Non autorisé";
        }
    } catch (error) {
        res.statusCode = 401;
        res.json({ message: "Non autorisé" });
    }
};
```

## L'authentification avec un service tiers (OAuth, SAML, OpenID Connect, etc.)

L'authentification avec un service tiers est une méthode d'authentification qui permet de déléguer l'authentification à un service tiers. Elle consiste à rediriger l'utilisateur vers le service tiers pour qu'il s'authentifie. Le service tiers renvoie ensuite un jeton (token) au client. Le client envoie ensuite ce jeton au serveur lors de chaque requête. Le serveur vérifie ensuite que le jeton est valide et autorise ou non l'accès à l'application. Cette méthode est plus sécurisée que l'authentification par mot de passe, car le jeton n'est pas stocké sur le serveur. De plus, le jeton est signé avec une clé secrète, ce qui permet de vérifier son authenticité. Cette clé secrète est stockée sur le serveur donc non accessible par un attaquant.

Le principal avantage de cette méthode est qu'elle permet de déléguer l'authentification à un service tiers. Cela permet de ne pas avoir à gérer les mots de passe des utilisateurs. Par exemple, se connecter avec son compte Google ou Facebook.

https://auth0.com/docs/authenticate/protocols/oauth

https://www.youtube.com/watch?v=Y2ec4KQ7mP8

## L'authentification par empreinte biométrique

L'authentification par empreinte biométrique est une méthode d'authentification qui permet de vérifier l'identité d'un utilisateur à l'aide de son empreinte digitale. Elle consiste à demander à l'utilisateur de placer son doigt sur un capteur d'empreinte digitale. Le capteur d'empreinte digitale envoie ensuite l'empreinte digitale au serveur. Le serveur vérifie ensuite que l'empreinte digitale correspond à l'utilisateur et autorise ou non l'accès à l'application.

Cette méthode est plus sécurisée que l'authentification par mot de passe, car l'empreinte digitale n'est pas stockée sur le serveur. De plus, l'empreinte digitale est unique à chaque utilisateur, ce qui permet de vérifier son authenticité.

Cependant, cette méthode présente plusieurs inconvénients. Tout d'abord, elle nécessite un capteur d'empreinte digitale. De plus, elle nécessite que l'utilisateur soit présent physiquement pour s'authentifier. Enfin, elle nécessite que l'utilisateur accepte de partager son empreinte digitale avec le serveur. Elle est donc plus complexe à mettre en place que l'authentification par mot de passe.

Habituellement, cette méthode est utilisée pour s'authentifier sur un appareil (ordinateur, téléphone, etc.). Elle est rarement utilisée pour s'authentifier sur une application web. Cependant, elle peut être utilisée pour s'authentifier sur une application web si l'utilisateur possède un capteur d'empreinte digitale.

https://medium.com/@withframe/how-to-add-face-id-authentication-to-your-react-native-app-6de31497ef2a
