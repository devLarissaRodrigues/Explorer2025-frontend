import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/devLarissaRodrigues.png" alt="Foto de perfil" />

                <div>
                    <span>Bem-vindo(a)</span>
                    <strong>Larissa Rodrigues</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}