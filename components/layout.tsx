// React & Next
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
// Primereact
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import {
    ToggleButton,
    ToggleButtonChangeParams,
} from 'primereact/togglebutton';

export default function Layout({ children }: React.PropsWithChildren) {
    const router = useRouter();
    const [logo, setLogo] = useState('/rick-morty.png');
    const [toggleTheme, setToggleTheme] = useState<boolean>(false);

    const THEMES = {
        light: 'lara-light-teal.css',
        dark: 'lara-dark-teal.css',
    };

    const LOGOS = {
        light: '/rick-morty.png',
        dark: '/rick-morty-white.png',
    };

    useEffect(() => {
        const themeLink = document.getElementById(
            'app-theme'
        ) as HTMLAnchorElement;
        if (themeLink) {
            if (toggleTheme) {
                themeLink.href = THEMES.light;
                setLogo(LOGOS.light);
            } else {
                themeLink.href = THEMES.dark;
                setLogo(LOGOS.dark);
            }
        }
    }, [toggleTheme]);

    const items = [
        {
            label: 'Quem Somos',
        },
    ];

    const start = (
        <>
            <Link href="/">
                <Image
                    alt="logo"
                    src={logo}
                    height={50}
                    width={50}
                    priority
                    quality={100}
                />
            </Link>
        </>
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
                onChange={(e: ToggleButtonChangeParams) =>
                    setToggleTheme(e.value)
                }
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
