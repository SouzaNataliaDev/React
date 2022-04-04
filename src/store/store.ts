/*arquivo armazena os status da aplicação, é um container(caixa)*/

import { createStore } from "redux"; /*cria um Store */
import { tokenReducer } from "./tokens/tokensReducer";

const store = createStore(tokenReducer); /* recebe as ações do tokenReducer e armazena dentro dela*/
/*Reduces são funções que não devolvem um valor diferene do qual recebeu, e tem a possibilidade de alterar o valor da store.


/*para as outras paginas terem acesso a ele(status dos tokens) usamos o componente Provider no app tsx
A*/
export default store;