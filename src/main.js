///////////////// CLASSES /////////////////
/*
class List{
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data)
    }

}

class TodoList extends List{
    constructor() {
        super();

        this.usuario = "Wagner";
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function(){
    MinhaLista.add('novo Data');
}

MinhaLista.mostraUsuario();
*/

///////////////// OPERAÇÔES EM ARRAYS /////////////////

/*
const arr =  [1,3,4,5,8,10];

//Percorrer
const newArr = arr.map(function(item, index) {
    return item + index;
});

console.log(newArr);

//consumir array e transformar em um unico numero
const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

//fitrar array
const filter = arr.filter(function(item) {
 return item % 2 === 0;
});

console.log(filter);


const find = arr.find(function(item) {
    return item == 24;
});

console.log(find);
*/

///////////////// ARROW FUNCTIONS /////////////////
/*
const arr =  [1,3,4,5,8,10];

//function normal
const funcao = arr.map(function(item) {
    return item * 2;
});

//arrow function reduzida com apenas 1 parametro de entrada e saida
const funcaoReduzida = arr.map(item => item * 2);

console.log(funcao);
console.log(funcaoReduzida);


const teste = () => ({nome: 'Wagner'});

console.log(teste());
*/

///////////////// VALORES PADRÃO PARA OS PARAMETROS DAS FUNCOES /////////////////

/*
//funcao normal
function soma(a = 0, b = 0){
    return a + b;
}

console.log(soma(1));
console.log(soma());

//arrow function
const somaArrow = (a = 0, b = 0) => a + b; 

console.log(somaArrow(1));
console.log(somaArrow());
*/

///////////////// DESESTRUTURAÇÃO /////////////////
/*
const usuario = {
    nome: 'Wagner',
    idade: 24,
    endereco:{
        cidade: 'Sao Paulo',
        estado: 'SP'
    },
};

const { nome, idade, endereco:{ cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade)

//desestruturação para os parametros de funcoes
function mostraNome({ nome, idade}) {
    console.log(nome, idade);
}

mostraNome(usuario);
*/

///////////////// OPERADORES REST/SPREAD /////////////////
/*
//REST resto das propriedade
const usuario = {
    nome: 'Wagner',
    idade: 24,
    empresa: 'BRQ'
};

const {nome, ...resto } = usuario;

console.log(nome);
console.log(resto);


//rest usando array com desestruturacao
const arr = [1,2,3,4];

const [ a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);

//rest parametros de funcoes
function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));


//SPREAD repassar informacoes de um array para outras estrutura de dados
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

//copiar todas informacoes e sobrepor apenas aquela que quer mudar
const usuario1 = {
    nome: 'Wagner',
    idade: 24,
    empresa: 'BRQ'
};

const usuario2 = {...usuario1, nome: 'Wagner Alterado' };

console.log(usuario1);
console.log(usuario2);
*/

///////////////// TEMPLATES LITERALS /////////////////
/*
//Incluir variaveis dentro de String no js a partir do ES6
const nome = "Wagner";
const idade = 24;

console.log("Meu nome eh " + nome + " e tenho " + idade + " anos");

console.log(`Meu Nome eh ${nome} e tenho ${idade} anos`);
*/

///////////////// OBJECT SHORT SYNTAX /////////////////
/*
const nome = "Wagner";
const idade = 24;

//Quando o nome da variavel é o mesmo nome do valor não precisamos declarar os 2
const usuario = {
    nome,
    idade: idade,
    empresa: 'BRQ'
}

console.log(usuario);
*/

/*
import { soma as somaFunction, sub } from './funcoes';

//ou todas
//import * as funcoes from './funcoes'; e usar funcoes.soma

console.log(somaFunction(1,2));

console.log(sub(1,2));
*/

import api from './api';

class App{
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        if(loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if(repoInput.length === 0) {
            return;
        }

        this.setLoading();

        try{
            const response = await api.get(`/repos/${repoInput}`);
        
        const {name, description, html_url, owner:{avatar_url} } = response.data;

        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url
        });

        this.inputEl.value = '';

        this.render();
        } catch(err){
            alert('O repositório não existe');
        }

        this.setLoading(false);
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();


