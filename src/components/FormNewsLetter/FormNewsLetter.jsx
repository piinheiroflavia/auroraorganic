
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
    return <div className="flex flex-col md:flex-row mt-24 overflow-hidden bg-aurora-fundoEscuro justify-around">
                <div class="flex flex-col w-full md:w-1/2 px-20 ">
                    <form onsubmit={safeSubmit} className="flex flex-col px-14 w-full m-6  items-center justify-center ">
                        <input type="text" placeholder=" digite seu nome" className="py-2 m-3  w-full  dark:bg-dark-200 outline-none placeholder:text-gray-400 placeholder:dark:text-gray-600 placeholder:text-xs  focus:border-2 focus:border-alura-200 focus:dark:border-alura-100 invalid:focus:border-2  invalid:focus:border-red-600 invalid:focus:dark:border-2 invalid:focus:dark:border-red-600 "></input>
                        <input type="email" placeholder=" digite seu email"  className=" py-2 m-3  w-full dark:bg-dark-200 outline-none placeholder:text-gray-400 placeholder:dark:text-gray-600 placeholder:text-xs  focus:border-2 focus:border-alura-200 focus:dark:border-alura-100 invalid:focus:border-2  invalid:focus:border-red-600 invalid:focus:dark:border-2 invalid:focus:dark:border-red-600 "></input>
                        <button type="submit" className="flex py-1 px-5 m-2  max-w-sm  text-gray-50  bg-orange-800 hover:bg-orange-700 active:bg-orange-900 focus:outline-none focus:ring focus:ring-pink-300 uppercase justify-center items-center "> Assinar</button>
                    </form>
                </div>
                <div class="flex flex-col w-full md:w-1/2 pr-20 " >
                    <p class= "m-6 uppercase tracking-wide text-xl text-aurora-tomNeutro font-semibold ">Assine nossa Newsletter!</p>
                    <p class="mt-2 text-gray-50 text-xl">Receba conteúdos, notícias e promoções direto na sua caixa de entrada!</p>
                </div>
            </div>

    
}

export default FormNewsLetter; 


                        