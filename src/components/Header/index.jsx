import {  RiShutDownLine } from 'react-icons/ri';

import { Container, Profile,  Logout} from './styles';




export function Header(){

    return(

        <Container>

            <Profile>
                <img 
                src="https://github.com/Jose26362780.png"
                alt='Foto do jose' />

                <div>
                   <span> Bem-vindo</span> 
                   <strong>José Martinez</strong>
                </div>
            </Profile>

            <Logout>

                <RiShutDownLine />
            </Logout>


        </Container>
    )
}