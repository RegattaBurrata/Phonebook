import * as React from 'react';
import { useState } from 'react';

export default function Filter({ changeHandler }) {
  return (
    <form>
      filter: <input onChange={changeHandler} />
    </form>
  );
}
