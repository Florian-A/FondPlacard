<h1 align="center">Fond de Placard</h1>
<p align="center"><i>(Exercice de developpement)</i></p>

*Pas de chance pour vous, le monde s'est écroulé ! Il n'y a plus rien à manger et pour survivre un jour de plus dans cet enfer vous devez manger.*

*Mais quel plat peut-on se concocter avec une boite d'ananas, de la farine, du chocolat ainsi qu'un rat cloîtré au fond du placard ?*

# Routes disponibles :

### Exposition de l'entitée recette (*Recipe*) :
_________________
| /recipes | GET |
|--|--|

Récupération de toutes les recettes (et récupération des ID des ingrédients).

##### Retour JSON :
```json 
[
    {
        "id": 1,
        "name": "Gâteau à l'ananas",
        "category": "Gateaux",
        "score" : 0,
        "picture": "https://image.centre-de-l-univers/recipe/1.jpg",
        "score": 10,
        "ingredientsId": [
            1,
            2,
            3
        ]
    },
    {
        "id": 2,
        "name": "Gâteau farfelu",
        "category": "Gateaux",
        "score" : 0,
        "picture": "https://image.centre-de-l-univers/recipe/2.jpg",
        "score": 3,
        "ingredientsId": [
            2,
            4
        ]
    },
    {
        "id": 3,
        "name": "Rat frit",
        "category": "Petite faim",
        "score" : 0,
        "picture": "https://image.centre-de-l-univers/recipe/3.jpg",
        "score": 5,
        "ingredientsId": [
            5,
            6,
            7,
            8,
            9
        ]
    }
]
``` 
_________________

| /recipes/{id} | GET |
|--|--|
Récupération d'une recette suivant son ID (et récupération des ID des ingrédients).

##### Retour JSON :
```json 
[
    {
        "id": 1,
        "name": "Gâteau à l'ananas",
        "category": "Gateaux",
        "score" : 0,
        "picture": "https://image.centre-de-l-univers/recipe/1.jpg",
        "score": 0,
        "ingredientsId": [
            1,
            2,
            3
        ]
    }
]
``` 
_________________

| /recipes | POST |
|--|--|
Création d'une nouvelle recette (avec ajout des ID des ingrédients).

##### Corps (body) JSON :
```json 
{
	"name": "Pigeon au four",
    "category": "Economique",
	"picture": "https://image.centre-de-l-univers/recipe/4.jpg",
	"ingredientsId": [
        7,
        9,
        10,
        11
    ]
}
``` 
##### Retour JSON :
```json 
{
    "id": 4,
	"name": "Pigeon au four",
    "category": "Economique",
    "score" : 0,
	"picture": "https://image.centre-de-l-univers/recipe/4.jpg",
	"ingredientsId": [
        7,
        9,
        10,
        11
    ]
}
``` 
_________________

| /recipes/{id} | PATCH |
|--|--|
Édition d'une recette (avec ajout / suppression d'ID d'ingrédients).

##### Corps (body) JSON :
```json 
{
	"name": "Pigeon au four",
	"category": "Très économique",
	"picture": "https://image.centre-de-l-univers/recipe/4.jpg",
	"ingredientsId": [
        9,
        10,
        11,
        12
    ]
}
``` 
##### Retour JSON :
```json 
{
    "id": 4,
	"name": "Pigeon au four",
    "category": "Très économique",
    "score" : 0,
	"picture": "https://image.centre-de-l-univers/recipe/4.jpg",
	"ingredientsId": [
        9,
        10,
        11,
        12
    ]
}
``` 
_________________

| /recipes/{id} | DELETE |
|--|--|
Suppression d'une recette (sans suppression des ingrédients).

##### Pas de corps (body) à envoyer, pas de réponse autre que le code HTTP 204.

_________________

| /recipes/vote-up/{id} | GET |
|--|--|
Vote en faveur d'une recette.

##### Retour JSON :
```json 
{
    "id": 4,
	"name": "Pigeon au four",
    "category": "Très économique",
    "score" : 1,
	"picture": "https://image.centre-de-l-univers/recipe/4.jpg",
	"ingredientsId": [
        9,
        10,
        11,
        12
    ]
}
``` 

