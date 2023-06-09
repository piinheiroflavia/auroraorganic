const productsSkin = [
    {
      id: 1,
      name: 'Óleo Essencial Natural de Melaleuca 10mL',
      Preco: 'R$70,00',
      novoPreco: 'R$40,00',
      imageSrc: 'https://img.freepik.com/psd-premium/maquete-de-frasco-cosmetico-de-vidro-ambar_358694-1009.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      carrinho: true,
      favorite: false,
    },
    {
      id: 2,
      name: 'Óleo Essencial Natural de Melaleuca 10mL',
      Preco: 'R$80,00',
      novoPreco: 'R$60,00',
      imageSrc: 'https://img.freepik.com/psd-premium/maquete-de-frasco-cosmetico-de-vidro-ambar_358694-1009.jpg',
      imageAlt: 'Óleo Essencial Natural de Melaleuca 10mL',
      carrinho: false,
      favorite: false,
    },
    {
      id: 3,
      name: 'Óleo Essencial Natural de Melaleuca 10mL',
      Preco: 'R$80,00',
      novoPreco: 'R$50,00',
      imageSrc: 'https://img.freepik.com/psd-premium/maquete-de-frasco-cosmetico-de-vidro-ambar_358694-1009.jpg',
      imageAlt: 'Óleo Essencial Natural de Melaleuca 10mL',
      carrinho: false,
      favorite: false,
    },
    {
      id: 4,
      name: 'Óleo Essencial Natural de Melaleuca 10mL',
      Preco: 'R$100,00',
      novoPreco: 'R$90,00',
      imageSrc: 'https://img.freepik.com/psd-premium/maquete-de-frasco-cosmetico-de-vidro-ambar_358694-1009.jpg',
      imageAlt: 'Óleo Essencial Natural de Melaleuca 10mL',
      carrinho: false,
      favorite: false,
    },
  ]
  
  import { Modal,Ripple,initTE,} from "tw-elements";
  
  initTE({ Modal, Ripple });


  export default function Example() {
    const adiocionarCarrinho = () => {
      alert("Great Shot !")
      console.log(productsSkin)
    }
    return (
      <div className="bg-dark">
          
        <div className="mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">
      
          <div className="grid grid-cols-1 gap-x-6 gap-y-13 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8  border-t border-gray-200 pt-2 sm:mt-16 sm:pt-12 lg:mx-0">
            {productsSkin.map((product) => (
              <a key={product.id} href={product.href} className="group py-4 px-6 rounded-lg bg-aurora-branco">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover .hover:scale-110   object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <ul class="flex my-2 justify-start">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="mr-1 h-3 w-3 text-warning">
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="mr-1 h-3 w-3 text-warning">
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="mr-1 h-3 w-3 text-warning">
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="mr-1 h-3 w-3 text-warning">
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="mr-1 h-3 w-3 text-warning">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    </li>
                    
                  </ul>
                  {/* BOTAO */}
                                  {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  class="flex max-w-lg w-full justify-center items-center relative mt-8 p-2 bg-aurora-fundoEscuro font-medium text-gray-50 hover:bg-orange-700 hover:text-gray-50"
                  data-te-toggle="modal"
                  data-te-target="#exampleModal"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  Add Carrinho
                </button>

                {/* <!-- Modal --> */}
                <div 
                  data-te-modal-init
                  class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div
                    data-te-modal-dialog-ref
                    class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[900px]">
                    <div
                      class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                      <div
                        class="flex w-full flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                        {/* <!--Modal title--> */}
                        <h2 className="mt-4  text-gray-700 text-lg font-semibold">Produto óleo Essencial</h2>
                        {/* <!--Close button--> */}
                        <button
                          type="button"
                          class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                          data-te-modal-dismiss
                          aria-label="Close">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      {/* <!--Modal body--> */}
                      <div class="relative flex-auto w-full p-6" data-te-modal-body-ref>
                       <div class="flex w-full ">
                          <div class="">
                            <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover .hover:scale-110   object-center group-hover:opacity-75" />
                          </div>
                          <div class="w-full ml-4 " >
                            <h1><strong>{product.name}</strong></h1>
                            {/* classificação com estrelas */}
                            <ul class="flex justify-start mt-4">
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="mr-1 h-5 w-5 text-warning">
                                    <path
                                      fill-rule="evenodd"
                                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                      clip-rule="evenodd" />
                                  </svg>
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="mr-1 h-5 w-5 text-warning">
                                    <path
                                      fill-rule="evenodd"
                                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                      clip-rule="evenodd" />
                                  </svg>
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="mr-1 h-5 w-5 text-warning">
                                    <path
                                      fill-rule="evenodd"
                                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                      clip-rule="evenodd" />
                                  </svg>
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="mr-1 h-5 w-5 text-warning">
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                  </svg>
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="mr-1 h-5 w-5 text-warning">
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                  </svg>
                                </li>
                              </ul>
                            <p className="mt-4">Descrição: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptates omnis placeat autem perspiciatis labore soluta molestias! </p>
                            
                            <p className="mt-4"><s>{product.Preco} </s></p>
                            <p className="mt-2  text-2xl">{product.novoPreco}</p>
                            <button
                              type="button"
                              class="inline-block mt-8 rounded border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
                              data-te-ripple-init onClick={adiocionarCarrinho}> ADD Carrinho
                              {product.carrinho}
                            </button>
                          
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                {/* FIM DO BOTAO */}
              </a>
            ))}
          
          </div>
        </div>
      </div>
      
    )
    
  }

  // function Favorite({ product }) {
  //   // yes, this is a `let` for later
  //   let favorite = product.favorite;
  //   return (
  //     <Form method="post">
  //       <button
  //         name="favorite"
  //         value={favorite ? "false" : "true"}
  //         aria-label={
  //           favorite
  //             ? "Remove from favorites"
  //             : "Add to favorites"
  //         }
  //       >
  //         {favorite ? "★" : "☆"}
  //       </button>
  //     </Form>
  //   );
  // }