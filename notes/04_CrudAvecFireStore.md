# Opérations CRUD avec Firestore

Table des matières

-   [Récupérer des données (GET)](#récupérer-des-données-get)

    -   [Pour récupérer un seul document](#pour-récupérer-un-seul-document)
    -   [Filtrer les documents d'une collection](#filtrer-les-documents-dune-collection)
    -   [Ordonner les documents d'une collection](#ordonner-les-documents-dune-collection)
    -   [Limiter le nombre de documents retournés](#limiter-le-nombre-de-documents-retournés)

-   [Ajouter un document à une collection (POST)](#ajouter-un-document-à-une-collection-post)

    -   [Les types de données dans Firestore](#les-types-de-données-dans-firestore)
    -   [Lier un document à un autre document](#lier-un-document-à-un-autre-document)

-   [Modifier un document d'une collection (PUT)](#modifier-un-document-dune-collection-put)

-   [Supprimer un document d'une collection (DELETE)](#supprimer-un-document-dune-collection-delete)
    -   [Supprimer tous les documents d'une collection (DELETE)](#supprimer-tous-les-documents-dune-collection-delete)

## Récupérer des données (GET)

Pour récupérer des données d'une base de données Firestore, il faut utiliser la méthode `get()` de l'objet `db` qui est retourné par la méthode `firebase.firestore()`.

La méthode `get()` retourne une **promesse** qui contient un objet `QuerySnapshot`. Cet objet contient un tableau `docs` qui contient les documents de la collection.

Pour créer un tableau avec les documents, il faut utiliser la méthode `forEach()` de l'objet `QuerySnapshot` et appeler la méthode `data()` de l'objet `DocumentSnapshot` qui est passé en paramètre de la méthode `forEach()`.

Ex:

```js
router.get("/", async (req, res) => {
    const docs = await db.collection("users").get();
    const users = [];

    docs.forEach((doc) => {
        const user = doc.data();
        users.push(user);
    });

    res.json(users);
});
```

Documentation Firestore: https://cloud.google.com/firestore/docs/query-data/queries?hl=fr#node.js

### Pour récupérer un seul document

Pour récupérer un seul document d'une base de données Firestore, il faut utiliser la méthode `doc()` de l'objet `db` qui est retourné par la méthode `firebase.firestore()`.

La méthode `doc()` prend en paramètre l'id du document à récupérer. Elle retourne un objet `DocumentSnapshot` qui contient le document.

Il est possible de récupérer les données du document avec la méthode `data()` de l'objet `DocumentSnapshot`.

Ex:

```js
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const doc = await db.collection("users").doc(id).get();
        const user = doc.data();
        res.json(user);
    } catch (err) {
        res.status(500).send(err);
    }
});
```

### Filtrer les documents d'une collection

Pour filtrer les documents d'une collection, il faut utiliser la méthode `where()` de l'objet `db` qui est retourné par la méthode `firebase.firestore()`.

La méthode `where()` prend en paramètre le nom de la propriété à filtrer, l'opérateur de comparaison et la valeur à comparer. Elle retourne un objet `QuerySnapshot` qui contient les documents qui respectent le filtre.

Vous pouvez utiliser les opérateurs de comparaison suivants:

-   `==` égal à
-   `>` plus grand que
-   `>=` plus grand ou égal à
-   `<` plus petit que
-   `<=` plus petit ou égal à
-   `!=` différent de

Ex:

```js
router.get("users/age/:age", async (req, res) => {
    try {
        const age = parseInt(req.params.age);
        const docs = await db.collection("users").where("age", "==", age).get();
        const users = [];
        docs.forEach((doc) => {
            const user = doc.data();
            users.push(user);
        });
        res.json(users);
    } catch (err) {
        res.status(500).send(err);
    }
});
```

### Ordonner les documents d'une collection

Pour ordonner les documents d'une collection, il faut utiliser la méthode `orderBy()` de l'objet `db` qui est retourné par la méthode `firebase.firestore()`.

La méthode `orderBy()` prend en paramètre le nom de la propriété à ordonner et le sens de l'ordre (ascendant ou descendant). Elle retourne un objet `QuerySnapshot` qui contient les documents ordonnés.

Par défaut, l'ordre est toujours ascendant. Pour ordonner par ordre descendant, il faut ajouter le caractère `!` devant le nom de la propriété ou donner un deuxième paramètre à la méthode `orderBy()` avec la valeur `desc`.

Ex:

```js
router.get("/users?orderName=desc", async (req, res) => {
    try {
        const ordre = req.query.orderName || "asc"; //Si le paramètre orderName n'est pas présent, on ordonne par ordre ascendant
        const docs = await db.collection("users").orderBy("name", ordre).get();
        const users = [];
        docs.forEach((doc) => {
            const user = doc.data();
            users.push(user);
        });
        res.json(users);
    } catch (err) {
        res.statusCode(500).send(err);
    }
});
```

### Limiter le nombre de documents retournés

Pour limiter le nombre de documents retournés, il faut utiliser la méthode `limit()` de l'objet `db` qui est retourné par la méthode `firebase.firestore()`.

La méthode `limit()` prend en paramètre le nombre de documents à retourner. Elle retourne un objet `QuerySnapshot` qui contient les documents limités.

Ex:

```js
router.get("/users?limit=3", async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10; //Si le paramètre limit n'est pas présent, on retourne 10 documents
        const docs = await db.collection("users").limit(limit).get();
        const users = [];
        docs.forEach((doc) => {
            const user = doc.data();
            users.push(user);
        });
        res.json(users);
    } catch (err) {
        res.status(500).send(err);
    }
});
```

## Ajouter un document à une collection (POST)

Pour ajouter un document à une collection, il faut utiliser la méthode `add()` de l'objet `db` qui est retourné par la méthode `firebase.firestore()`. La fonction `add()` permet de générer un id unique pour le document ajouté.

La méthode `add()` prend en paramètre un objet qui contient les propriétés du document à ajouter. Elle retourne une **promesse** qui contient un objet `DocumentReference` qui contient l'id du document ajouté.

Ex:

```js
router.post("/", async (req, res) => {
    try {
        const user = req.body;
        const doc = await db.collection("users").add(user);
        res.json({ message: `Le document avec l'id ${doc.id} a été ajouté` });
    } catch (err) {
        res.status(500).send(err);
    }
});
```

Documentation Firestore: https://cloud.google.com/firestore/docs/manage-data/add-data?hl=fr#add_a_document

### Les types de données dans Firestore

Les types de données supportés par Firestore sont:

-   String
-   Number
-   Boolean
-   Array
-   Object
-   Date
-   Null
-   DocumentReference (voir plus bas)

### Lier un document à un autre document

Dans Firestore, il est possible de lier un document à un autre document. Ex: Un post peut être lié à un utilisateur. C'est l'équivalent d'une relation 1 à 1 en SQL.

Pour lier un document à un autre document, il faut utiliser la méthode `doc()` de l'objet `DocumentReference` qui est retourné par la méthode `add()`.

La méthode `doc()` prend en paramètre l'id du document à lier. Elle retourne un objet `DocumentReference` qui contient le document lié. C'est cet objet qui sera ajouté à la collection parente.

Ex:

```js
router.post("/post", async (req, res) => {
    try {
        const userId = req.body.id;
        const user = await db.collection("users").doc(user).get();

        const post = req.body.post;
        post.user = user;

        const newPost = await db.collection("posts").add(post);
        res.json({ message: `Le document avec l'id ${doc.id} a été ajouté` });
    } catch (err) {
        res.status(500).send(err);
    }
});
```

Documentation Firestore: https://cloud.google.com/firestore/docs/data-model?hl=fr#subcollections

## Modifier un document d'une collection (PUT)

Pour modifier un document d'une collection, il faut utiliser la méthode `update()` de l'objet `db` qui est retourné par la méthode `firebase.firestore()`.

La méthode `update()` prend en paramètre un objet qui contient les propriétés du document à modifier. Elle retourne une **promesse** qui contient un objet `DocumentReference` qui contient l'id du document modifié.

Ex:

```js
router.put("users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = req.body;
        const modification = await db.collection("users").doc(id).update(user);
        res.json({ message: `Le document avec l'id ${id} a été modifié`, document: modification });
    } catch (err) {
        res.status(500).send(err);
    }
});
```

Documentation Firestore: https://cloud.google.com/firestore/docs/manage-data/add-data?hl=fr#update-data

## Supprimer un document d'une collection (DELETE)

Pour supprimer un document d'une collection, il faut utiliser la méthode `delete()` de l'objet `db` qui est retourné par la méthode `firebase.firestore()`.

La méthode `delete()` ne prend pas de paramètre. Elle retourne une **promesse** qui contient un objet `DocumentReference` qui contient l'id du document supprimé.

Ex:

```js
router.delete("users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await db.collection("users").doc(id).delete();
        res.json({ message: `Le document avec l'id ${id} a été supprimé` });
    } catch (err) {
        res.status(500).send(err);
    }
});
```

Documentation Firestore: https://cloud.google.com/firestore/docs/manage-data/delete-data?hl=fr

## Supprimer tous les documents d'une collection (DELETE)

Pour supprimer tous les documents d'une collection, il faut utiliser la méthode `delete()` sur chaque document de la collection.

Il faut donc utiliser la méthode `get()` pour récupérer tous les documents de la collection et ensuite boucler sur le tableau et supprimer chaque document avec la méthode `delete()`.

Ex:

```js
router.delete("/", async (req, res) => {
    try {
        const docs = await db.collection("users").get();
        docs.forEach((doc) => {
            doc.ref.delete();
        });
        res.json({ message: `Tous les documents ont été supprimés` });
    } catch (err) {
        res.status(500).send(err);
    }
});
```
