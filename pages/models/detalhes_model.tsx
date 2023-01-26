export interface Detalhe {
    id: number;
    name: string;
    status:string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    }
    location: {
        name: string;
        url: string;
    }
    image: string;
    episode: string;
}

export interface Episodio{
    id: number;
    name: string;
    episode: string;
    air_date: string;
}

export interface EpTemp {
    temporada: string;
    episodios: Episodio[];
}