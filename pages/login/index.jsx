import { useContext } from 'react';
import { ThemeContext } from '../../contexts/contexts';
export default function Login() {
    const theme = useContext(ThemeContext);
    console.log(theme);
    return (
        <>
            <h1>Olá, mundo!</h1>
        </>
    );
}
