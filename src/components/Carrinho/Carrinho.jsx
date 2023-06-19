//importando o icone
//import products from "../../../list.json"
import { ShoppingCartIcon, XMarkIcon} from "@heroicons/react/24/solid"
import {Carousel, initTE, } from "tw-elements";
initTE({ Carousel });
import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios';
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { baseUrl } from '../../../src/configReq'; 


const Carrinho = () => {
  const [openM, setOpenM] = useState(false);
  const [open, setOpen] = useState(false);
  const [carShop, setCarShop] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  useEffect(() => {
    const fetchProdutosNoCarrinho = async () => {
      try {
        const response = await axios.get(`${baseUrl}/carrinho`);
        const data = response.data;
        console.log('Dados do carrinho:', data);
        setCarShop(data);
      } catch (error) {
        console.error('Erro ao obter os produtos do carrinho:', error);
      }
    };

    fetchProdutosNoCarrinho();
  }, []);

  useEffect(() => {
    // Calcular o valor total dos produtos no carrinho
    const calcularTotal = () => {
      let valorTotal = 0;
      for (const produto of carShop) {
        valorTotal += produto.produto.novoPreco;
      }
      setTotal(valorTotal);
    };

    calcularTotal();
  }, [carShop]);


  const removerProduto = async (id_produto) => {
    try {
      const response = await axios.delete(`${baseUrl}/carrinho/remover-carrinho/${id_produto}`);
  
      if (response.status === 200) {
        console.log('Produto removido com sucesso');
        console.log("ID do carrinho a ser removido:", id_produto);
        const { id_produto } = response.data;
  
        // Atualizar a lista de produtos no carrinho após a remoção
        const updatedCarShop = carShop.filter((produto) => produto.id !== id_produto);
        setCarShop(updatedCarShop);
  
        // Remover o ID do produto do estado selectedProduct, se estiver selecionado
        if (selectedProduct && selectedProduct.id === id_produto) {
          setSelectedProduct(null);
        } 
        // Recalcular a soma dos valores
        const total = updatedCarShop.reduce((accumulator, item) => accumulator + item.valor_total, 0);
        setTotal(total);
      } else {
        console.error('Erro ao remover do carrinho:', response.statusText);
      }
    } catch (error) {
      console.log('Erro ao remover o produto do carrinho:', error);
    }
  };
  
  
    return(
        <div>
            {/* CARRINHO   */}
          <button type="button" className="rounded-md text-gray-300 m-3 hover:text-white "
            onClick={() => setOpen(true)}>
              <ShoppingCartIcon  className="h-7 text-gray-100 hidden sm:block cursor-pointer" aria-hidden="true"/>
          </button>
          <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                          <div className="flex items-start justify-between">
                          <Dialog.Title className="text-xl font-semibold leading-6 text-gray-900">
                            <div className="flex justify-start items-center">
                              <div>
                                Carrinho 
                              </div>
                              <div>
                                <ShoppingCartIcon  className="h-5  text-gray-900 hidden sm:block cursor-pointer" aria-hidden="true"/>
                              </div>
                            </div>
                          </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => setOpen(false)}
                              > 
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                              </button>
                            </div>
                          </div>

                          <div className="mt-8">
                             {/* CORPO DO CARRINHO */}
                            <div className="flow-root">
                              <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {carShop.map((produto, index) => (
                                  <div key={`${produto.id_produto}-${index}`} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                       <img
                                        src={produto.produto.imageSrc}
                                        className="h-full w-full object-cover object-center"
                                      /> 
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a>{produto.produto.name_produto}</a>
                                          </h3>

                                        </div>
                                        {/* <p className="mt-1 text-sm text-gray-500">{produto.produto.categoria}</p> */}
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500">Valor: R${produto.produto.novoPreco},00</p>
                                  
                                        <div className="flex">
                                          <button
                                            className="font-medium text-gray-900 hover:text-indigo-900"
                                            type="submit"
                                            onClick={() => removerProduto(produto.id_produto)}
                                          >
                                            Remover
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                          <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Total:</p>

                            <p>R${total},00</p>
                          </div>
                          <div className="mt-6">
                          <button
                  type="button"
                  className="flex justify-center w-full items-center relative mt-8 mb-2 p-2 bg-aurora-fundoEscuro font-medium text-gray-50 hover:bg-orange-700 hover:text-gray-50 "
                  onClick={() => {
                    setOpenM(true);
                  }}
                >Finalizar Compra</button>
                            
                {/* MODAL CARD */}
                  
                <Transition.Root show={openM} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={setOpenM} >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 hidden shadow-lg shadow-indigo-800/40 bg-aurora-bgFundoModalEscuro bg-opacity-75 transition-opacity md:block" />
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
                          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="bg-white px-8 pb-9 pt-8 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-20 sm:w-20">
                            <CheckCircleIcon className="h-16 w-16 text-green-600" aria-hidden="true" />
                          </div>
                          <div className="mt-3 text-center sm:ml-5 sm:mt-0 sm:text-left">
                            <Dialog.Title as="h3" className="text-xl font-semibold leading-16 text-gray-900">
                              Compra Finalizada Com Sucesso
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-base text-gray-500">
                              Seu pedido foi recebido e está sendo processado com cuidado. 
                              Valorizamos sua confiança em nós e faremos o possível para garantir sua satisfação. 
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
              </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition.Root>
                          </div>
                          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p> ou <button type="button" className="font-medium text-gray-900 hover:text-indigo-900"
                                onClick={() => setOpen(false)}
                              > continuar comprando
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>     
        </div>
    )
}

export default Carrinho;