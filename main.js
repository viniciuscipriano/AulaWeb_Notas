function addTabela() {
    const nome = document.getElementById("nome").value;
    const nota = document.getElementById("nota").value;

    const arrayTabela = [];
    arrayTabela.push(nome, nota);

    let tbody = document.getElementById("tbody");
    let thead = document.getElementById("thead");

    thead.innerText = "";

    let tr1 = thead.insertRow();
    let th_nome = tr1.insertCell();
    let th_nota = tr1.insertCell();

    th_nome.innerText = "NOME";
    th_nota.innerText = "NOTA";

    for (var i = 0; i < arrayTabela.length; i += 2) {
        let tr = tbody.insertRow();

        let td_nome = tr.insertCell();
        let td_nota = tr.insertCell();

        td_nome.innerText = arrayTabela[i];
        td_nota.innerText = arrayTabela[i + 1];


    }

    document.getElementById("nome").value = "";
    document.getElementById("nota").value = "";

    return false;
}