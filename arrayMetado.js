const pilotos = ['Vertat', 'Alonso', 'Raikkon', 'Massa' ]
pilotos.pop() 
console.log(pilotos)

pilotos.push('Vertappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro 
console.log(pilotos)

pilotos.unshift('Mamilton')
console.log(pilotos)

//splice pode adicionar e remover elemento

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(2) // novo Array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.splice(1, 4)
console.log(algunsPilotos2)