<br>
_________________

| /recipes/vote-down/{id} | GET |
|--|--|
Vote en défaveur d'une recette.

##### Retour JSON :
```json 
{
    "id": 4,
	"name": "Pigeon au four",
    "category": "Très économique",
    "score" : -1,
	"picture": "https://image.centre-de-l-univers/recipe/4.jpg",
	"ingredientsId": [
        9,
        10,
        11,
        12
    ]
}
``` 

<br>
_________________

| /recipes/search | POST |
|--|--|
Recherche d'une recette via : le nom approximatif de la recette, l'ID d'un ingrédient ou le nom approximatif d'un ingrédient.

##### Corps (body) JSON :
```json 
{
	"name": "Pigeon",
}
``` 

Ou

##### Corps (body) JSON :
```json 
{
	"ingredientId": 9,
}
```

Ou

##### Corps (body) JSON :
```json 
{
	"ingredientName": "Ville",
}
```

##### Retour JSON :
```json
[ 
    {
        "id": 4,
        "name": "Pigeon au four",
        "category": "Très économique",
        "picture": "https://image.centre-de-l-univers/recipe/4.jpg",
        "ingredientsId": [
            9,
            10,
            11,
            12
        ]
    },
    {
        "id": 5,
        "name": "Chat au four",
        "category": "Temps de guerre",
        "picture": "https://image.centre-de-l-univers/recipe/5.jpg",
        "ingredientsId": [
            13,
        ]
    },
]
``` 

<br>
<br>

## Exposition de l'entitée ingrédient (*Ingredient*) :

_________________

| /ingredients | GET |
|--|--|

Récupération de tous les ingredients.

##### Retour JSON :
```json 
[
  {
    "id": 1,
    "name": "Farine"
  },
  {
    "id": 2,
    "name": "Beurre"
  },
  {
    "id": 3,
    "name": "Chocolat"
  },
  {
    "id": 4,
    "name": "Ananas"
  },
  {
    "id": 5,
    "name": "Rat"
  },
  {
    "id": 6,
    "name": "Sel"
  }
]
``` 
_________________

| /ingredients/{id} | GET |
|--|--|
Récupération d'un ingredient suivant son ID.

##### Retour JSON :
```json 
{
    "id": 1,
    "name": "Farine"
}
``` 
_________________

| /ingredients | POST |
|--|--|
Création d'un nouvelle ingredient.

##### Corps (body) JSON :
```json 
{
    "name": "Pigeon"
}
``` 
##### Retour JSON :
```json 
{
    "id" : 7,
    "name": "Pigeon"
}
``` 
_________________

| /ingredients | PATCH |
|--|--|
Édition d'un ingredient suivant son ID.

##### Corps (body) JSON :
```json 
{
    "name": "Pigeon de ville"
}
``` 
##### Retour JSON :
```json 
{
    "id" : 7,
    "name": "Pigeon de ville"
}
``` 
_________________

| /ingredients/{id} | DELETE |
|--|--|
Suppression d'un ingredient suivant son ID.

##### Pas de corps (body) à envoyer, pas de réponse autre que le code HTTP 204.
_________________

# Fonctionnement :

Pour lancer le programme deux possibilités :

#### Avec Docker 😀 :

Programmes pré-requis :

 - Docker >=19
 - docker-compose >= 1.21.0
 - GNU bash >= 3.2

Executez le fichier `database-and-dataset.sql` dans l'image docker nommé `db`.

Placez vous à la racine du project et exécutez le fichier `start.bash`, pour arrêter exécutez `stop.bash` .


#### Sans Docker 😞 :

Programmes pré-requis :

- Node >=10.17.0 (avec rewrite activé)
- PostgreSQL >= 12

Executez le fichier `database-and-dataset.sql` dans votre base de données PostgreSQL.

Puis changez les informations de connexion à la base de données locale dans le fichier : `/src/models/DatabaseConnection.ts`

Enfin lancez la commande suivante : `npm install; npm run dev`