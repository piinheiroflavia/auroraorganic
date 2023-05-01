const products = [
    {
      id: 1,
      name: 'Óleo Essencial Natural de Melaleuca 10mL',
      href: '#',
      price: 'R$20,00',
      imageSrc: 'https://img.freepik.com/fotos-gratis/arranjo-de-oleo-de-jojoba-saudavel_23-2149047728.jpg?w=360&t=st=1682547187~exp=1682547787~hmac=51dacc99b422bbc3bf8b36669f53684dde5e081d3e50b0906e8baed5d36137a4',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Óleo Essencial Natural de Melaleuca 10mL',
      href: '#',
      price: 'R$20,00',
      imageSrc: 'https://img.freepik.com/fotos-gratis/composicao-natural-do-oleo-de-jojoba_23-2149047770.jpg?w=360&t=st=1682546786~exp=1682547386~hmac=7f32ee0d4fdf005d923f6e33334607f4ef9d0a008b2a60c0d2673e100e01bdce',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Óleo Essencial Natural de Melaleuca 10mL',
      href: '#',
      price: 'R$20,00',
      imageSrc: 'https://img.freepik.com/fotos-gratis/variedade-de-garrafas-de-oleo-de-cannabis-natural_23-2148977771.jpg?w=360&t=st=1682546910~exp=1682547510~hmac=086356d08de43d87063f7b7e6124cb609b56acf04dfd2cfd226a600df7c77bca',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Óleo Essencial Natural de Melaleuca 10mL',
      href: '#',
      price: 'R$20,00',
      imageSrc: 'https://img.freepik.com/fotos-gratis/variedade-de-conta-gotas-de-oleo-de-argan-natural_23-2149016625.jpg?w=360&t=st=1682547041~exp=1682547641~hmac=a2f1979a9f91d2baaffbd1a90a0a6da4a6a392eccaa682c445cb46ff271b53d1',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-dark">
          <h2 className="ml-20 mt-10 mb-0 text-slate-950 text-transform: uppercase text-2xl font-semibold">Os Mais Procurados do Momento</h2>
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
      
          <div className="grid grid-cols-1 gap-x-6 gap-y-13 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8  border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          
          </div>
        </div>
      </div>
    )
  }