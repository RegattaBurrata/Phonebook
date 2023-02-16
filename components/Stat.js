import * as React from 'react';
import { useState } from 'react';

export default function Stat({ text, stat }) {
  return (
    <p>
      {text} {stat}
    </p>
  );
}
