document.addEventListener("DOMContentLoaded", (event) => {
    buscarInscritos();
    construirModal();

    const temaLocal = localStorage.getItem("tema");
    document.body.setAttribute("data-theme", temaLocal);    


});

let idiomaAtual = "pt";

function carregarIdioma(idioma) {
    fetch('json/${idioma}.json')
    .then(data => data.json())
    .then(data => {
        traduzirPagina(data);
    });
}

function traduzirPagina(linguagem) {
    document.querySelectorAll("data-i18n").forEach(elemento => {
        console.log(elemento)
    })
}

function alterarIdioma() {
    idiomaAtual = idiomaAtual == "pt" ? "en" : "pt";
    carregarIdioma(idiomaAtual);
}


function construirModal() {
    const botaoSaibaMais = document.getElementById("saiba-mais");
    const modal = document.getElementById("modal");
    const fechar = document.getElementById("fechar-modal");

    botaoSaibaMais.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });
    
    fechar.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    window.addEventListener("click", (e) => {
        if (e.target == modal){
            modal.classList.add("hidden");
        }
    });
}


function alterarTema() {
    //DOM -> document object model
    const tema = document.body.getAttribute("data-theme");
    const novoTema = tema == 'dark' ? 'light' : 'dark';

    localStorage.setItem("tema", novoTema);
    document.body.setAttribute("data-theme", novoTema);

    const btAlterarTema = document.getElementById("btAlterarTema");
    btAlterarTema.textContent = novoTema == 'dark' ? 'Light' : 'Dark';
}

function buscarInscritos() {
    //REQUISIÇÃO GET
    //fetch("https://jsonplaceholder.typicode.com/users")
    fetch("json/inscritos.json")
        .then(res => res.json())    
        .then(res => {
            const divInscritos = document.getElementById('inscritos');
            res.forEach(user => {
                const novoParagrafo = document.createElement("p");
                novoParagrafo.textContent = `Nome: ${user.nome}`;
                divInscritos.appendChild(novoParagrafo);
            });
        }).catch(e => console.log(e));
}