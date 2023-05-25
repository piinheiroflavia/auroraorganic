import Footer from "../../components/Footer/Footer";
import FormNewsLetter from "../../components/FormNewsLetter/FormNewsLetter";
import Header from "../../components/Header/Header";
import CardBlog from "../../components/CardBlog/CardBlog";

const Blog = () => {
    return (
      <>
        <Header/>
        <blockquote className="text-3xl font-semibold italic text-center text-gray-900 sm:text-4xl">
        
          <span className="mt-24 mx-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-aurora-fundoEscuro relative inline-block">
            <span className="mx-1 relative text-white"> Aurora Blog  </span>
          </span>         
        </blockquote>
        <CardBlog/>
        <CardBlog/>
        <br className="mb-36"></br>
        <FormNewsLetter/>
        <Footer/>
      </>
    )
} 

export default Blog;