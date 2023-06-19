import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import React, { useState } from 'react';
import { Alert } from "@material-tailwind/react";
import axios from "axios";
import { baseUrl } from '../../configReq'; 

// Initialization for ES Users
import {Ripple,Input,initTE,} from "tw-elements";
initTE({ Ripple, Input });

const Login = () => {
    

const [data, setData]= useState({
        email_cliente : '',
        senha_cliente : ''
});

const [message,setMessage] = useState("");

const sendmsg = async (e) => {
  e.preventDefault();
  const headers = {
    'Content-Type': 'application/json'
  };

  await axios.post(`${baseUrl}/login`, data, headers)
    .then((response) => {
      setMessage(response.data.message);

      if (response.data.clienteEncontrado) {
        // Chamar a rota de API para obter o valor da coluna nome
        axios.get(`${baseUrl}/obter-nome/${response.data.email_cliente}`)
          .then((response) => {
            const nome = response.data.nome;

            // Armazenar o nome no LocalStorage somente se estiver disponível
            if (nome) {
              localStorage.setItem('Nome', nome);
            } else {
              localStorage.removeItem('Nome');
            }

            // Armazenar o email no LocalStorage
            localStorage.setItem('User', response.data.email_cliente);

            // Redirecionar para a outra página
            window.location.href = `${baseUrl}/auroraorganic`;

          })
          .catch((err) => {
            console.log(err);
          });

      } else {
        localStorage.removeItem('User');
        localStorage.removeItem('Nome');
      }

      setData({
        email_cliente: '',
        senha_cliente: ''
      });

    })
    .catch((err) => {
      setMessage(err.response.data.message);
    });
};

const valorinput = e => {  
        setData({...data,[e.target.id]: e.target.value});   
};


//alert mensagem do banco
const acionarEnviar = () => { 

    localStorage.setItem('User', data.email_cliente);    
    let msgAlert = document.getElementById('msgBoxAlert');
    let titleCad = document.getElementById("titleCad");
    msgAlert.style.display = " block"; 
    msgAlert.style.backgroundColor = "#d8b4fe"
    titleCad.style.marginTop = "0px"

  //   setTimeout(() => {
  //     window.location.href = "http://localhost:5173/auroraorganic";
  // }, 2000);
    
}
//valid label email
const upLabelEmail = () => {
    let labelEmail = document.getElementById("labelEmail");
    labelEmail.style.pointerEvents = "none"
    labelEmail.style.position = "absolute"
    labelEmail.style.top = "0"
    labelEmail.style.transform = "translateY(-65%)"
    labelEmail.style.transition = " all 200ms ease-out"
}
//valid label senha
const upLabelSenha = () => {
    let labelSenha = document.getElementById("labelSenha");
    labelSenha.style.pointerEvents = "none"
    labelSenha.style.position = "absolute"
    labelSenha.style.top = "0"
    labelSenha.style.transform = "translateY(-65%)"
    labelSenha.style.transition = " all 200ms ease-out"
}
const validaEmail = (emaill) => {
    let email = document.getElementById("email_cliente");
    
    let ev = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    if (email.value === '') {
        email.style.borderBottomColor = '#CA1C2A';


    } else if (!ev.test(emaill)) {
        email.style.borderBottomColor = '#CA1C2A';


    } else {
        email.style.borderBottomColor = '#008000';


    }
}
const validaSenha = () => {
    let senha = document.getElementById("senha_cliente");

    if (senha.value === '') {
        senha.style.borderBottomColor = '#CA1C2A';

    } else {
        senha.style.borderBottomColor = '#008000';
    }
}


    return( 
        
    <div>
        <Header/>
        {/* alert com a resposta do banco  */}
        <React.Fragment>
            <Alert open={open} id='msgBoxAlert'  variant="gradient" className="transition duration-700 ease-in-out w-3/12 m-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded bg-gray-300  text-gray-950" 
            >{message ? <p> {message} </p>:""}   
            </Alert>
        </React.Fragment>

        <h1 id="titleCad" className="mt-12  text-2xl grid justify-items-center text-center tracking-tight text-gray-900 sm:text-4xl font-medium">Login do Cliente</h1>
        <p className="mt-2 grid justify-items-center text-center tracking-tight  text-gray-600">Acesse agora a sua conta para acompanhar <br></br> seus pedidos, ver suas ofertas exclusivas e muito mais.</p>
        <div className="flex justify-center items-center w-full mt-4 mb-14">
            
            <div className="w-full justify-center items-center block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            
            <form onSubmit={sendmsg} >
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <input type="email" className="peer block min-h-[auto] w-full border-b-2 rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-700 dark:placeholder:text-gray-700 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
                    value={data.email_cliente}
                    onClick={upLabelEmail}
                    onChange={valorinput}
                    onKeyUp={(event) => validaEmail(event.target.value)}
                    id="email_cliente"
                    aria-describedby="emailHelp" />
        
                    <label 
                    id="labelEmail" 
                    for="exampleInputEmail2" 
                    className="pointer-events-none absolute left-3 top-0 mb-0 
                    max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary focus:outline-none">Email</label>     
                </div>
    
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <input type="password" className="peer block min-h-[auto] w-full rounded border-b-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                         value={data.senha_cliente} 
                         onClick={upLabelSenha}
                         onChange={valorinput}  
                         onKeyUp={(event) => validaSenha(event.target.value)}
                         id="senha_cliente" 
                         placeholder="Password" />
                    
                    <label for="exampleInputPassword2" 
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >Senha</label> 
                </div>

                <div className="mb-6 flex items-center justify-between">        
                    <div className="block min-h-[1.5rem] pl-[1.5rem]">        
                    </div>
                    <a href="" className="text-primary transition duration-200 ease-in-out hover:text-primary-700 focus:text-primary-700 dark:text-primary-400">Esqueceu a senha?</a>
                </div>
                <button 
                type="submit" 
                id='btnEntrar' 
                onClick={acionarEnviar} 
                className="flex w-full justify-center items-end relative mt-8 mb-2 p-2 bg-aurora-fundoEscuro font-medium text-gray-50 focus:outline-none focus:ring hover:bg-gray-950 hover:text-gray-50"
                data-te-ripple-init data-te-ripple-color="light"> Entrar</button>

                <p className="mt-6 text-center text-neutral-800 dark:text-neutral-200">não tem conta? 
                <a href="/auroraorganic/cadastro" className="text-gray-950 font-semibold transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                > Cadastre-se</a>
                </p>
            </form>
            </div>
        </div>
        
        <hr className=" border-gray-300"></hr>
        <Footer />

    </div>
        
    )
}


export default Login;