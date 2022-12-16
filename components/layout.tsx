import Image from 'next/image';
import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import {
    ToggleButton,
    ToggleButtonChangeParams,
} from 'primereact/togglebutton';

export default function Layout({ children }: React.PropsWithChildren) {
    const [toggleTheme, setToggleTheme] = useState<boolean>(false);

    useEffect(() => {
        const themeLink = document.getElementById(
            'app-theme'
        ) as HTMLAnchorElement;
        if (themeLink) {
            if (toggleTheme) {
                themeLink.href = 'lara-light-teal.css';
            } else themeLink.href = 'lara-dark-teal.css';
        }
    }, [toggleTheme]);

    const items = [
        {
            label: 'Quem Somos',
        },
    ];

    const start = (
        <>
            {toggleTheme ? (
                <Image
                    alt="logo"
                    src="/rick-morty.png"
                    height={50}
                    width={50}
                    priority
                    quality={100}
                />
            ) : (
                <Image
                    alt="logo"
                    src="/rick-morty-white.png"
                    height={50}
                    width={50}
                    priority
                    quality={100}
                />
            )}
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
