const InfoProduct = () =>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-14 p-5 border-solid border-2 border-gray-900">
        <div className="relative mb-12 px-3 lg:mb-0">
            <div className="mb-2 flex justify-center">
            <span className="text-primary">
                
            </span>
            </div>
            <h5 className="mb-6 font-bold text-primary text-center">PRODUTO NATURAL</h5>
            <h6 className="mx-9 font-normal dark:text-neutral-50 text-center">Sem químicas agressivas, com matérias-primas de origem orgânica e natural</h6>
            <div
            className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
        </div>
        <div className="relative mb-12 px-3 lg:mb-0">
            <div className="mb-2 flex justify-center">
            <span className="text-primary">
                
            </span>
            </div>
            <h5 className="mb-6 font-bold text-primary text-center" >EMBALAGEM RECICLÁVEL</h5>
            <h6 className="mx-9 font-normal dark:text-neutral-50 text-center">Produto biodegradáveis com embalagens recicladas e recicláveis</h6>
            <div
            className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
        </div>
        <div className="relative mb-12 px-3 lg:mb-0">
            <div className="mb-2 flex justify-center">
            <span className="text-primary">
               
            </span>
            </div>
            <h5 className="mb-6 font-bold text-primary  text-center">SEM INGREDIENTES TÓXICOS </h5>
            <h6 className="mx-9 font-normal dark:text-neutral-50  text-center">Livre de sulafato, parabenos, alumínio, corante artificias, óleos minerais, silicones e petrolatos</h6>
            <div
            className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
        </div>
        <div className="relative mb-12 px-3 lg:mb-0 items-center justify-center">
            <div className="mb-2 flex "></div>
            <h5 className="mb-6 font-bold text-primary text-center">CRUELTY-FREE</h5>
            <h6 className="mx-9 font-normal dark:text-neutral-50  text-center">Sem testes em animais em nenhuma etapa de seu processo</h6>
        </div>
        </div>
    )
}

export default InfoProduct;