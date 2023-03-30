const nome = "murilo"; //string
const nome1 = 'murilo'; //string
const nome2 = `murilo`; //string
const num1 = 10; //number
const num2 = 10.50; //number
let nomeAluno; //undefined = não aponta lugar nenhum na memoria
const sobrenomeAluno = null; //nulo = não aponta lugar nenhum na memoria
const aprovado = true //Boolean (pode ser true ou false e é um valor lógico)



/**
 * qual a diferença entre undefined e null? 
 * exemplo: supondo que um site permita o usuario trocar a cor do plano de fundo do seu perfil
 * nos mesmos precisamos setar a varivael como nula, pois caso ele decida mudar o nulo sera substituido pela cor desejada
 * let corPlanoDeFundo = null
 * *usuario seta para cor azul
 * let corPlanoDeFundo = "azul"
 * *usuario desmarca a cor
 * let corPlanoDeFundo = null
 * >>>NOS NAO SETAMOS A VARIAVEL UNDEFINED, O JS FAZ ISSO DE FORMA AUTOMATICA<<<
 */