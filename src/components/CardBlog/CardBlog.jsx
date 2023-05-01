import ImagemBlog1 from '../../assets/imgs/skincare-sustentavel-dicas-para-reduzir-o-impacto-ambiental.jpg';
import {ArrowSmallRightIcon} from "@heroicons/react/24/solid"
const posts = [
  {
    id: 1,
    title: 'Autocuidado sustentável: é possível?',
    href: 'https://br.freepik.com/fotos-gratis/arranjo-de-oleo-de-jojoba-saudavel_16620059.htm#from_view=detail_serie',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    category: { title: 'Autocuidado', href: 'https://br.freepik.com/fotos-gratis/arranjo-de-oleo-de-jojoba-saudavel_16620059.htm#from_view=detail_serie' },
    
  },
  {
    id: 2,
    title: 'Autocuidado sustentável: é possível?',
    href: 'https://br.freepik.com/fotos-gratis/arranjo-de-oleo-de-jojoba-saudavel_16620059.htm#from_view=detail_serie',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: '26 Março 2023',
    category: { title: 'Bem-estar', href: '#' },
  },
  {
    id: 3,
    title: 'Autocuidado sustentável: é possível?',
    href: 'https://br.freepik.com/fotos-gratis/arranjo-de-oleo-de-jojoba-saudavel_16620059.htm#from_view=detail_serie',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    category: { title: 'Marketing', href: '#' },
  },
  
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="grid justify-items-center mx-auto max-w-7xl px-6 lg:px-8">
        <div className=" mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">Nosso Blog</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          
          {posts.map((post) => (

            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="">
              <img src={ImagemBlog1} alt="Banner" className='rounded-lg w-72 ' />
              </div>
              <div className="my-2 flex items-center gap-x-4 text-xs">
                <time  className="text-gray-500">
                  {post.date}
                </time>
                <h2> </h2>
                <a href={post.category.href} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-pink-500 hover:text-gray-50"
                >{post.category.title}</a>
              </div>
              <div className="group relative">
                <h3 className="my-7 text-lg font-semibold leading-6 text-gray-900">
                  <span className="absolute inset-0"> {post.title}</span>
                </h3>

                <p className="my-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  <a href={post.href} className='my-7 text-lg leading-6 text-pink-500'> Saber mais 
                  <ArrowSmallRightIcon className="h-7 mx-6 text-pink-500 hidden sm:block cursor-pointer"/>         
                  </a>
                                
              </div>
              
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}