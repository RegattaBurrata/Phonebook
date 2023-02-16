import React from 'react';
import { useState, useEffect } from 'react';
import Info from './components/Info';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const [display, setDisplay] = useState(persons);

  const [filterPerson, setFilterPerson] = useState('');

  const onNameChange = (e) => {
    setNewName(e.target.value);
  };

  const onNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const filterFunction = (e) => {
    setFilterPerson(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else if (newName === '' || newNumber === '') {
      alert('Must include name and number');
    } else if (newNumber.length < 10) {
      alert('number must be at least 10 digits in length');
    } else {
      const newObj = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(newObj));
      setNewName('');
      setNewNumber('');
    }
  };

  useEffect(() => {
    const names = persons.map((person) => person.name);
    const search = names.filter((name) =>
      name.toLowerCase().includes(filterPerson)
    );
    setDisplay(persons.filter((person) => search.includes(person.name)));
  }, [filterPerson]);

  useEffect(() => {
    setDisplay(persons);
  }, [persons]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter changeHandler={filterFunction} />
      <h2>Add a Number</h2>
      <PersonForm
        personSubmit={addName}
        nameChangeHandler={onNameChange}
        name={newName}
        numberChangeHandler={onNumberChange}
        number={newNumber}
      />
      <h2>Numbers</h2>
      {display.map((person) => (
        <Info item={person} />
      ))}
    </div>
  );
};

export default App;
