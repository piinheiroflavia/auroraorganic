//const { default: Header } = require("../../components/Header/Header")
import { Fragment, useState } from 'react'
import ImagemSkin1 from '../../assets/imgs/skin1.png';
import ImagemSkin2 from '../../assets/imgs/skin2.png';
import ImagemSkin3 from '../../assets/imgs/skin3.png';
import ImagemSkin4 from '../../assets/imgs/skin4.png';
import Footer from "../../components/Footer/Footer";
import FormNewsLetter from "../../components/FormNewsLetter/FormNewsLetter";
import Header from "../../components/Header/Header";
import CardVenda from "../../components/CardVendaSkin/CardVendaSkin";
//import Card from '../../components/CardVendaSkin/CardVendaSkin';
import Carrinho from '../../components/Teste/Testando';


const Skincare = () => {

  //produtos é um estado que armazena uma lista de produtos disponíveis na loja
  //produtosNoCarrinho é um estado que armazena os produtos adicionados ao carrinho.
  const [produtos, setProdutos] = useState ([
    {
      id: 1,
      name: 'KIT ÓLEO DE ROSA MOSQUETA E BALM CB2',
      Preco: 'R$70,00',
      novoPreco: 'R$40,00',
      imageSrc: ImagemSkin1,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      carrinho: true,
      favorite: false,
    },
    {
      id: 2,
      name: 'SOLUÇÃO ÁCIDO SALICÍLICO, REDUZIR CRAVOS E ESPINHAS',
      Preco: 'R$80,00',
      novoPreco: 'R$60,00',
      imageSrc: ImagemSkin2,
      imageAlt: 'Óleo Essencial Natural de Melaleuca 10mL',
      carrinho: true,
      favorite: false,
    },
    {
      id: 3,
      name: 'HIDRATANTE + VITAMINA C, ANTIOXIDANTE CORPORAL',
      Preco: 'R$80,00',
      novoPreco: 'R$50,00',
      imageSrc: ImagemSkin3,
      imageAlt: 'HIDRATANTE + VITAMINA C',
      carrinho: true,
      favorite: false,
    },
    {
      id: 4,
      name: 'KIT SUN COM BLENDING FACIAL E SÉRUM CONTROL DE OLEOSIDADE',
      Preco: 'R$100,00',
      novoPreco: 'R$90,00',
      imageSrc: ImagemSkin4,
      imageAlt: 'Óleo Essencial Natural de Melaleuca 10mL',
      carrinho: true,
      favorite: false,
    },
  ])


  const [produtosNoCarrinho, setProdutosNoCarrinho] = useState([]);

  //A função adicionarAoCarrinho é definida para adicionar um produto ao carrinho. Essa função recebe o id do 
  //produto como argumento e verifica se o produto 
  //existe na lista de produtos. Se existir, adiciona o produto ao estado produtosNoCarrinho utilizando o setProdutosNoCarrinho.
  const adicionarAoCarrinho = (produtoId) => {
    const produto = produtos.find((p) => p.id === produtoId);

      if (produto) {
        setProdutosNoCarrinho((prevProdutosNoCarrinho) => [
          ...prevProdutosNoCarrinho,
          produto,
        ]);
      }
    };
    // A função removerDoCarrinho é definida para remover um produto do carrinho. Essa função recebe o id do produto como argumento e filtra a lista de produtosNoCarrinho para remover o produto com o id correspondente.
    const removerDoCarrinho = (produtoId) => {
      setProdutosNoCarrinho((prevProdutosNoCarrinho) =>
        prevProdutosNoCarrinho.filter((produto) => produto.id !== produtoId)
      );
    };

    return (  
      <>
        <Header/>
        <blockquote className="text-3xl font-semibold italic text-center text-gray-900 sm:text-4xl">
        
          <span className="mt-24 mx-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-aurora-fundoEscuro relative inline-block">
            <span className="mx-1 relative text-white">SkinCares </span>
          </span>         
        </blockquote>
            <h1>Minha Loja</h1>

          <div>
            <h2>Produtos Disponíveis:</h2>
            {produtos.map((produto) => (
              <CardVenda
                key={produto.id}
                produto={produto}
                adicionarAoCarrinho={adicionarAoCarrinho}
              />
            ))}
          </div>

        <Carrinho produtosNoCarrinho={produtosNoCarrinho} removerDoCarrinho={removerDoCarrinho}/>
        <br className="mb-40"></br>
        
        <FormNewsLetter/>   
        <Footer/>
      </>
    )
} 

export default Skincare;