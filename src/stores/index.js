import { get } from 'svelte/store';
import { createUser } from './userStores'
import { createMenu } from './menuStore'
import { createUrl } from './urlStore'
import { createEmpresa } from './empStores'

export const userStore = createUser();
export const menuStore = createMenu();
export const urlStore = createUrl();
export const empresaStore = createEmpresa();

let init = async () => {
    
    let url = get(urlStore)
    // console.log(url);
    let userL = get(userStore)
    
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
    
            console.log("🚀 ~ file: empStores.js ~ line 4 ~ createEmpresa ~ usuario", userL)
            let empresa = await fetch(`http://localhost:1000/perfil/${userL.user.rif}`)
            empresa = await empresa.json();
            if (empresa.status) {
                console.log("🚀 ~ file: empStores.js ~ line 5 ~ createEmpresa ~ empresa", empresa)
    
            }
        }
    } else {
        if (url != "") location.href = '/'
    }
}

init()