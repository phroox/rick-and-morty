import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useId } from 'react';
import styles from './CharacterCard.module.css';

interface CharacterCardProps {
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
}

export default function CharacterCard({
    name,
    image,
    status,
    species,
    type,
    gender,
    origin,
    location,
    emptyValue = '#####',
}: CharacterCardProps) {
    const description = 'Opsie doopsie';

    const fallback = (
        content: React.ReactNode | string | undefined,
        fallback: string = emptyValue
    ): string | React.ReactNode => {
        return content || fallback;
    };

    const id = useId();

    return (
        <>
            <input type="checkbox" id={id} className={styles.switch} />
            <label className={styles.cardContainer} htmlFor={id}>
                <div className={styles.card}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardHeader}>
                            <Image
                                className={styles.cardImage}
                                alt={name}
                                src={image}
                                priority
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className={styles.cardBody}>
                            <h4 className={styles.charName}>{name}</h4>
                            <ul className={styles.statsList}>
                                <li className={styles.stat}>
                                    Status:{' '}
                                    <span className={styles.text}>
                                        {fallback(status)}
                                    </span>
                                </li>
                                <li className={styles.stat}>
                                    Gênero:{' '}
                                    <span className={styles.text}>
                                        {fallback(gender)}
                                    </span>
                                </li>
                                <li className={styles.stat}>
                                    Espécie:{' '}
                                    <span className={styles.text}>
                                        {fallback(species)}
                                    </span>
                                </li>
                                <li className={styles.stat}>
                                    Tipo:{' '}
                                    <span className={styles.text}>
                                        {fallback(type)}
                                    </span>
                                </li>
                                <li className={styles.stat}>
                                    Origem:{' '}
                                    <span className={styles.text}>
                                        {fallback(
                                            origin && (
                                                <Link href={origin.url}>
                                                    {origin.name}
                                                </Link>
                                            )
                                        )}
                                    </span>
                                </li>
                                <li className={styles.stat}>
                                    Última localização:{' '}
                                    <span className={`${styles.text}`}>
                                        {fallback(
                                            location && (
                                                <Link href={location.url}>
                                                    {location.name}
                                                </Link>
                                            )
                                        )}
                                    </span>
                                </li>
                            </ul>
                            <button className={styles.detailsButton}>
                                Detalhes
                                <svg
                                    className={`${styles.buttonIcon} ${styles.bounce}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </label>
        </>
    );
}
