import React from 'react';
import { useState, useEffect } from 'react';

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
    } else if (newName === '') {
      alert('cannot submit empty name');
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
    console.log(filterPerson);
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
      <form>
        filter: <input onChange={filterFunction} />
      </form>
      <h2>Add a Number</h2>
      <form onSubmit={addName} className="form">
        <div>
          name: <input onChange={onNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={onNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {display.map((person) => (
        <div className="infoblock">
          <p>{person.name}</p>
          <p>{person.number}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
