interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {

  return (
    <div>
      <h1>Encontre sua DUO</h1>

      <Button title="search"/>
      <Button title="Cancel"/>
    </div>
  )
}

export default App
