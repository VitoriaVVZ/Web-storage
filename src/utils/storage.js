// salvar um dado no localStorage
// dados: chave, valor
// nome: "eu", tema: "escuro"

export const salvarNoStorage = (chave, valor) => {
 try {
    //vamos converter os dados para um texto - string
    const valorString = JSON.stringify(valor);
    localStorage.setItem(chave, valorString);
 } catch (erro) {
    console.error("Erro ao salvar no localStorage:", erro);
 }
};

export const buscarDoStorage = (chave) => {
 try {
    const dado = localStorage.getItem(chave);
    return dado ? JSON.parse(dado) : null;
 } catch (erro) {
    console.error("Erro ao buscar no localStorage:", erro);
    return null;
 }
};
