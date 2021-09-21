import { get } from 'svelte/store';
import { createUser } from './userStores'

export const user = createUser();

let url = window.location.pathname.split("/")[1];

let userL = get(user)

if (userL != null) {
    
    let tiempo_actual = Date.now();
    let distancia = tiempo_actual - userL.session_time;
    if (
        distancia > 1800000 &&
        userL.user.role != "superadmin" &&
        userL.user.role != "vendedor"
    ) {
        // esto lo comento por ahora ya que es un fastidio pero cuando tenga la version web si es necesario que se active
        // alert("esta seccion a expirado")
        // con esto determinamos cuando muere una session por inactividad xD claro para esto deben cerrarlo sin salir
        // this.$store.commit('salir')
    } else {
        let datos_session = {
            login: true,
            session_time: Date.now(),
            user: userL.user,
        };
        sessionStorage.setItem("login_session", JSON.stringify(datos_session));
    }
} else {
    if(url != "") location.href = '/'
}
