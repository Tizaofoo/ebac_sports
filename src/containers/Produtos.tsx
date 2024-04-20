import Produto from '../components/Produto'
import { useGetProductsQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProductsQuery()

  {
    if (isLoading)
      return (
        <div style={{ width: '100%' }}>
          <h1 style={{ fontSize: '50px' }}>...CARREGANDO...</h1>
        </div>
      )
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
