import {Container} from './styles';

import { Button } from '../../components/Button';

    
    
    export function Details(){

        return (
        <Container>
            <h1>Hello world!</h1>
            <span>Jose martinez </span>
 
            <Button  title="Entrar" loading/>
            <Button  title="Cadastrar" />
            <Button  title="Voltar" />
      

        </Container>
        )   
    }