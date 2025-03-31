// function alterarTema() {

//     const tema = document.body.getAttribute("data-theme");
//     const novoTema = tema == 'dark' ? 'light' : 'dark';
//     document.body.setAttribute("data-theme", novoTema);

//     const btAlterarTema = document.getElementById("btAlterarTema");
//     btAlterarTema.textContent = "Dark";

// }



document.addEventListener("DOMContentLoaded", (event) => {
    buscarInscritos();
    construirModal();
});


function construirModal() {
    const botaoSaibaMais = document.getElementById("saiba-mais");
    const modal = document.getElementById("modal");
    botaoSaibaMais.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });

    window.addEventListener("click", (e) => {
        console.log(e)
        modal.classList.add("hidden");
    });
}


function alterarTema() {
    //DOM -> document object model
    const tema = document.body.getAttribute("data-theme");
    const novoTema = tema == 'dark' ? 'light' : 'dark';
    /* let novoTema = '';
     if(tema == 'dark'){
         novoTema = 'light';
     }else{
         novoTema = 'dark';
     }*/
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