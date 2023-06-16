//importando o icone
//import products from "../../../list.json"
import { ShoppingCartIcon, XMarkIcon} from "@heroicons/react/24/solid"
import {Carousel, initTE, } from "tw-elements";
initTE({ Carousel });
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ImagemArom1 from '../../assets/imgs/arom1.png';
import ImagemArom2 from '../../assets/imgs/arom2.png';
import ImagemArom3 from '../../assets/imgs/arom3.png';
import ImagemArom4 from '../../assets/imgs/arom4.png';


const Testando = () => {

    const [open, setOpen] = useState(false)
    const [produtosNoCarrinho, setProdutosNoCarrinho] = useState([]);

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

                            <h2>Produtos no Carrinho:</h2>
                                <ul>
                                    {produtosNoCarrinho.map((produto) => (
                                    <li key={produto.id}>
                                        {produto.name} - {produto.Preco}
                                    </li>
                                    ))}
                                </ul>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Total</p>
                            <p>R$??</p>
                          </div>
                          <div className="mt-6">
                            <a
                              href="#"
                              className=" flex max-w-lg w-full justify-center items-center relative mt-8 p-2 bg-aurora-fundoEscuro font-medium text-gray-50 hover:bg-orange-700 hover:text-gray-50"
                            >
                              Finalizar Pedido
                            </a>
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

export default Testando;