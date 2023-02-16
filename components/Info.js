import * as React from 'react';
import { useState } from 'react';

export default function Info({ item }) {
  return (
    <div className="infoblock">
      <p>{item.name}</p>
      <p>{item.number}</p>
    </div>
  );
}
