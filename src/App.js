import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const countAtom = atom(0);

const doubleAtom = atom((get) => {
  return get(countAtom) * 2;
});

const fourfoldAtom = atom((get) => {
  return get(doubleAtom) * 2;
});

function App() {
  const [count, setCount] = useAtom(countAtom);
  const [fourfold] = useAtom(fourfoldAtom);
  const [fourfold2] = useAtom(fourfoldAtom);

  useEffect(() => {
    setCount(count);
  }, [count, setCount]);

  return (
    <div>
      {count},{fourfold}
      <button onClick={() => setCount((c) => c + 1)}>one up</button>
    </div>
  );
}

export default App;
