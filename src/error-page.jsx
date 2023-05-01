import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Essa página não existe.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}



// Observe que useRouteErrorfornece o erro que foi lançado. Quando o usuário navegar para rotas que não existem, 
//você receberá uma resposta de erro com "Not Found" statusText. Veremos alguns outros erros mais adiante no tutorial e os discutiremos mais.

// Por enquanto, basta saber que praticamente todos os seus erros agora serão tratados por esta página, 
//em vez de spinners infinitos, páginas que não respondem ou telas em branco 