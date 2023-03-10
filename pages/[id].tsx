import { Tree } from 'primereact/tree';
import { Image } from 'primereact/image';
import { Fieldset } from 'primereact/fieldset';
import { api } from './services/detalhes_service';
import { Chip } from 'primereact/chip';
import { Episodio, EpTemp } from './models/detalhes_model';
import { GetServerSidePropsContext } from 'next/types';
import Link from 'next/link';
import { Character } from './models/character_model';

const defaultUrlEpisode = 'https://rickandmortyapi.com/api/episode/';

export default function Detalhes(data: Character) {
    const { name, image, status, species, gender, location, origin } = data;

    const link = (episodios: Array<Episodio>) => {
        const epPorTemporada = epBySeason(episodios);
        const tree = epPorTemporada.map(({ temporada, episodios }: EpTemp) => {
            const children = episodios.map((episode: Episodio) => {
                return {
                    key: `${temporada}-${episode.id}`,
                    label: `Ep. ${episode.episode.substring(4)} - ${
                        episode.name
                    }`,
                    icon: 'pi pi-fw pi-play',
                    children: [
                        {
                            url: `${defaultUrlEpisode}${episode.id}`,
                            label: `${defaultUrlEpisode}${episode.id}`,
                            icon: 'pi pi-fw pi-external-link',
                        },
                        {
                            label: `Air Date: ${episode.air_date}`,
                            icon: 'pi pi-fw pi-star-fill',
                        },
                    ],
                };
            });

            return {
                key: temporada,
                label: `Season ${temporada}`,
                icon: 'pi pi-fw pi-desktop',
                children: children,
            };
        });
        return tree;
    };

    const epBySeason = (episodios: Episodio[]): EpTemp[] => {
        const temporadas = new Set(
            episodios.map((episode: Episodio) =>
                episode.episode.substring(2, 3)
            )
        );
        // Array de objetos para guardar a temporada e seus episodios
        const epPorTemp: EpTemp[] = [];
        /* Para cada elemento do set Temporadas, acontece a busca e armazenamento 
        dos episodios das temporadas */
        temporadas.forEach((temp: string) => {
            const epFilter = episodios.filter(
                /* Compara????o do conte??do de substring do epis??dio com a temporada corrente
                para identificar os episodios que pertencem a esta*/
                (episode) => episode.episode.substring(2, 3) == temp
            );
            // Armazena no array os objetos com a temporada e o array resultante de epFilter
            epPorTemp.push({ temporada: temp, episodios: epFilter });
        });
        return epPorTemp;
    };

    const nodeTemplate = (node: any) => {
        let label = <b>{node.label}</b>;

        if (node.url) {
            label = (
                <Link href={node.url} target="_blank">
                    {node.label}
                </Link>
            );
        }

        return label;
    };

    return (
        <Fieldset>
            <div className="p-grid p-justify-center p-mt-6">
                <div className="p-mr-4">
                    <Image
                        className="p-mb-3 character-img"
                        src={image as string}
                        alt="Image"
                        preview
                    />
                    <div className="text">
                        <span>{name}</span>
                    </div>
                </div>
                <div className="p-lg-5">
                    <div className="p-grid">
                        <div className="p-col-4">
                            <Fieldset legend="Status">
                                <Chip
                                    className="custom-chip"
                                    label={status}
                                    icon={
                                        status == 'Alive'
                                            ? 'pi pi-heart-fill'
                                            : status == 'Dead'
                                            ? 'pi pi-heart'
                                            : 'pi pi-ban'
                                    }
                                />
                            </Fieldset>
                        </div>
                        <div className="p-col-4">
                            <Fieldset legend="Species">
                                <Chip
                                    className="custom-chip"
                                    label={species}
                                    icon={
                                        species == 'Human'
                                            ? 'pi pi-flag-fill'
                                            : 'pi pi-flag'
                                    }
                                />
                            </Fieldset>
                        </div>
                        <div className="p-col-4">
                            <Fieldset legend="Gender">
                                <Chip
                                    className="custom-chip"
                                    label={gender}
                                    icon="pi pi-user"
                                />
                            </Fieldset>
                        </div>
                        <div className="p-col-6">
                            <Fieldset legend="Origin">
                                <Chip
                                    className="custom-chip"
                                    label={origin?.name}
                                    icon="pi pi-globe"
                                />
                            </Fieldset>
                        </div>
                        <div className="p-col-6">
                            <Fieldset legend="Location">
                                <Chip
                                    className="custom-chip"
                                    label={location?.name}
                                    icon="pi pi-map-marker"
                                />
                            </Fieldset>
                        </div>
                        <div className="p-col-12">
                            <div className="p-mb-4 scrollpanel-demo">
                                <Fieldset legend="Episodes" toggleable>
                                    <Tree
                                        className="children"
                                        value={link(data.episode)}
                                        nodeTemplate={nodeTemplate}
                                        filter
                                        filterMode="lenient"
                                    />
                                </Fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fieldset>
    );
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
    const { id } = query;
    const res = await api.get(`/character/${id}`);
    const req = res.data.episode.map((episode: string) => {
        const idEpisode = episode.substring(40);
        return api.get(`/episode/${idEpisode}`);
    });
    const resEpisodios = await Promise.all(req);
    const episodios = resEpisodios.map((ep) => ({
        id: ep.data.id,
        name: ep.data.name,
        episode: ep.data.episode,
        air_date: ep.data.air_date,
    }));
    const data = { ...res.data, episode: episodios } as Character;
    return {
        props: data,
    };
}
