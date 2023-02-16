import * as React from 'react';
import { useState } from 'react';

export default function PersonForm({
  nameChangeHandler,
  numberChangeHandler,
  name,
  number,
  personSubmit,
}) {
  return (
    <form onSubmit={personSubmit} className="form">
      <div>
        name: <input onChange={nameChangeHandler} value={name} />
      </div>
      <div>
        number: <input onChange={numberChangeHandler} value={number} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
