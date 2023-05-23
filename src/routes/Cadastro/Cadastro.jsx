import Footer from "../../components/Footer/Footer";
import FormNewsLetter from "../../components/FormNewsLetter/FormNewsLetter";
import Headers from "../../components/Header/Header";
<<<<<<< HEAD

const Cadastro = () => {
    return(
        <div>
            <Headers/>
=======
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
   // console.log(`email: ${data.email_cliente}`);
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




    return(
        <div>
            <Headers/>
            {message ? <p>{message}</p>:""}



>>>>>>> 8d889c6394564da19c11637305e36c4ac69974e8
            <h1 className="mt-12  text-2xl grid justify-items-center text-center tracking-tight text-gray-900 sm:text-4xl font-medium">Cadastro</h1>
        
        <div className="flex justify-center items-center w-full mt-4 mb-14">
            
            <div className="w-full justify-center items-center block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            
<<<<<<< HEAD
            <form>
                {/*nome */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <input type="email"className="peer block min-h-[auto] w-full rounded border-b-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" />
                    <label for="exampleInputEmail2" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Nome</label>
=======
            <form onSubmit={sendmsg} >
                {/*nome */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <input type="name"className="peer block min-h-[auto] w-full rounded border-b-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                     value={data.nome_cliente} onChange={valorinput}  id="nome_cliente" aria-describedby="emailHelp" placeholder="Enter email" />
                    <label for="email" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Nome</label>
>>>>>>> 8d889c6394564da19c11637305e36c4ac69974e8
                </div>
                {/* email */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <input type="email"className="peer block min-h-[auto] w-full rounded border-b-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
<<<<<<< HEAD
                        id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" />
                    <label for="exampleInputEmail2" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Email</label>
                </div>
                {/* Senha */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <input type="password" className="peer block min-h-[auto] w-full rounded border-b-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleInputPassword2" placeholder="senha" />
=======
                     value={data.email_cliente} onChange={valorinput}  id="email_cliente" aria-describedby="emailHelp" placeholder="Enter email" />
                    <label for="email" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Email</label>
                </div>
                {/* Senha */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <input value={data.senha_cliente} onChange={valorinput} type="password" className="peer block min-h-[auto] w-full rounded border-b-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="senha_cliente" placeholder="senha" />
>>>>>>> 8d889c6394564da19c11637305e36c4ac69974e8
                    <label for="exampleInputPassword2" className="m-1 bg-aurora-branco pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Senha</label>
                </div>
                {/* comfirmar senha */}
                <div className="relative mb-6" data-te-input-wrapper-init>
<<<<<<< HEAD
                    <input type="password" className="peer block min-h-[auto] w-full rounded border-b-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleInputPassword2" placeholder="senha" />
=======
                    <input  type="password" className="peer block min-h-[auto] w-full rounded border-b-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleInputPassword2" placeholder="senha" />
>>>>>>> 8d889c6394564da19c11637305e36c4ac69974e8
                    <label for="exampleInputPassword2" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Confirmar senha</label>
                </div>


                <div className="mb-6 flex items-center justify-between">        
                    <div className="block min-h-[1.5rem] pl-[1.5rem]">
                       
                    </div>
                    <a href=""className="text-primary transition duration-200 ease-in-out hover:text-primary-700 focus:text-primary-700 dark:text-primary-400"
                    >Esqueceu a senha?</a>
                </div>
                <button type="submit" className="bg-gray-950 dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded px-6 pb-2 pt-2.5 text-ls font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
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