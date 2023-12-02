// Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade dela e depois mostre se ela pode ou não votar.

// Obtendo o ano de nascimento da pessoa.
const yaerBirth = parseFloat(prompt("Em qual ano você nasceu?"));

// Calcula a idade da pessoa
const age = 2023 - yaerBirth;
console.log(`A idade do elitor é ${age} anos de idade`);

// Idade mínima para votar no brasil.
const minimumAgeVote = 16;

if (age >= minimumAgeVote) {
  console.log("Eleitor apto a participar das votações eleitorais!");
} else {
  console.log(
    "O eleitor não completou a idade minima para participar das votaçÕes eleitorais."
  );
}
