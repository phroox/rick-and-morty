// React & Next
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactNode, useContext, useEffect, useState } from 'react';
// Primereact
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import {
    ToggleButton,
    ToggleButtonChangeParams,
} from 'primereact/togglebutton';
// Images
import LightLogo from '../public/rick-morty.png';
import DarkLogo from '../public/rick-morty-white.png';
// Contexts
import { ThemeContext } from '../contexts/contexts';

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

interface LayoutProps {
    children: ReactNode;
    setTheme: (value: string) => void;
}

export default function Layout({ children, setTheme }: LayoutProps) {
    const router = useRouter();
    const theme = useContext(ThemeContext);
    const [logo, setLogo] = useState(DarkLogo);
    const [toggleTheme, setToggleTheme] = useState<boolean>(false);

    useEffect(() => {
        const storagedTheme = window.localStorage.getItem('theme');
        if (storagedTheme != theme) changeTheme(!toggleTheme);
    }, []);

    const changeTheme = (checked: boolean) => {
        const themeLink = document.getElementById(
            'app-theme'
        ) as HTMLAnchorElement;
        if (themeLink) {
            if (checked) {
                themeLink.href = THEMES.light;
                setLogo(LOGOS.light);
                setTheme('light');
                window.localStorage.setItem('theme', 'light');
            } else {
                themeLink.href = THEMES.dark;
                setLogo(LOGOS.dark);
                setTheme('dark');
                window.localStorage.setItem('theme', 'dark');
            }
        }
        setToggleTheme(checked);
    };

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
                onChange={(e: ToggleButtonChangeParams) => changeTheme(e.value)}
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
