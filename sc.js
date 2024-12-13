id_aluno = document.querySelectorAll('td.id_aluno'); //guardo todos os campos de ID
let cont = 0 
id_aluno.forEach(td => {    //for desnecessário so pra gerar ID dos alunos dinamicamente
    cont++;
    td.textContent = cont;
});

let lista_faltosos = {
    "id": 1,
    "data": "17/12/06" 
};
//encontro o aluno pelo ID
document.querySelectorAll('tr').forEach(element => {
    //pega a data da tag th que possui a classe data
    if(element.querySelector('.id_aluno') == lista_faltosos["id"]){
    
        let data = element.querySelector('.checkbox_data').textContent.trim();

        if(data == lista_faltosos["data"]){
            let checkbox = data.querySelector('input[type="checkbox"]');
            if(checkbox){
                checkbox.checked = true;
            }
        }
    }
    

});