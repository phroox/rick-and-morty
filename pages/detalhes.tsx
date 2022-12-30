import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { Panel } from 'primereact/Panel';
import { Fieldset } from 'primereact/fieldset';
import 'primeflex/primeflex.css';
import { useState } from 'react';

import { Galleria } from 'primereact/galleria';

import { Chip } from 'primereact/chip';

function Detalhes() {
    const [usuarios, setUsuarios] = useState([]);
    const USUARIOS = [
        {
            id: 1,
            nome: 'teste1',
        },
        {
            id: 2,
            nome: 'teste2',
        },
        {
            id: 3,
            nome: 'teste3',
        },
        {
            id: 4,
            nome: 'teste4',
        },
        {
            id: 5,
            nome: 'teste5',
        },
    ];
    return (
        <>
            <Fieldset>
                <div className="p-grid p-justify-center p-mt-6">
                    <div className="p-grid p-align-center p-mr-6">
                        <Image
                            src="https://rickandmortyapi.com/api/character/avatar/737.jpeg"
                            alt="Image"
                            width="400"
                            height="400"
                            preview
                        />
                    </div>
                    <div className="p-lg-6">
                        <div
                            className="p-mb-4 p-text-bold p-text-uppercase p-text-italic"
                            style={{ fontSize: '30px', width: '20rem' }}
                        >
                            Cirque du Soleil Zumanity
                        </div>
                        <div className="p-grid">
                            <div className="p-col-5">
                                <Panel header="Status">
                                    <Chip
                                        label="Alive"
                                        icon="pi pi-heart-fill"
                                    />
                                </Panel>
                            </div>
                            <div className="p-col-5">
                                <Panel header="Species">
                                    <Chip label="Human" icon="pi pi-flag" />
                                </Panel>
                            </div>
                            <div className="p-col-5">
                                <Panel header="Gender">
                                    <Chip
                                        label="Female"
                                        icon="pi pi-tag product-category-icon"
                                    />
                                </Panel>
                            </div>
                            <div className="p-col-5">
                                <div className="p-mb-4">
                                    <Panel header="Episode" toggleable>
                                        <li>Rickdependence Spray - S05E04</li>
                                        <li>Rickdependence Spray - S05E04</li>
                                        <li>Rickdependence Spray - S05E04</li>
                                        <li>Rickdependence Spray - S05E04</li>
                                    </Panel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fieldset>
        </>
    );
}
export default Detalhes;
