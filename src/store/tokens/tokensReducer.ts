import { Action } from "./actions";

export interface TokenState {  /*model com uma unica propriedade*/
    tokens: string
}

const initialState = {  /*essa constante informa que o estado inicial do atributo token é vazio*/
    tokens: ""
}

export const tokenReducer = (state: TokenState = initialState, action: Action)  => { /*Metodo reducer, recebe uma função, a função precisa receber dois parametros (estado inicial e ação) */
switch(action.type){ /*Esta verificando o type do action (que definimos como ADD_TOKEN) */
    case "ADD_TOKEN": {
        return {tokens: action.payload} /*Se ela for do tipo ADD_TOKEN ele faz a proriedade tokens receber o payload  */
    }
    default: 
    return state /*se não for do tipe ADD_TOKEN ele retorna o status padrão*/
}
}