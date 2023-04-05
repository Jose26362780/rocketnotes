import { BrowserRouter } from "react-router-dom";


import { useAuth } from '../hooks/auth';
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes(){

    const{ user } = useAuth();
    return (// se tem algum usuario logado usar o appRoutes se nao usar o AuthRothes
        <BrowserRouter>
           { user ? <AppRoutes/> : <AuthRoutes />} 
           
        </BrowserRouter>
    )
}