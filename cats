cats = {
    _id: ObjectID,
    nombre: string,
    descripcion: string,
    email: string,
    nick: string,
    genero: string,
    password: string,
    nacimiento: date,
    image: string
    preferencias: {
        genero: string,
        edad_min: integer,
        edad_max: integer
    }
    interests: [ObjectID]
}

interest_master = {
    _id: ObjectID,
    ineterest: string
}

interactions: {
    _id: ObjectID,
    cat_id: ObjectID,
    cat_likes: [],
    cat_unlikes: [],
    cats_matches: []
}

