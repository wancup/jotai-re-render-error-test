import {atom, useAtom} from "jotai"
import {useEffect} from "react"

const countAtom = atom(0)

const doubleAtom = atom((get) => {
  return get(countAtom) * 2
})

const plusAtom = atom((get) => {
  const count = get(countAtom)
  const double =  get(doubleAtom)
  return count + double
})

function App() {
  const [count, setCount] = useAtom(countAtom)
  const [plus] = useAtom(plusAtom)
  const [plus2] = useAtom(plusAtom)

  useEffect(() => {
    setCount(count)
  }, [count])

  return (
      <div>
        {count},{plus}
        <button onClick={() => setCount(c => c + 1)}>one up</button>
      </div>
  );
}

export default App;
