//const { default: Header } = require("../../components/Header/Header")

import Header from "../../components/Header/Header";
import BannerTelaInical from "../../components/BannerInicial/BannerTelaInical";
import FormNewsLetter from "../../components/FormNewsLetter/FormNewsLetter";
import Footer from "../../components/Footer/Footer";
import InfoProduct from "../../components/InfoProduct/InfoProduct";


const SobreNos = () => {
    return (
      <>
        <Header/>
        <h2 className="mt-20 text-2xl grid justify-items-center text-center tracking-tight text-gray-900 sm:text-4xl font-medium">No Que Acreditamos</h2>
        <p className= "py-10 px-20 text-xl text-gray-900 justify-items-center text-center">Nosso propósito não se limita a ser apenas uma marca, mas sim a causar um impacto positivo por meio do autocuidado sustentável. Desde a obtenção de nossa matéria-prima até o descarte adequado de nossas embalagens após o uso, buscamos realizar todo o processo de maneira ecologicamente correta. Preservar o meio ambiente e contribuir com a natureza são nossas principais prioridades e esperamos contar com sua colaboração para cumprir essa missão!</p>

        <div className="flex flex-row  md:flex-row mt-24">
           <div className="flex flex-col w-3/5 pl-20">
              <p className="text-xl text-gray-900">A Aurora Organic está comprometida com a Agenda 2030 da Organização das Nações Unidas (ONU) que prever 17 Objetivos de Desenvolvimento Sustentável (ODS),<a href="https://brasil.un.org/pt-br/sdgs" className="font-semibold"> clique aqui</a>  para saber mais.</p>
              <p className="mt-8 text-xl text-gray-900"><strong>Objetivo 3: </strong>Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades;</p>
              <p className="mt-4 text-xl text-gray-900"><strong>Objetivo 12: </strong> Assegurar padrões de produção e de consumo sustentáveis.</p>
           </div>

           <div className="flex flex-row flex-wrap w-2/5">
               <img src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-3.svg"
               alt="agenda da onu 2023, imagem ods 3 saúde e bem estar"  className="rounded-lg w-48 h-48 m-10"/>
               <img src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-12.svg"
               alt="agenda da onu 2023, imagem ods 3 saúde e bem estar"  className="rounded-lg w-48 h-48 m-10"/>
           </div>
        </div>
        <br className="mb-40"></br>
        <InfoProduct/>
        <br className="mb-40"></br>
        <FormNewsLetter/>
        <Footer/>
      </>
    )
} 

export default SobreNos;