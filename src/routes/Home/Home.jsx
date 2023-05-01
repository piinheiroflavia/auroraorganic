import Header from "../../components/Header/Header";
import BannerTelaInical from "../../components/BannerInicial/BannerTelaInical";
import Teste from "../../components/Teste/Testando";
import FormNewsLetter from "../../components/FormNewsLetter/FormNewsLetter";
import CardVenda from "../../components/CardVenda/CardVenda"
import CardBlog from "../../components/CardBlog/CardBlog";

const Home = () => {
    return (
      <>
        <Header/>
        <BannerTelaInical/>
        <h2 className="mt-40 mb-20 text-2xl grid justify-items-center text-center tracking-tight text-gray-900 sm:text-4xl font-semibold">VIDA SUSTENTÁVEL DE ALTA PERFORMANCE</h2>
        <CardVenda/>
        <br></br><br></br>
        <CardVenda/>
        <CardBlog/>

        <br></br><br></br>
        <blockquote className="mb-20 text-3xl font-semibold italic text-center text-gray-900 sm:text-4xl">
        Mudando o mundo começando pelo  
          <span className="mx-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="mx-1 relative text-white">  nosso  </span>
          </span> 
          dia a dia .
        </blockquote>
        <br></br><br></br>
        <FormNewsLetter/>
        
      </>
    )
} 

export default Home;