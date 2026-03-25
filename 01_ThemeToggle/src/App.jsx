import { useEffect, useState } from "react";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";

function App() {
  const [theme, setTheme] = useState('dark')
  

  useEffect(() => {
    const doc = document.querySelector('html')
    doc.classList.remove("dark", "light")
    doc.classList.add(theme)
  }, [theme])

  return (
    <>
      <div className="mt-20 flex flex-col justify-center items-center gap-5">
        <Toggle theme={theme} setTheme={setTheme} />
        <Counter />
      </div>
    </>
  )
}

export default App;