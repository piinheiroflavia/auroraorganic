import { useRouteError } from "react-router-dom";
import imagemLogo from "../src/assets/imgs/404.jpg"


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className=" flex h-screen bg-aurora-fundoErro justify-center items-center">
      <div className=" "  >
        
        <img src={imagemLogo} alt=""  className="flex "/>  
      </div>
      
    </div>
  );
}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Observe que useRouteErrorfornece o erro que foi lançado. Quando o usuário navegar para rotas que não existem, 
//você receberá uma resposta de erro com "Not Found" statusText.
// Por enquanto, basta saber que praticamente todos os seus erros agora serão tratados por esta página, 
//em vez de spinners infinitos, páginas que não respondem ou telas em branco 
