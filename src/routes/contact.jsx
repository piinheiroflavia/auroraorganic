import { useEffect, useState } from 'react';
import Carrinho from '../components/Carrinho/Carrinho';
import { baseUrl } from '../configReq'; 
export default function Contact() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [totalValor, setTotalValor] = useState(0);
  const clienteId = 1; // Id do cliente atual, ajuste conforme necessário

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch(`${baseUrl}/produtos`);
        const data = await response.json();
        const produtosSkin = data.filter((produto) => produto.categoria === 'skin');
        setProdutos(produtosSkin);
      } catch (error) {
        console.error('Erro ao obter os dados do banco:', error);
      }
    };

    fetchProdutos();
  }, []);

  useEffect(() => {
    const fetchCarrinho = async () => {
      try {
        const response = await fetch(`${baseUrl}/carrinho`);
        const data = await response.json();
        setCarrinho(data);

        // Calcular a soma dos valores
        const total = data.reduce((accumulator, item) => accumulator + item.valor_total, 0);
        setTotalValor(total);
      } catch (error) {
        console.error('Erro ao obter os dados do carrinho:', error);
      }
    };

    fetchCarrinho();
  }, []);

  const handleClickAdicionar = async (productId) => {
    try {
      const data = {
        id_cliente: 3,
        id_produto: productId,
        quantidade: 1,
      };

      const response = await fetch(`${baseUrl}/carrinho/enviar-carrinho`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Produto adicionado com sucesso');

        // Atualizar a lista de produtos no carrinho após a adição
        const carrinhoResponse = await fetch(`${baseUrl}/carrinho`);
        const carrinhoData = await carrinhoResponse.json();
        setCarrinho(carrinhoData);

        // Recalcular a soma dos valores
        const total = carrinhoData.reduce((accumulator, item) => accumulator + item.valor_total, 0);
        setTotalValor(total);

        // Aguardar 2 segundos antes de atualizar a página
        // setTimeout(() => {
        //   window.location.reload();
        // }, 1000);

      } else {
        console.error('Erro ao adicionar ao carrinho:', response.statusText);
      }
    } catch (error) {
      console.log('Erro ao adicionar o produto ao cliente:', error);
    }
  };

  const removerProduto = async (productId) => {
    try {
      const response = await fetch(`${baseUrl}/carrinho/remover-carrinho/${productId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log('Produto removido com sucesso');
        console.log("ID do carrinho a ser removido:", req.params.id);

        // Atualizar a lista de produtos no carrinho após a remoção
        const carrinhoResponse = await fetch(`${baseUrl}/carrinho`);
        const carrinhoData = await carrinhoResponse.json();
        setCarrinho(carrinhoData);
  
        // Recalcular a soma dos valores
        const total = carrinhoData.reduce((accumulator, item) => accumulator + item.valor_total, 0);
        setTotalValor(total);
      } else {
        console.error('Erro ao remover do carrinho:', response.statusText);
      }
    } catch (error) {
      console.log('Erro ao remover o produto do carrinho:', error);
    }
  };


  return (
    <div className="mx-8 mt-3">
      <Carrinho/>
      <div>
        {produtos.map((produto) => (
          <div key={produto.id_produto}>
            <img
              src={produto.imageSrc}
              alt={produto.imageAlt}
              className="h-20 w-20 object-cover hover:scale-110 object-center group-hover:opacity-75"
            />
            <br />
            <div>
              <h3>{produto.name_produto}</h3>
              <p>Preço: R${produto.Preco.toFixed(2)}</p>
              <p>Categoria: {produto.categoria}</p>
              <button
                className="bg-gray-800 text-rose-50 my-3"
                type="submit"
                onClick={() => handleClickAdicionar(produto.id_produto)}
              >
                Adicionar
              </button> <br />
              <button
                className="bg-gray-800 text-rose-50 my-3"
                type="submit"
                onClick={() => removerProduto(produto.id)}
              >
                Remover
              </button>

            </div>
            <br />
            <br />
          </div>
        ))}
      </div>

      <h2>Produtos no Carrinho:</h2>
      {carrinho
        .filter((item) => item.id_cliente === 3)
        .map((item) => {
          const produto = produtos.find((prod) => prod.id_produto === item.id_produto);

          return (
            <div key={item.id_carrinho}>
              <img
                src={produto.imageSrc}
                alt={produto.imageAlt}
                className="h-20 w-20 object-cover hover:scale-110 object-center group-hover:opacity-75"
              />
              <br />
              <div>
                <h3>{produto.name_produto}</h3>
                <p>Preço: R${produto.Preco.toFixed(2)}</p>
                <p>Categoria: {produto.categoria}</p>
                <p>Quantidade: {item.quantidade}</p>
                <p>Valor Total: R${item.valor_total.toFixed(2)}</p>
              </div>
              <br />
              <br />
            </div>
          );
        })}
      <p>Total: R${totalValor.toFixed(2)}</p>
    </div>
  );
}
