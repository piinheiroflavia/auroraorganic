import { useRouteError } from "react-router-dom";
// var React = require('react');
// var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className=" flex h-screen bg-aurora-fundoErro justify-center items-center">
      <div className=" "  >
        <h1 className="flex pb-1 justify-center items-center text-2xl text-aurora-fontErroRosa font-bold">NOT FOUND</h1>
        {/* <img src={imagemLogo} alt=""  className="flex h-96 "/> */}
      </div>
      {/* <div>
      <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="assets/4.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
      </div> */}
    </div>
  );
}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Observe que useRouteErrorfornece o erro que foi lançado. Quando o usuário navegar para rotas que não existem, 
//você receberá uma resposta de erro com "Not Found" statusText.
// Por enquanto, basta saber que praticamente todos os seus erros agora serão tratados por esta página, 
//em vez de spinners infinitos, páginas que não respondem ou telas em branco 