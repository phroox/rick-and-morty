// React & Next
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
// Primereact
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import {
    ToggleButton,
    ToggleButtonChangeParams,
} from 'primereact/togglebutton';

import LightLogo from '../public/rick-morty.png';
import DarkLogo from '../public/rick-morty-white.png';

const THEMES = {
    light: 'lara-light-teal.css',
    dark: 'lara-dark-teal.css',
};

const LOGOS = {
    light: LightLogo,
    dark: DarkLogo,
};

const items = [
    {
        label: 'Quem Somos',
    },
];

export default function Layout({ children }: React.PropsWithChildren) {
    const router = useRouter();
    const [logo, setLogo] = useState(LightLogo);
    const [toggleTheme, setToggleTheme] = useState<boolean>(false);

    const start = (
        <Link href="/">
            <Image alt="logo" src={logo} height={50} width={50} />
        </Link>
    );

    const end = (
        <div className="flex gap-4">
            <ToggleButton
                onLabel=""
                offLabel=""
                onIcon="pi pi-sun"
                offIcon="pi pi-moon"
                className="p-button-rounded"
                checked={toggleTheme}
                onChange={(e: ToggleButtonChangeParams) => {
                    const themeLink = document.getElementById(
                        'app-theme'
                    ) as HTMLAnchorElement;
                    if (themeLink) {
                        if (e.value) {
                            themeLink.href = THEMES.light;
                            setLogo(LOGOS.light);
                        } else {
                            themeLink.href = THEMES.dark;
                            setLogo(LOGOS.dark);
                        }
                    }
                    setToggleTheme(e.value);
                }}
            />
            <Button
                className="p-button-sm"
                label="Login"
                icon="pi pi-sign-in"
                iconPos="right"
                onClick={() => router.push('/login')}
            />
        </div>
    );

    return (
        <>
            <Menubar model={items} start={start} end={end} />
            {children}
        </>
    );
}
