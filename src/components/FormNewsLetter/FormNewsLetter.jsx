
const FormNewsLetter = ({onsubmit}) => {
    const safeSubmit = event => {
        //vai previnir eventos colaterais
        event.preventDefault()
        event.stopPropagation()

        //target é uma lista 
        const name = event.target[0].value
        const email =  event.target[1].value
        onsubmit ({name, email})
    }
    return <div class="flex p-0 col-auto w-full  justify-around overflow-hidden bg-aurora-fundoEscuro">
                <div class="flex  p-0">
                    <form onsubmit={safeSubmit} className="flex flex-col m-6  items-center justify-center ">
                        <input type="text" placeholder="Insira seu nome" className="py-2 m-3  pl-2 w-full  dark:bg-dark-200 outline-none placeholder:text-gray-400 placeholder:dark:text-gray-600 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-alura-200 focus:dark:border-alura-100 invalid:focus:border-2  invalid:focus:border-red-600 invalid:focus:dark:border-2 invalid:focus:dark:border-red-600 "></input>
                        <input type="email" placeholder="Insira seu email"  className=" py-2 m-3  pl-2 w-full dark:bg-dark-200 outline-none placeholder:text-gray-400 placeholder:dark:text-gray-600 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-alura-200 focus:dark:border-alura-100 invalid:focus:border-2  invalid:focus:border-red-600 invalid:focus:dark:border-2 invalid:focus:dark:border-red-600 "></input>
                        <button type="submit" className="py-1 px-5 m-2 w-50  max-w-smbg-pink-500 text-gray-50  bg-orange-800 hover:bg-orange-700 active:bg-orange-900 focus:outline-none focus:ring focus:ring-pink-300 uppercase "> Assinar</button>
                    </form>
                </div>
                <div class="m-6 p-2">
                    <div class="uppercase tracking-wide text-xl text-aurora-tomNeutro font-semibold">Assine nossa Newsletter!</div>
                    <p class="mt-2 text-gray-50 text-xl">Receba conteúdos, notícias e promoções direto na sua caixa de entrada!</p>
                </div>
            </div>

    
}

export default FormNewsLetter; 