
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
    return <div class=" w-full overflow-hidden bg-aurora-fundoEscuro">
            <div class="md:flex">
                <form onsubmit={safeSubmit} className="flex flex-col m-5  items-center justify-center ">
                    <input type="text" placeholder="Insira seu nome" className="btn-newsletter"></input>
                    <input type="email" placeholder="Insira seu email"  className="py-2 m-5  pl-2 w-full max-w-lg dark:bg-dark-200 outline-none placeholder:text-gray-400 placeholder:dark:text-gray-600 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-alura-200 focus:dark:border-alura-100 invalid:focus:border-2  invalid:focus:border-red-400 invalid:focus:dark:border-2 invalid:focus:dark:border-red-400 "></input>
                    <button type="submit" className="py-1 px-5 m-5 w-50 max-w-smbg-pink-500 text-gray-50  bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300 uppercase "> Assinar</button>
                </form>
            <div class="p-6">
                <div class="uppercase tracking-wide text-sm text-pink-500 font-semibold">Assine nossa Newsletter!</div>

                <p class="mt-2 text-gray-50">Receba conteúdos, notícias e promoções direto na sua caixa de entrada!</p>
            </div>
        </div>
        </div>

    
}

export default FormNewsLetter; 