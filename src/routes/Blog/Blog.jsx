import Footer from "../../components/Footer/Footer";
import FormNewsLetter from "../../components/FormNewsLetter/FormNewsLetter";
import Header from "../../components/Header/Header";
import CardBlog from "../../components/CardBlog/CardBlog";

const Blog = () => {
    return (
      <>
        <Header/>
        <blockquote className="mb-10 text-3xl font-semibold italic text-center text-gray-900 sm:text-4xl">
        
          <span className="mt-40 mx-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-aurora-fundoEscuro relative inline-block">
            <span className="mx-1 relative text-white"> Aurora Blog  </span>
          </span>         
        </blockquote>
        <h2>Página Blog</h2>
        <CardBlog/>
        <FormNewsLetter/>
        <Footer/>
      </>
    )
} 

export default Blog;