import {PlusIcon, XMarkIcon} from "@heroicons/react/24/solid"
import { Carousel } from "@material-tailwind/react";
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Fragment, useState, useEffect  } from 'react'
import { Rating } from "@material-tailwind/react";
import { baseUrl } from '../../configReq'; 

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
   
     const [open, setOpen] = useState(false)
     const [isMouseOver, setIsMouseOver] = useState(false);
     const [selectedProduct, setSelectedProduct] = useState(null);
     const [produtos, setProdutos] = useState([]);
     const [carrinho, setCarrinho] = useState([]);
     const clienteId = 1; // Id do cliente atual, ajuste conforme necessário

    // //passar o mouse
     function addCarrinhoCard(event) {
       setIsMouseOver(true);
      
     }
     function outCarrinhoCard() {
       setIsMouseOver(false);
      } 
    
    

    //CARDS PRODUCT
    useEffect(() => {
      const fetchProdutos = async () => {
        try {
          const response = await fetch(`${baseUrl}/produtos`);
          const data = await response.json();
          const produtosSkin = data.filter((produto) => produto.categoria === 'Arom');
          setProdutos(produtosSkin);
        } catch (error) {
          console.error('Erro ao obter os dados do banco:', error);
        }
      };

      fetchProdutos();
    }, []);



  //ACIONAR BUTTON
  const ClickAdicionar = async () => {
    try {
      const data = {
        id_cliente: 3,
        id_produto: selectedProduct.id_produto,
        quantidade: 1,
      };
  
      const response = await fetch(`${baseUrl}/carrinho/enviar-carrinho`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        // alert('Produto adicionado com sucesso');
  
        // Atualizar a lista de produtos no carrinho após a adição
        const carrinhoResponse = await fetch(`${baseUrl}/carrinho`);
        const carrinhoData = await carrinhoResponse.json();
        setCarrinho(carrinhoData);
  
        // Aguardar 1 segundo antes de atualizar a página
        setTimeout(() => {
          window.location.reload();
        }, 100);
      } else {
        console.error('Erro ao adicionar ao carrinho:', response.statusText);
      }
    } catch (error) {
      console.log('Erro ao adicionar o produto ao cliente:', error);
    }
  };

    return (
      <div className="bg-dark">
          
        <div className=" mx-auto max-w-2xl px-6 py-1 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">
      
          <div className=" grid grid-cols-1 gap-x-6 gap-y-13 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8  border-t border-gray-200 pt-2 sm:mt-16 sm:pt-12 lg:mx-0">
            {produtos.map((produto) => (
              <a key={produto.id_produto} href={produto.href} className="group py-4 px-6 rounded-lg bg-aurora-branco  shadow-lg " >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={produto.imageSrc}
                    alt={produto.imageAlt}
                    className="h-full w-full object-cover .hover:scale-110 object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700 uppercase">{produto.name_produto}</h3>

                {/* Itens da lista */}
                
                <ul class="flex my-2 justify-start">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="mr-1 mt-1 h-3 w-3 text-warning">
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="mr-1  mt-1 h-3 w-3 text-warning">
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="mr-1  mt-1 h-3 w-3 text-warning">
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="mr-1  mt-1 h-3 w-3 text-warning">
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="mr-1  mt-1 h-3 w-3 text-warning">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    </li>
                    <span className="mr-1 text-xs">23.000 avaliações</span>
                </ul>
                <p className="mt-1 text-xs font-medium text-gray-900"><s>R$ {produto.Preco}.00</s></p>
                <p className="mt-1 text-xl font-medium text-gray-900">R$ {produto.novoPreco}.00</p>
                {/* <Favorite produtos={produtos} /> */}
                {/* classificação com estrelas */}              
                <button
                  type="button"
                  className="flex justify-center w-full items-center relative mt-8 mb-2 p-2 bg-aurora-fundoEscuro font-medium text-gray-50 hover:bg-orange-700 hover:text-gray-50 "
                  onClick={() => {
                    setSelectedProduct(produto);
                    setOpen(true);
                  }}
                >Saber Mais</button>

              {/* MODAL CARD */}
                
              <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 hidden bg-aurora-bgFundoModal bg-opacity-75 transition-opacity md:block" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                        enterTo="opacity-100 translate-y-0 md:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 md:scale-100"
                        leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                      >
                        <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                          <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                          {/* <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                            {selectedProduct && selectedProduct.name_produto}
                          </Dialog.Title> */}
                            <button
                              type="button"
                              className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            <div className="grid w-full grid-cols-1 items-start gap-x-5 gap-y-6 sm:grid-cols-12 lg:gap-x-8 ">
                              <div className="aspect-h-2 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-2 lg:col-span-5">
                              <img src={selectedProduct && selectedProduct.imageSrc} alt={selectedProduct && selectedProduct.imageAlt} className="drop-shadow-md object-cover shadow-lg object-center" />
                              </div>
                              <div className="sm:col-span-8 lg:col-span-7">
                              <a key={selectedProduct && selectedProduct.id_produto} href={selectedProduct && selectedProduct.href}></a>
                              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12 uppercase">{selectedProduct && selectedProduct.name_produto}</h2>

                                <section aria-labelledby="information-heading" className="mt-2">
                                  {/* Itens da lista */}
                                  <h3 className="mt-4 text-sm text-gray-700">Descrição</h3>
                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                  Animi iste cupiditate esse reprehenderit ipsa.
                                  </p>
                                  <ul class="flex my-2 justify-start">
                                  <li>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      class="mr-1 mt-1 h-3 w-3 text-warning">
                                      <path
                                        fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd" />
                                    </svg>
                                  </li>
                                  <li>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      class="mr-1  mt-1 h-3 w-3 text-warning">
                                      <path
                                        fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd" />
                                    </svg>
                                  </li>
                                  <li>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      class="mr-1  mt-1 h-3 w-3 text-warning">
                                      <path
                                        fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd" />
                                    </svg>
                                  </li>
                                  <li>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      class="mr-1  mt-1 h-3 w-3 text-warning">
                                      <path
                                        fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd" />
                                    </svg>
                                  </li>
                                  <li>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="mr-1  mt-1 h-3 w-3 text-warning">
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                  </li>
                                  <span className="mr-1 text-xs">23.000 avaliações</span>
                                  </ul>
                                  <p className="mt-2 text-xs font-medium text-gray-900"><s>R$ {selectedProduct && selectedProduct.Preco}.00</s></p>
                                  <p className="text-2xl text-gray-900">R$ {selectedProduct && selectedProduct.novoPreco}.00</p>
                                  
                                  <a
                                  href={selectedProduct && selectedProduct.carrinho}
                                  id="addCarrinhoCards"
                                  onMouseOver={addCarrinhoCard}
                                  onMouseOut={outCarrinhoCard}
                                  onClick={() => ClickAdicionar(produto.id_produto)}
                                  className="flex justify-center items-end relative mt-8 mb-2 p-2 bg-aurora-fundoEscuro font-medium text-gray-50 hover:text-gray-50"
                                  >
                                  {isMouseOver ? <PlusIcon className="animate-pulse h-6 text-gray-50 hidden sm:block cursor-pointer" /> : 'Comprar'}
                                  </a>
                                  
                                  
                                
                                </section>
                              </div>
                            </div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition.Root>
              </a>
              
            ))}
          
          </div>
        </div>
      </div>
    )
  }
