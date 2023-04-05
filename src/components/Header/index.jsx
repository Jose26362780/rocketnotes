import {  RiShutDownLine } from 'react-icons/ri';

import{ useAuth } from '../../hooks/auth';

import { Container, Profile,  Logout} from './styles';




export function Header(){
    const { signOut } = useAuth();

    return(

        <Container>

            <Profile to="/profile">
                <img 
                src="https://github.com/Jose26362780.png"
                alt='Foto do jose' />

                <div>
                   <span> Bem-vindo</span> 
                   <strong>José Martinez</strong>
                </div>
            </Profile>

            <Logout onClick = {signOut}>

                <RiShutDownLine />
            </Logout>


        </Container>
    )
}