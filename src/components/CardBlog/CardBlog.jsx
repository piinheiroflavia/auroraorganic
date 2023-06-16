import ImagemBlog1 from '../../assets/imgs/shampooBarra.png';
import ImagemBlog2 from '../../assets/imgs/blog2.png';
import ImagemBlog3 from '../../assets/imgs/blog1.png';
import {ArrowSmallRightIcon} from "@heroicons/react/24/solid"
import {
  Animate,  
  initTE,
} from "tw-elements";


initTE({ Animate });
const posts = [
  {
    id: 1,
    title: 'Shampoo sólido e barra, 6 motivos para usar!!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quam libero laborum laboriosam voluptates placeat harum aut, animi quasi est rerum eius ex repellendus ipsum maiores ratione debitis beatae similique!',
    date: 'Mar 16, 2020',
    imageSrc: ImagemBlog1,
    category: { tag1: 'Autocuidado', href: '#', tag2:'Cabelo'},
    
  },
  {
    id: 2,
    title: 'Você sabe o que é upcycling?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quam libero laborum laboriosam voluptates placeat harum aut, animi quasi est rerum eius ex repellendus ipsum maiores ratione debitis beatae similique!',
    date: 'Mar 16,  2023',
    imageSrc: ImagemBlog2,
    category: { tag1: 'Sustentabilidade', href: '#', tag2:'reciclável' },
  },
  {
    id: 3,
    title: '6 beneficíos de skincare e como usar no dia-a-dia',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quam libero laborum laboriosam voluptates placeat harum aut, animi quasi est rerum eius ex repellendus ipsum maiores ratione debitis beatae similique!',
    date: 'Mar 16, 2020',
    imageSrc: ImagemBlog3,
    category: { tag1: 'Autocuidado', href: '', tag2:'Pele'},
  },
  
]

export default function Example() {
  return (
    <div className=" py-5 sm:py-5 ">
      <div className="grid justify-items-center mx-auto max-w-7xl px-6 lg:px-8 ">
        
        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 pt-9 sm:mt-16 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          
          {posts.map((post) => (

            <article key={post.id} className="flex max-w-xl flex-col  group py-4 px-6 rounded-lg justify-center items-center bg-aurora-branco shadow-lg">
              <div className="">
              <img src={post.imageSrc} className='rounded-lg w-80  mb-3 shadow-md' />
              </div>
              <div className="my-2 flex items-center gap-x-4 text-xs">
                <time  className="text-gray-500">
                  {post.date}
                </time>
                <h2> </h2>
                <a href={post.category.href} className="relative z-10 rounded-full bg-gray-300 px-3 py-1.5 font-medium text-gray-600 hover:bg-aurora-tomNeutro hover:text-gray-50"
                >{post.category.tag1}</a>
                <a href={post.category.href} className="relative z-10 rounded-full bg-gray-300 px-3 py-1.5 font-medium text-gray-600 hover:bg-aurora-tomNeutro hover:text-gray-50"
                >{post.category.tag2}</a>
              </div>
              <div className="group relative px-2">
                <h3 className="my-7 text-lg font-semibold leading-6 text-gray-900">
                  <span className="absolute inset-0 px-2"> {post.title}</span>
                </h3>
                
                <p className="my-12 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>

                <div className="flex justify-start items-center">
                  <div>
                    <button type="button" className="flex justify-center w-full items-center relative p-2 py-1  font-medium text-gray-900 hover:text-orange-700"
                    > <a href="/auroraorganic/blog">Leia mais</a>  </button>
                  </div>
                   <div>
                    <ArrowSmallRightIcon className="h-4  text-gray-900 hidden sm:block cursor-pointer"aria-hidden="true"></ArrowSmallRightIcon>
                  </div> 
                </div>     
              </div>
              
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}