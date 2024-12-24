import { useRef , useState } from 'react'
import { v4 } from 'uuid'
import { Button, Container, Products, TrashButton } from './styles'

function App() {

  const [produtos, setProdutos] = useState([])
  const referency = useRef()

  function testClick(){

    setProdutos([{ id: v4(), nome: referency.current.value}, ...produtos])
    referency.current.value = ""
    
  }

  function deletarProduto(id){

    setProdutos(produtos.filter(produto => produto.id !== id))
  }

  return (
    <Container>
      <h1>Lista de Compras</h1>
      <input placeholder="Inserir produto" ref={referency}/>
      <Button onClick={testClick}>Adicionar</Button>

      {produtos.map((produto) => (
        <Products key={produto.id}>{produto.nome}
          <TrashButton onClick={() => deletarProduto(produto.id)}>🗑️</TrashButton>
        </Products>
      ))}
      
    </Container>
  )
}

export default App
