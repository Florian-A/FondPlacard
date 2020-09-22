# API Fond de Placard

WIP

## Routes disponibles :


| GET | /recipes |
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
        "name": "Cygne frit",
        "category": "Grande occasion",
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

| GET | /recipes/{id} |
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

| POST | /recipes |
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

| PATCH | /recipes/{id} |
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

| DELETE | /recipes/{id} |
|--|--|
Suppression d'une recette (sans suppression des ingrédients).

##### Pas de corps (body) à envoyer, pas de réponse autre que le code HTTP 204.