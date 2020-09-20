-- Création de la structure de la base de données.
create table recipe
(
    id       serial            not null
        constraint recipe_pk
            primary key,
    name     varchar           not null,
    category varchar           not null,
    picture  varchar,
    score    integer default 0 not null
);

create table ingredient
(
    id   serial  not null
        constraint ingredient_pk
            primary key,
    name varchar not null
);

create table jt_ingredient_recipe
(
    id            serial  not null
        constraint jt_ingredient_recipe_pk
            primary key,
    id_ingredient integer not null
        constraint ingredient_id_fk
            references ingredient
            on delete cascade,
    id_recipe     integer not null
        constraint recipe_id_fk
            references recipe
            on delete cascade
);

