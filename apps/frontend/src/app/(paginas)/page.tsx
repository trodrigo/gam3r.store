// import ProdutoItem from "@/components/produto/ProdutoItem"
// import { produtos } from "@gstore/core"
import ListaProdutos from '@/components/produto/ListaProdutos'

export default function Home() {
  return (
      <div className="flex-1 flex flex-col container gap-5 py-10">
        <ListaProdutos />
        {/* {produtos.map((produto) => (
          <ProdutoItem key={produto.id} produto={produto} />          
        ))} */}
        {/* <ProdutoItem produto={produtos[0]} />
            <ProdutoItem produto={produtos[1]} />
            <ProdutoItem produto={produtos[2]} />
            <ProdutoItem produto={produtos[3]} /> */}
      </div>
  )
}
