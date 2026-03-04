const personagem1 ={
    nome: 'Steve Rogers',
    codinome: 'Capitão América',
    armaPrincipal: 'Escudo americano',
    armaSecundaria: '',
    velocidade: 85,
    forca: 75,
    resistencia: 80,

    descricao: function(){
        return "Nome do personagem:" + this.nome + '\n'
            + 'Codinome do personagem:' + this.codinome + '\n'
            + 'Arma principal:' + this.armaPrincipal + '\n'
            + 'Arma secundária:' + this.armaSecundaria + '\n'
            + 'Nível de velocidade:' + this.velocidade + '\n'
            + 'Nível de força:' + this.forca + '\n'
            + 'Nível de resistência:' + this.resistencia
    }
}

const personagem2 ={
    nome: 'Anthony Edward Stark',
    codinome: 'Homem de Ferro',
    armaPrincipal: 'Armadura de ferro',
    armaSecundaria: '',
    velocidade: 90,
    forca: 85,
    resistencia: 85,

    descricao: function(){
        return "Nome do personagem:" + this.nome + '\n'
            + 'Codinome do personagem:' + this.codinome + '\n'
            + 'Arma principal:' + this.armaPrincipal + '\n'
            + 'Arma secundária:' + this.armaSecundaria + '\n'
            + 'Nível de velocidade:' + this.velocidade + '\n'
            + 'Nível de força:' + this.forca + '\n'
            + 'Nível de resistência:' + this.resistencia

    }
}

const personagem3 ={
    nome: 'Thor Odinson',
    codinome: 'Thor',
    armaPrincipal: 'Martelo Mjölnir',
    armaSecundaria: 'Trovões, raios e furacões',
    velocidade: 80,
    forca: 95,
    resistencia: 95, 

    descricao: function(){
        return "Nome do personagem:" + this.nome + '\n'
            + 'Codinome do personagem:' + this.codinome + '\n'
            + 'Arma principal:' + this.armaPrincipal + '\n'
            + 'Arma secundária:' + this.armaSecundaria + '\n'
            + 'Nível de velocidade:' + this.velocidade + '\n'
            + 'Nível de força:' + this.forca + '\n'
            + 'Nível de resistência:' + this.resistencia

    }
}

const personagem4 ={
    nome: 'Robert Bruce Banner',
    codinome: 'Hulk',
    armaPrincipal: 'Super força(punhos)',
    armaSecundaria: '',
    velocidade: 70,
    forca: 100,
    resistencia: 100,

    descricao: function(){
        return "Nome do personagem:" + this.nome + '\n'
            + 'Codinome do personagem:' + this.codinome + '\n'
            + 'Arma principal:' + this.armaPrincipal + '\n'
            + 'Arma secundária:' + this.armaSecundaria + '\n'
            + 'Nível de velocidade:' + this.velocidade + '\n'
            + 'Nível de força:' + this.forca + '\n'
            + 'Nível de resistência:' + this.resistencia

    }
}

const personagem5 ={
    nome: 'Peter Benjamin Parker',
    codinome: 'Homem-Aranha',
    armaPrincipal: 'Teia',
    armaSecundaria: '',
    velocidade: 95,
    forca: 80,
    resistencia: 75,

    descricao: function(){
        return "Nome do personagem:" + this.nome + '\n'
            + 'Codinome do personagem:' + this.codinome + '\n'
            + 'Arma principal:' + this.armaPrincipal + '\n'
            + 'Arma secundária:' + this.armaSecundaria + '\n'
            + 'Nível de velocidade:' + this.velocidade + '\n'
            + 'Nível de força:' + this.forca + '\n'
            + 'Nível de resistência:' + this.resistencia

    }
}

const personagem6 ={
    nome: 'Natasha Romanoff',
    codinome: 'Viúva Negra',
    armaPrincipal: 'Bastões de Eletrochoque',
    armaSecundaria: 'Pistolas',
    velocidade: 80,
    forca: 60,
    resistencia: 70,

    descricao: function(){
        return "Nome do personagem:" + this.nome + '\n'
            + 'Codinome do personagem:' + this.codinome + '\n'
            + 'Arma principal:' + this.armaPrincipal + '\n'
            + 'Arma secundária:' + this.armaSecundaria + '\n'
            + 'Nível de velocidade:' + this.velocidade + '\n'
            + 'Nível de força:' + this.forca + '\n'
            + 'Nível de resistência:' + this.resistencia

    }
}
const personagem7 ={
    nome: 'Thanos',
    codinome: 'Thanos',
    armaPrincipal: 'Manopla do Infinito',
    armaSecundaria: 'Espada de Dois Gumes',
    velocidade: 60,
    forca: 100,
    resistencia: 95,

    descricao: function(){
        return "Nome do personagem:" + this.nome + '\n'
            + 'Codinome do personagem:' + this.codinome + '\n'
            + 'Arma principal:' + this.armaPrincipal + '\n'
            + 'Arma secundária:' + this.armaSecundaria + '\n'
            + 'Nível de velocidade:' + this.velocidade + '\n'
            + 'Nível de força:' + this.forca + '\n'
            + 'Nível de resistência:' + this.resistencia

    }
}

let personagens = [personagem1, personagem2, personagem3, personagem4, personagem5, personagem6, personagem7]

for(let i = 0; i<personagens.length; i++){
    for(let j = i+1; j<personagens.length; j++){

        let p1 = personagens[i]
        let p2 = personagens[j]

        console.log('Comparando:')
        console.log(p1.descricao())
        console.log('VS')
        console.log(p2.descricao())

        if(p1.forca > p2.forca){
            console.log(p1.codinome + ' vence ' + p2.codinome + ' no quesito Força')
        } else if(p2.forca > p1.forca){
            console.log(p2.codinome + ' vence ' + p1.codinome + ' no quesito Força')            
        }else{
            console.log('Empate!')
        }

        if(p1.resistencia > p2.resistencia){
            console.log(p1.codinome + ' vence ' + p2.codinome + ' na Resistência')
        }else if(p2.resistencia > p1.resistencia) {
            console.log(p2.codinome + ' vence ' + p1.codinome + ' na Resistência')
        }else{
            console.log('Empate!')
        }

        if(p1.velocidade>p2.velocidade){
            console.log(p1.codinome + ' vence ' + p2.codinome + ' em relação a Velocidade')
        }else if(p2.velocidade> p1.velocidade){
            console.log(p2.codinome + ' vence ' + p1.codinome + ' em relação a Velocidade')
        }else{
            console.log('Empate!')
        }
        console.log('-------------------------------------')
    }
}

