import { Usuario } from "./acesso/usuario.model";

import * as firebase from "firebase"; 

export class Autenticacao{
    public cadastrarUsuario(usuario:Usuario):void{
        console.log('Chegamos no serviço', usuario)

        firebase.auth().createUserWithEmailAndPassword(usuario.email,usuario?.senha)
            .then((resposta:any) => {

                delete usuario.senha
                //firebase.database().refFromURL('https://projeto-instagram-clone-26411-default-rtdb.firebaseio.com')
                firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                    .set(usuario)



            }).catch((error:Error) => {
                console.log(error)
            });






    }
}