// src/models/personModel.js

// Importing the necessary libraries
const { v4: uuidv4 } = require('uuid');

// Definindo o modelo de dados para uma pessoa
class Person {
    constructor(name, age) {
        this.id = uuidv4(); // Gerando um ID único para cada pessoa
        this.name = name; // Nome da pessoa
        this.age = age; // Idade da pessoa
    }
}

const persons = [];

// Métodos para manipular os dados
const create = async (name, age) => {
    const newPerson = new Person(name, age);
    persons.push(newPerson);
    return newPerson;
};

const findAll = async () => {
    return persons;
};

const update = async (id, updatedData) => {
    const index = persons.findIndex((p) => p.id === id);
    if (index === -1) return null;
    persons[index] = { ...persons[index], ...updatedData };
    return persons[index];
};

const remove = async (id) => {
    const index = persons.findIndex((p) => p.id === id);
    if (index === -1) return null;
    return persons.splice(index, 1)[0];
};

module.exports = {
    create,
    findAll,
    update,
    remove,
};
