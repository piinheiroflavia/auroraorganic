import { useEffect, useState } from 'react';
import Testando from '../components/Teste/Testando';

export default function Contact() {
  
  const [produto, setProdutos] = useState([]);
  //Adiciona um estado para armazenar o ID do produto selecionado
  //const [selectedProductId, setSelectedProductId] = useState(null);


  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:9080/produtos');
        const data = await response.json();
        const produtosSkin = data.filter((produto) => produto.categoria === 'Arom');
        setProdutos(produtosSkin);
      } catch (error) {
        console.error('Erro ao obter os dados do banco:', error);
      }
    };

    fetchProdutos();
  }, []);


  //async vai esperar a requisição ao banco para poder pegar
  //fará uma requisição POST para o endpoint  com os dados necessários, incluindo o ID do cliente e o ID do produto. 
  const handleClickAdicionar = async (productId) => {
    try {
      const data = {
        id_cliente: 1,
        id_produto: productId,
        quantidade: 1, 
      };
  
      const response = await fetch('http://localhost:9080/carrinho/enviar-carrinho', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok){
        console.log("Produto adicionado com sucesso")
      }else{
        console.error('erro em adicionar o carrinho', response.statusText);
      }
    }catch (erro){
      console.log('erro ao adicionar o produto ao cliente', erro)
    }
  }

  
// // Remove o carrinho com id = 1
// const handleClickRemover = async (carrinhoId) => {
//   try {
//     const response = await fetch(`http://localhost:9080/carrinho/remover-carrinho/${carrinhoId}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       // O produto foi removido com sucesso do carrinho
//       console.log('Produto removido do carrinho');
//     } else {
//       // Ocorreu um erro ao remover o produto do carrinho
//       console.error('Erro ao remover o produto do carrinho:', response.statusText);
//     }
//   } catch (error) {
//     console.error('Erro ao remover o produto do carrinho:', error);
//   }
// };

  return (
    <div className='mx-8 mt-3 '>
      <Testando/>
      {produto.map((produtos) => (
        <div key={produtos.id_produto}>
            <img
              src={produtos.imageSrc}
              alt={produtos.imageAlt}
              className="h-20 w-20 object-cover hover:scale-110 object-center group-hover:opacity-75"
            />
          <br />
          <div>
            <h3>{produtos.name_produto}</h3>
            <p>{produtos.Preco}</p>
            <p>{produtos.Categoria}</p>
            <button className='bg-gray-800 text-rose-50 my-3' type='submit' onClick={() => handleClickAdicionar(produtos.id_produto)}>Adicionar</button> <br />
             {/* <button className='bg-gray-800 text-rose-50' onClick={() => handleClickRemover(produtos.id_produto)}>Remover</button><br></br> */}
          </div>
          <br /><br />
        </div>
      ))}
    </div>
  );
}
