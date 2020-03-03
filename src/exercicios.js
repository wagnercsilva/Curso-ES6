////////////////////Exercicio 1

/*
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin == true;
    }
}

class Admin extends Usuario {
    constructor(){
        super();

        this.admin = true;
    }
}


const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
*/

////////////////////Exercicio 2
//A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):

/*
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

//map
const idade = usuarios.map(function(item){
    return item.idade;
});

console.log(idade);

//filter
const usuarioRocket = usuarios.filter(function(item){
    return item.empresa === 'Rocketseat' && item.idade > 18;
});

console.log(usuarioRocket);

//find
const usuarioGoogle = usuarios.find(function(item){
    return item.empresa === 'Google';
});

console.log(usuarioGoogle);

//Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
//no máximo 50 anos

const idadeMult = usuarios.filter(function(item){
    item.idade = item.idade *2;
    return item.idade <= 50;
});

console.log(idadeMult);
*/

////////////////////Exercicio 3
//Converta as funções nos seguintes trechos de código em Arrow Functions:
/*
// 3.1
const arr = [1, 2, 3, 4, 5];

//function
arr.map(function(item) {
 return item + 10;
});
//arrow function
arr.map(item => item + 10);


// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

function mostraIdade(usuario) {
 return usuario.idade;
}
console.log(mostraIdade(usuario));

//arrow function
const userArrow = usuario => usuario.idade;
console.log(userArrow(usuario));


// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;

function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

//arrow
const mostraUsuarioArrow = (nome = 'Diego', idade = 18) => {
    return { nome, idade };
}

console.log(mostraUsuarioArrow(nome, idade));
console.log(mostraUsuarioArrow(nome));


// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
        return resolve();
 })
}

console.log(promise);

//arrow
const promisseArrow = () => { return new Promise( (resolve, reject) => resolve())
}

console.log(promisseArrow);
*/


////////////////////Exercicio 4
/*

// 4.1 Desestruturação simples

const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };

//desestruturação
const {nome, endereco:{cidade, estado} } = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

// 4.2 Desestruturação em parâmetros
function mostraInfo(usuario) {
    return `${usuario.nome} tem ${usuario.idade} anos.`;
   }
mostraInfo({ nome: 'Diego', idade: 23 });

//desestruturação em parametros
function mostraNome({ nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}

console.log(mostraNome({nome: 'Diego', idade: 23}));
*/


////////////////////Exercicio 5

//5.1 Rest
/*
const arr = [1, 2, 3, 4, 5, 6];
const [ x, ...y ] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

//5.2 Spread

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };

const usuario2 = {...usuario, nome: 'Gabriel'};
const usuario3 = {...usuario, nome: 'Lontras'};

console.log(usuario);
console.log(usuario2);
console.log(usuario3);
*/

////////////////////Exercicio 6
/*
const usuario = 'Diego';
const idade = 23;

console.log('O usuario ' + usuario + ' possui ' + idade + ' anos');

// utilizando Template Literals:
console.log(`O usuário ${usuario} possui ${idade} anos`);
*/


////////////////////Exercicio 7
//Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:

/*
const nome = 'Diego';
const idade = 23;

const usuario = {
 nome: nome,
 idade: idade,
 cidade: 'Rio do Sul',
};

//Utilizando Object Short Syntax
const usuarioObject = {
    nome,
    idade,
    cidade: 'Rio do Sul',
   };

console.log(usuarioObject.nome, usuarioObject.idade);
*/



////////////Exercícios: Módulo 02////////////

/*
import { idade } from './functions';
console.log(idade);

import ClasseUsuario from './functions';
ClasseUsuario.info();

import teste, {idade as idadeUsuario} from './functions';
teste.info();
console.log(idadeUsuario);
*/

/*import axios from 'axios';

function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        })
}

async function executaPromisse(){
    await getUserFromGithub('diego3g');
    await getUserFromGithub('diego3g124123');
}

executaPromisse().then();
*/



/*
// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve('teste'), 1000));

async function umPorSegundo() {
    const resp = await delay();
    console.log('1 sec');
    
    await delay();
    console.log('2 sec');

    await delay();
    console.log('3 sec');
}

umPorSegundo().then();
*/

/*
import axios from 'axios';

class Github {
    static getRepositories(repo) {
    axios.get(`https://api.github.com/repos/${repo}`)
    .then(response => {
    console.log(response.data);
    })
    .catch(err => {
    console.log('Repositório não existe');

     })
    }
}

async function buscarepositorio(){
   await Github.getRepositories('rocketseat/rocketseat.com.br');
   await Github.getRepositories('rocketseat/dslkvmskv');
}

buscarepositorio().then();
*/

/*
import axios from 'axios';

const buscaUsuario = async user => {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
        console.log(response.data);
    })
        .catch(err => {
        console.log('Usuário não existe');
    });
}

buscaUsuario('diego3g').then;
/*