import Header from "../../components/Header/Header";
import BannerTelaInical from "../../components/BannerInicial/BannerTelaInical";
import FormNewsLetter from "../../components/FormNewsLetter/FormNewsLetter";
import CardVenda from "../../components/CardVendaSkin/CardVendaSkin"
import CardVendArom from "../../components/CardVendArom/CardVendArom"
import CardBlog from "../../components/CardBlog/CardBlog";
import Footer from "../../components/Footer/Footer";
import InfoProduct from "../../components/InfoProduct/InfoProduct";


const Home = () => {
    return (
      <>
        <BannerTelaInical/>
        <h2 className="mt-40 mb-20 text-2xl grid justify-items-center text-center tracking-tight text-gray-900 sm:text-4xl font-medium">VIDA DE ALTA PERFORMANCE</h2>
        <h2 className="ml-20 mt-40 mb-0 text-slate-950 text-transform: uppercase text-2xl font-semibold">Os Mais Procurados de Pele Momento</h2>
        <CardVenda/>
        <br></br><br></br>
        <h2 className="ml-20 mt-5 mb-0 text-slate-950 text-transform: uppercase text-2xl font-semibold">Os Aromas Mais Procurados do Momento</h2>
        <CardVendArom/>
        <br></br><br></br>
        <br></br><br></br>
        <InfoProduct/>
        <CardBlog/>

        <blockquote className="mb-20 text-3xl font-semibold italic text-center text-gray-900 sm:text-4xl">
        Mudando o mundo começando pelo  
          <span className="mx-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-700 relative inline-block">
            <span className="mx-1 relative text-white">  nosso  </span>
          </span> 
          dia a dia .
        </blockquote>
        <br className="mb-40"></br>

        <FormNewsLetter/>
        <Footer/>
        
      </>
    )
} 

export default Home;