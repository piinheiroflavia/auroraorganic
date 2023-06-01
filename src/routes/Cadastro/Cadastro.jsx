import Footer from "../../components/Footer/Footer";
import { Alert } from "@material-tailwind/react";
import Headers from "../../components/Header/Header";
import React, { useState } from 'react';
import axios from "axios";

const Cadastro = () => {

const [data, setData]= useState({
        nome_cliente : '',
        email_cliente : '',
        senha_cliente : ''
});

const [message,setMessage] = useState("");

const sendmsg = async (e) => {
    e.preventDefault();
    //console.log(`nome: ${data.nome_cliente}`);
    //console.log(`email: ${data.email_cliente}`);
   //console.log(`senha: ${data.senha_cliente}`);

    const  headers = {
        'headers': {
            'Content-Type': 'application/json'
        }
    };

    await axios.post('http://localhost:9080/cadastro', data, headers)
    .then((response) => {
      setMessage(response.data.message);
    
      setData({
        nome_cliente : '',
        email_cliente : '',
        senha_cliente : ''
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
    let msgAlert = document.getElementById('msgBoxAlert');
    let titleCad = document.getElementById("titleCad");
    msgAlert.style.display = " block"; 
    titleCad.style.marginTop = "0px"
}
const upLabelNome = () => {
    let labelNome = document.getElementById("labelNome");
    labelNome.style.pointerEvents = "none"
    labelNome.style.position = "absolute"
    labelNome.style.top = "0"
    labelNome.style.transform = "translateY(-65%)"
    labelNome.style.transition = " all 200ms ease-out"
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
const upLabelConfSenha = () => {
    let labelConfSenha = document.getElementById("labelConfSenha");
    labelConfSenha.style.pointerEvents = "none"
    labelConfSenha.style.position = "absolute"
    labelConfSenha.style.top = "0"
    labelConfSenha.style.transform = "translateY(-65%)"
    labelConfSenha.style.transition = " all 200ms ease-out"
}
const validaNome = () => {
    let nomeCli = document.getElementById("nome_cliente");

    if (nomeCli.value === '') {
        nomeCli.style.borderBottomColor = '#CA1C2A';
    } else {
        nomeCli.style.borderBottomColor = '#008000';
    }
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
let senha = document.getElementById("senha_cliente");
const validaSenha = () => {
    if (senha.value === '') {
        senha.style.borderBottomColor = '#CA1C2A';
    } else {
        senha.style.borderBottomColor = '#008000';
    }
}

let confSenha = document.getElementById("confSenha");
const validaConfSenha = () => {

    console.log(confSenha.value);

    if (confSenha.value === senha.value){
        confSenha.style.borderBottomColor = '#008000';
    }else {
        confSenha.style.borderBottomColor = '#CA1C2A';
    }
}



    return(
        <div>
            <Headers/>
            <React.Fragment>
                <Alert open={open} id='msgBoxAlert'  variant="gradient" className="w-3/12 m-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded bg-gray-300  text-gray-950" 
                >{message ? <p> {message} </p>:""}   
                </Alert>
            </React.Fragment>

            <h1 id="titleCad" className="mt-12  text-2xl grid justify-items-center text-center tracking-tight text-gray-900 sm:text-4xl font-medium">Cadastro</h1>
        
            <div className="flex justify-center items-center w-full mt-4 mb-14">
            
            <div className="w-full justify-center items-center block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            
            <form  onSubmit={sendmsg} >
                {/*nome */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <input 
                    type="name"
                    className="peer block min-h-[auto] w-full border-b-2 rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-700 dark:placeholder:text-gray-700 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
                    value={data.nome_cliente} 
                    onChange={valorinput}  
                    onClick={upLabelNome}
                    id="nome_cliente" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email" 
                    onKeyUp={(event) => validaNome(event.target.value)} />

                    <label 
                    id="labelNome"
                    for="exampleInputEmail2" 
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Nome</label>
                </div>
                {/* email */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <input 
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border-b-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    value={data.email_cliente} 
                    onChange={valorinput}  
                    onClick={upLabelEmail}
                    onKeyUp={(event) => validaEmail(event.target.value)} 
                    id="email_cliente" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email" />

                    <label 
                    id="labelEmail"
                    for="exampleInputEmail2" 
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Email</label>
                </div>

                {/* Senha */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <input  
                    type="password" 
                    className="peer block min-h-[auto] w-full rounded border-b-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" 
                    maxLength={6}
                    id="senha_cliente" placeholder="senha" 
                    value={data.senha_cliente} 
                    onChange={valorinput}
                    onClick={upLabelSenha}
                    onKeyUp={(event) => validaSenha(event.target.value)} />
                    <label 
                    id="labelSenha" for="exampleInputPassword2" className="m-1 bg-aurora-branco pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Senha</label>
                </div>
                {/* comfirmar senha */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <input 
                    type="password" 
                    className="peer block min-h-[auto] w-full rounded border-b-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" 
                    id="confSenha" 
                    maxLength={6}
                    placeholder=""
                    onClick={upLabelConfSenha}
                    onKeyUp={(event) => validaConfSenha(event.target.value)}/>

                    <label 
                    id="labelConfSenha"
                    for="exampleInputPassword2" 
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Confirmar senha</label>
                </div>


                <div className="mb-6 flex items-center justify-between">        
                    <div className="block min-h-[1.5rem] pl-[1.5rem]">
                       
                    </div>
                    <a href=""className="text-primary transition duration-200 ease-in-out hover:text-primary-700 focus:text-primary-700 dark:text-primary-400"
                    >Esqueceu a senha?</a>
                </div>
                <button type="submit" id='btnEntrar' onClick={acionarEnviar} className="flex w-full justify-center items-end relative mt-8 mb-2 p-2 bg-aurora-fundoEscuro font-medium text-gray-50 focus:outline-none focus:ring hover:bg-gray-950 hover:text-gray-50"
                data-te-ripple-init data-te-ripple-color="light"> Entrar</button>

                <p className="mt-6 text-center text-neutral-800 dark:text-neutral-200">já tem conta? 
                <a href="/auroraorganic/login" className="text-gray-950 font-semibold transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                > Login</a>
                </p>
            </form>
            </div>
        </div>

            <Footer/>
        </div>
    )
}

export default Cadastro;