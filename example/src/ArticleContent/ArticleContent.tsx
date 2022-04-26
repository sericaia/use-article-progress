import * as React from 'react';
import { useEffect, useState } from "react";

/**
 * Using Poke API to grab fake content
 */
const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon/";

type Pokemon = {
  name: string;
  url: string;
};

export function ArticleContent() {
  const [text, setText] = useState<Pick<Pokemon, "name">[]>([]);

  useEffect(() => {
    async function fetchText() {
      let response = await fetch(POKE_API_URL);
      const data = await response.json();
      const pokeNames = data.results.map((item: Pokemon) => item.name);

      setText(pokeNames);
    }
    fetchText();
  }, []);

  return (
    <div>
      {text.map((name: Pick<Pokemon, "name">) => (
        <p key={name}>{name}</p>
      ))}
    </div>
  );
}
