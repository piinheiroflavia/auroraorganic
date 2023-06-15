//   import { useEffect , useState } from 'react'
//   import ImagemSkin1 from '../assets/imgs/skin1.png';
//   import ImagemSkin2 from '../assets/imgs/skin2.png';
//   import ImagemSkin3 from '../assets/imgs/skin3.png';
//   import ImagemSkin4 from '../assets/imgs/skin4.png';


//   export default function Contact() {
//     const [produtos, setProdutos] = useState ([
//       {
//         id: 1,
//         name: 'KIT ÓLEO DE ROSA MOSQUETA E BALM CB2',
//         Preco: 'R$70,00',
//         novoPreco: 'R$40,00',
//         imageSrc: ImagemSkin1,
//         imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//         carrinho: true,
//         favorite: false,
//       },
//       {
//         id: 2,
//         name: 'SOLUÇÃO ÁCIDO SALICÍLICO, REDUZIR CRAVOS E ESPINHAS',
//         Preco: 'R$80,00',
//         novoPreco: 'R$60,00',
//         imageSrc: ImagemSkin2,
//         imageAlt: 'Óleo Essencial Natural de Melaleuca 10mL',
//         carrinho: true,
//         favorite: false,
//       },
//       {
//         id: 3,
//         name: 'HIDRATANTE + VITAMINA C, ANTIOXIDANTE CORPORAL',
//         Preco: 'R$80,00',
//         novoPreco: 'R$50,00',
//         imageSrc: ImagemSkin3,
//         imageAlt: 'HIDRATANTE + VITAMINA C',
//         carrinho: true,
//         favorite: false,
//       },
//       {
//         id: 4,
//         name: 'KIT SUN COM BLENDING FACIAL E SÉRUM CONTROL DE OLEOSIDADE',
//         Preco: 'R$100,00',
//         novoPreco: 'R$90,00',
//         imageSrc: ImagemSkin4,
//         imageAlt: 'Óleo Essencial Natural de Melaleuca 10mL',
//         carrinho: true,
//         favorite: false,
//       },
//     ])

//     // Definindo o estado inicial para a lista de produtos no carrinho
//     const [produtosNoCarrinho, setProdutosNoCarrinho] = useState([]);
//     const [totalPreco, setTotalPreco] = useState(0);
    
//     // // Atualize o preço total somando o preço do produto
//     // useEffect(() => {
//     //   // Recalcula o total de preço sempre que a lista de produtos no carrinho mudar
//     //   const novoTotalPreco = produtosNoCarrinho.reduce((total, produto) => {
//     //     return total + parseFloat(produto.Preco.replace('R$', '').replace(',', '.'));
//     //   }, 0);
//     //   setTotalPreco(novoTotalPreco);
//     // }, [produtosNoCarrinho]);


//     const handleClickAdicionar = (id) => {
//       // Encontre o produto pelo ID
//       const produtoSelecionado = produtos.find((produto) => produto.id === id);
//       const jsonProdutosNoCarrinho = JSON.stringify(produtosNoCarrinho);


//       if (produtoSelecionado) {
//         setTimeout(() => {
//           setProdutosNoCarrinho((prevProdutos) => [...prevProdutos, produtoSelecionado]);
//         }, 3); // Aguarda 10 milissegundos antes de adicionar o produto ao carrinho        setTotalPreco((prevTotal) => prevTotal + parseFloat(produtoSelecionado.Preco.replace('R$', '').replace(',', '.')));

//         console.log(`Produto adicionado ao carrinho:\n ID: ${produtoSelecionado.id}\n Nome: ${produtoSelecionado.name}\n Preço: ${produtoSelecionado.Preco}`);
//         console.log(jsonProdutosNoCarrinho);
//         //console.log('Valor total R$ ' + totalPreco);
//       }

//     };


//     // // Função para adicionar um produto ao carrinho
//     // const handleClickAdicionar = (id) => {

//     // // Procura o produto com o ID correspondente na lista de produtos
//     // const produtoSelecionado = produtos.find((produto) => produto.id === id);
//     // // Converte a lista de produtos no carrinho em uma string JSON
//     // const jsonProdutosNoCarrinho = JSON.stringify(produtosNoCarrinho);
    

//     // // Verifica se o produto foi encontrado
//     // if (produtoSelecionado) {
//     //   // Adiciona o produto selecionado à lista de produtos no carrinho
//     //   setProdutosNoCarrinho([...produtosNoCarrinho, produtoSelecionado]);
//     //   console.log(`Produto adicionado ao carrinho:\n ID: ${produtoSelecionado.id}\n Nome: ${produtoSelecionado.name}\n Nome: ${produtoSelecionado.Preco} `);
//     //   console.log(jsonProdutosNoCarrinho);
//     // }
//     // };

//     const handleRemoverDoCarrinho = (id) => {
//       // filtra o produto com o ID correspondente na lista de produtos
//       const novoCarrinho = produtosNoCarrinho.filter((produto) => produto.id !== id);
//       const produtoRemovido = produtosNoCarrinho.find((produto) => produto.id === id);
//       if (produtoRemovido) {
//         setProdutosNoCarrinho(novoCarrinho);
//         setTotalPreco((prevTotal) => prevTotal - parseFloat(produtoRemovido.Preco.replace('R$', '').replace(',', '.')));
//         console.log(`Produto removido do carrinho:\nID: ${id}`);
//       }
//     };

//     return produtos.map((produto) => (
//       <div key={produto.id}><br></br>
//       <div>
//         <h3>{produto.name}</h3>
//         <p>{produto.Preco}</p>
//         <button onClick={() => handleClickAdicionar(produto.id)}>Adicionar</button><br></br>
//         <button onClick={() => handleRemoverDoCarrinho(produto.id)}>Remover</button><br></br>
//       </div>

      
//       </div>
//     ));

// }





import { useEffect, useState } from 'react';

export default function Contact() {
  const [produto, setProdutos] = useState([]);

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

  return (
    <div>
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
          </div>
          <br /><br />
        </div>
      ))}
    </div>
  );
}
