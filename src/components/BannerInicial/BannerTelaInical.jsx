import bannerImagem1 from '../../assets/imgs/Banner2skin.jpg';
import bannerImagem2 from '../../assets/imgs/banner1promo.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

  const BannerTelaInical = () => {
    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        <div>
          <img src={bannerImagem2} alt="Banner 1" />
        </div>
        <div>
          <img src={bannerImagem1} alt="Banner 2" />
        </div>

      </Carousel>
    );
  }
  
  export default BannerTelaInical;