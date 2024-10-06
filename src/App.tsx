import { ThemeProvider } from 'styled-components'
import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {

  const [estaUsandoDark, setEstaUsandoDark] = useState(false)

  function trocaTema(){
    setEstaUsandoDark(!estaUsandoDark)
  }


  return (
    <ThemeProvider theme={estaUsandoDark? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema}/>
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
