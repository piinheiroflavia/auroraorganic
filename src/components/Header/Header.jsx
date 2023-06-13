//importando o icone
import {UserCircleIcon, Bars3Icon} from "@heroicons/react/24/solid"
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import imagemLogo from "../../assets/imgs/logoA.jpg"
import {Carousel, initTE, } from "tw-elements";
initTE({ Carousel });
import { Menu } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {useEffect} from "react";
import Navbar from "../Navbar/Navbar";
//import { setItem } from "localforage";
import Carrinho from "../Carrinho/Carrinho";
import Teste from "../Teste/Testando"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
} 


  const Header = () => {
    const [open, setOpen] = useState(true)

      useEffect(() => {
        const navb = document.getElementById('navb');
        const navbar = document.getElementById('navbar1');
        const responsNavbar = document.getElementById('responsNavbar');

        if (navbar) {
          function isScreenSizeLessThan538() {
            return window.innerWidth < 678;
          }
    
          if (isScreenSizeLessThan538()) {
            console.log("Tela menor que 538 pixels.");
            navb.style.justifyContent = "start"
            navbar.style.display = "none";
            console.log("esconder");

          } else {
            console.log("Tela maior ou igual a 538 pixels.");
            console.log("mostrar");
            responsNavbar.style.display = "none"
            navbar.style.display = " ";
          }
        }
      }, []);
      
      // function removerProdutoDoCarrinho(productId) {
      //   const novoCarrinho = carrinho.filter((product) => product.id !== productId);
      //   setCarrinho(novoCarrinho);
      // }
      
      const [userEmail, setUserEmail] = useState('');

      //pega o valor que esta armazenado no localstorage
      useEffect(() => {
        const email = localStorage.getItem('email');
        setUserEmail(email || '');
      }, []);
      
    return <div >
        <div className="flex h-5  bg-aurora-fundoBody mx-auto max-w-7xl items-center justify-center p-3 lg:px-8 ">
             <p className="text-xs sm:text-base">20% OFF + frete grátis acima de R$99 com o cupom PRIMEIRACOMPRA</p>
        </div>
        <div id="navb" className="flex h-15 bg-aurora-fundoEscuro dark:bg-aurora-100 justify-between items-center ">
            <a  href="/auroraorganic"><img src={imagemLogo} alt="Banner" className="flex h-16 m-1"/></a>
            <div className="flex ">
            <Menu as="div" className="relative inline-block text-left">
            {/* <Navbar/> */}
 
                {/* adicinar o nome do usuário */}
                {/* {user ? <p>Olá {user}</p>:""} */}
                <Menu.Button className="inline-flex w-full ">
                  <UserCircleIcon className="h-7  mt-3 text-gray-100 hidden sm:block cursor-pointer"aria-hidden="true"></UserCircleIcon>
                  <p className="text-gray-50 ml-2 mr-1 mt-3">{userEmail}</p>
                </Menu.Button>

          {/* DROPDOWN */}
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/auroraorganic/login"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Login
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/auroraorganic/cadastro"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Cadastre-se
                        </a>
                      )}
                    </Menu.Item>
                    
                  </div>
                </Menu.Items>
              </Transition>              
            </Menu>
          
          {/* CARRINHO   */}
          <Carrinho />
          <Teste/>
          
             
        <Bars3Icon id="responsNavbar"  className="h-8 ms-16 text-gray-50 hidden sm:block cursor-pointer"aria-hidden="true"><Navbar></Navbar></Bars3Icon>                        
          </div>
        </div>

        <div  className="drop-shadow-md bg-aurora-fundoEscuro px-4  ">
          <div id="navbar1" className=" flex h-8 justify-center items-center">
            <a href="/auroraorganic" className="text-gray-100 text-base mx-5 sm:block"> Home </a>
            <a href="/auroraorganic/skincare" className="text-gray-100 text-base mx-5 sm:block"> SkinCare </a>
            <a href="/auroraorganic/aromaterapia" className="text-gray-100 text-base mx-5 sm:block"> Aromaterapia </a>
            <a href="/auroraorganic/blog" className="text-gray-100 text-base mx-5 sm:block"> Blog </a>
            <a href="/auroraorganic/sobre-nos" className="text-gray-100 text-base mx-5 sm:block"> Leia antes de comprar </a> 
            <ToggleTheme/>                    
          </div>          
        </div>        
    </div>
    
    
}

export default Header;