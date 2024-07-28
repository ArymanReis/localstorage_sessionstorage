// Inserir dados
localStorage.setItem("name", "Aryman");
//Resgatar local storage
const name = localStorage.getItem("name");

console.log(name);
// Resgatar dados que não existem
const lastName = localStorage.getItem("lastname");

console.log(lastName);

if (!lastName) {
  console.log("Sem sobrenome");
}

localStorage.removeItem("name");

// Limpar todos os itens
localStorage.setItem("a", 1);
localStorage.setItem("b", 2);

console.log(typeof localStorage.getItem("a"));

localStorage.clear();

// session storage
sessionStorage.setItem("number", 123);

const n = sessionStorage.getItem("number");

console.log(n);

sessionStorage.removeItem("number");

sessionStorage.clear();

//Salvar objetos
const person = {
  name: "Aryman",
  age: 38,
  job: "Programador"
}

localStorage.setItem("person", JSON.stringify(person));

const getPerson = localStorage.getItem("person");
const personObject = JSON.parse(getPerson);

console.log(personObject.job);