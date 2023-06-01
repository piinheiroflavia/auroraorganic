import Header from "../../components/Header/Header";
import BannerTelaInical from "../../components/BannerInicial/BannerTelaInical";
import FormNewsLetter from "../../components/FormNewsLetter/FormNewsLetter";
import CardVenda from "../../components/CardVendaSkin/CardVendaSkin"
import CardVendArom from "../../components/CardVendArom/CardVendArom"
import CardBlog from "../../components/CardBlog/CardBlog";
import Footer from "../../components/Footer/Footer";
import InfoProduct from "../../components/InfoProduct/InfoProduct";
import {ArrowSmallRightIcon} from "@heroicons/react/24/solid"

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

        <div className="">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sobre nós</h2>
            <p className="mt-9 text-gray-500">
            Nosso propósito não se limita a ser apenas uma marca, mas sim a causar um impacto positivo por meio do autocuidado sustentável. Desde a obtenção de nossa matéria-prima até o descarte adequado de nossas embalagens após o uso, buscamos realizar todo o processo de maneira ecologicamente correta..
            </p>
            <div className="flex mt-8 justify-start items-center">
              <div>
              <a  href="/auroraorganic/sobre-nos" className=" text-gray-700  py-1.5 font-semibold hover:text-orange-700" >Saber Mais</a>
              </div>
              <div>
                <ArrowSmallRightIcon className="h-4 mx-2  text-gray-700 hover:text-orange-700 hidden sm:block cursor-pointer"aria-hidden="true"></ArrowSmallRightIcon>
              </div>
            </div>
            
            <dl className="mt-7 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-semibold  text-gray-900">PRODUTO NATURAL</dt>
                  <dd className="mt-2 text-base text-gray-500">Sem químicas agressivas, com matérias-primas de origem orgânica e natural</dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-semibold text-gray-900">EMBALAGEM RECICLÁVEL</dt>
                  <dd className="mt-2 text-base text-gray-500">Produto biodegradáveis com embalagens recicladas e recicláveis</dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-semibold text-gray-900">SEM INGREDIENTES TÓXICOS</dt>
                  <dd className="mt-2 text-base text-gray-500">Livre de sulafato, parabenos, alumínio, corante artificias, óleos minerais, silicones e petrolatos</dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-semibold text-gray-900">CRUELTY-FREE</dt>
                  <dd className="mt-2 text-base text-gray-500">Sem testes em animais em nenhuma etapa de seu processo</dd>
                </div>
            </dl>
          </div>
          <div className="grid p-20 grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://img.freepik.com/fotos-gratis/design-elegante-de-banner-de-cuidados-com-a-pele_23-2149480188.jpg?w=740&t=st=1684946214~exp=1684946814~hmac=75a5e761e8dd73466b7ba089f0a9128e094842ed7fc43b882c2e3e137d399c6c"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="-skew-y-3 drop-shadow-md rounded-lg mt-20 bg-gray-100"
            />
            <img
              src="https://img.freepik.com/fotos-gratis/retrato-de-uma-menina-em-um-fundo-da-selva_72229-1167.jpg?w=360&t=st=1684946301~exp=1684946901~hmac=6161ba6e7499f8b51095f31a6cc693d1243a1b769e26333d1ae75aadd2768599"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className=" drop-shadow-md rounded-lg bg-gray-100"
            />
            <img
              src="https://img.freepik.com/fotos-gratis/retrato-de-uma-menina-em-um-fundo-da-selva_72229-1167.jpg?w=360&t=st=1684946301~exp=1684946901~hmac=6161ba6e7499f8b51095f31a6cc693d1243a1b769e26333d1ae75aadd2768599"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="drop-shadow-md rounded-lg bg-gray-100"
            />
            <img
              src="https://img.freepik.com/fotos-gratis/design-elegante-de-banner-de-cuidados-com-a-pele_23-2149480188.jpg?w=740&t=st=1684946214~exp=1684946814~hmac=75a5e761e8dd73466b7ba089f0a9128e094842ed7fc43b882c2e3e137d399c6c"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="skew-y-3 drop-shadow-md rounded-lg mt-9 bg-gray-100"
            />
          </div>
        </div>
      </div>
      
        <blockquote className="mb-20 text-3xl font-semibold italic text-center text-gray-900 sm:text-4xl">
        Mudando o mundo começando pelo  
          <span className="mx-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-700 relative inline-block">
            <span className="mx-1 relative text-white">  nosso  </span>
          </span> 
          dia a dia .
        </blockquote>
        <br className="mb-24"></br>
        <div className=" mx-auto max-w-2xl lg:mx-0">
          <h2 className="flex justify-center  text-3xl tracking-tight text-gray-950 sm:text-4xl font-medium">Nosso Blog</h2>
        </div>
        <CardBlog />
        


        <FormNewsLetter/>
        <Footer/>
        
      </>
    )
} 

export default Home;