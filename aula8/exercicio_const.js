/**
 * luiz otavio miranda tem 30 anos, pesa 84kg
 * tem 1.80 de altura e seu imc é de 25.925925925925924
 * 
 * imc = peso / (altura * altura)
 */

const nome = "Murilo ";
const sobrenome = "Punko Costa";
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc = peso / (alturaEmM * alturaEmM);
let dataNascimento = 2023 - idade;

//template string `${nome} insira um texto aqui ${idade}`
console.log(`${nome + sobrenome} tem ${idade} anos, 
pesa ${peso}kg tem ${alturaEmM} de altura, 
seu imc é de ${imc} e nasceu em ${dataNascimento}`);  