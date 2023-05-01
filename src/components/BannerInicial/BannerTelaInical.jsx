import bannerImagem from '../../assets/imgs/Banner-Cosméticos.jpg';

const BannerTelaInical = () => {
    return (
        <div className="banner flex m justify-center items-center drop-shadow-md">
            {/* <img src="/imgs/Banner-Cosméticos.jpg" alt="Banner" /> */}
            <img src={bannerImagem} alt="Banner" />
        </div>
    )
}

export default BannerTelaInical;
