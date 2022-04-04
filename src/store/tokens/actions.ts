/* dentro desse arquivo estão as ações, a ação relacionada a adição do token para ele ser validado dentro da API*/

export type Action = {type: "ADD_TOKEN"; payload: string}; /* é um objeto com duas propriedades padrões/*

/*a propriedade payload armazena o token*/

export const addToken = (token: string): Action => ({
 type: "ADD_TOKEN", /*armazena o token inicial (vazio)*/
 payload: token, /*armazena o token após o usuario logar*/
});

/*A função addToken é do tipo Action, essa ação é enviada ao redux*/

/*O arquivo não pode ser exportado para as outras páginas por ser do tipo type */