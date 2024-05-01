import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountButton from './assets/componets/CountButton'
import Header from './assets/componets/Header'
import Form from './assets/componets/Form/Form'

function App() {
  return (
    <main>
      <Header title="Formulario de ingreso"/>
      <Form/>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </main>
  )
}

export default App
