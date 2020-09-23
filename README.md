# API Fond de Placard

WIP

# Routes disponibles :

## Exposition de l'entitée recette (*Recipe*) :
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