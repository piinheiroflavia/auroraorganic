const products = [
    {
      id: 1,
      name: 'Óleo Essencial Natural de Melaleuca 10mL',
      href: '#',
      Preco: 'R$70,00',
      novoPreco: 'R$40,00',
      imageSrc: 'https://img.freepik.com/fotos-gratis/arranjo-de-oleo-de-jojoba-saudavel_23-2149047728.jpg?w=360&t=st=1682547187~exp=1682547787~hmac=51dacc99b422bbc3bf8b36669f53684dde5e081d3e50b0906e8baed5d36137a4',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      carrinho: true
    },
    {
      id: 2,
      name: 'Óleo Essencial Natural de Melaleuca 10mL',
      href: '#',
      Preco: 'R$80,00',
      novoPreco: 'R$60,00',
      imageSrc: 'https://img.freepik.com/fotos-gratis/composicao-natural-do-oleo-de-jojoba_23-2149047770.jpg?w=360&t=st=1682546786~exp=1682547386~hmac=7f32ee0d4fdf005d923f6e33334607f4ef9d0a008b2a60c0d2673e100e01bdce',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      carrinho: false,
    },
    {
      id: 3,
      name: 'Óleo Essencial Natural de Melaleuca 10mL',
      href: '#',
      Preco: 'R$80,00',
      novoPreco: 'R$50,00',
      imageSrc: 'https://img.freepik.com/fotos-gratis/variedade-de-garrafas-de-oleo-de-cannabis-natural_23-2148977771.jpg?w=360&t=st=1682546910~exp=1682547510~hmac=086356d08de43d87063f7b7e6124cb609b56acf04dfd2cfd226a600df7c77bca',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      carrinho: false,
    },
    {
      id: 4,
      name: 'Óleo Essencial Natural de Melaleuca 10mL',
      href: '#',
      Preco: 'R$100,00',
      novoPreco: 'R$90,00',
      imageSrc: 'https://img.freepik.com/fotos-gratis/variedade-de-conta-gotas-de-oleo-de-argan-natural_23-2149016625.jpg?w=360&t=st=1682547041~exp=1682547641~hmac=a2f1979a9f91d2baaffbd1a90a0a6da4a6a392eccaa682c445cb46ff271b53d1',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      carrinho: false,
    },
  ]
  
  export default function Example() {
    return (
      <div className="bg-dark">
          
        <div className="mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">
      
          <div className="grid grid-cols-1 gap-x-6 gap-y-13 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8  border-t border-gray-200 pt-2 sm:mt-16 sm:pt-12 lg:mx-0">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover .hover:scale-110   object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-xs font-medium text-gray-900"><s>{product.Preco}</s></p>
                <p className="mt-1 text-xl font-medium text-gray-900">{product.novoPreco}</p>
                {/* classificação com estrelas */}
                <ul class="flex justify-center">
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
                <a href={product.carrinho} className="flex justify-center items-center relative my-8 p-2 bg-aurora-fundoEscuro font-medium text-gray-50 hover:bg-orange-700 hover:text-gray-50"
                >Saiba Mais</a>   
              </a>
            ))}
          
          </div>
        </div>
      </div>
    )
  }