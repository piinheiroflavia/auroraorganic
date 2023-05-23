import { useRouteError } from "react-router-dom";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className=" flex h-screen bg-aurora-fundoErro justify-center items-center">
      <div className=" "  >
        <h1 className="flex pb-1 justify-center items-center text-2xl text-aurora-fontErroRosa font-bold">NOT FOUND</h1>
        {/* <img src={imagemLogo} alt=""  className="flex h-96 "/> */}

        
      </div>
      
    </div>
  );
}



// Observe que useRouteErrorfornece o erro que foi lançado. Quando o usuário navegar para rotas que não existem, 
//você receberá uma resposta de erro com "Not Found" statusText.
// Por enquanto, basta saber que praticamente todos os seus erros agora serão tratados por esta página, 
//em vez de spinners infinitos, páginas que não respondem ou telas em branco 