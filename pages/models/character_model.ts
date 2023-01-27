import { StaticImageData } from 'next/image';
import { Episodio } from './detalhes_model';

export interface Character {
    name: string;
    image: string | StaticImageData;
    description?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
    origin?: { name: string; url: string };
    location?: { name: string; url: string };
    emptyValue?: string;
    episode: Episodio[]
}
