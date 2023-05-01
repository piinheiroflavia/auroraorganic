//importando o icone
import {UserCircleIcon, ShoppingCartIcon} from "@heroicons/react/24/solid"
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import imagemLogo from "../../assets/imgs/logoA.jpg"

const Header = () => {
    return <div >
        <div className="flex h-15 bg-aurora-fundoEscuro dark:bg-aurora-100 justify-between items-center px-5">
            <img src={imagemLogo} alt="Banner" className="flex h-16"/>
            <div className="flex ">
                <UserCircleIcon className="h-7 mx-6 text-gray-100 hidden sm:block cursor-pointer"></UserCircleIcon>
                <ShoppingCartIcon  className="h-7 text-gray-100 hidden sm:block cursor-pointer"/>
            </div>
        </div>
        <div className="flex h-8  bg-aurora-fundoEscuro justify-center items-center px-3  ">
             <a href="/auroraorganic" className="text-gray-100 text-base mx-5 sm:block"> Home </a>
            <a href="/auroraorganic/skincare" className="text-gray-100 text-base mx-5 sm:block"> SkinCare </a>
            <a href="/auroraorganic/aromaterapia" className="text-gray-100 text-base mx-5 sm:block"> Aromaterapia </a>
            <a href="/auroraorganic/blog" className="text-gray-100 text-base mx-5 sm:block"> Blog </a>
            <a href="/auroraorganic/sobre-nos" className="text-gray-100 text-base mx-5 sm:block"> Lei antes de comprar </a> 
            <ToggleTheme/>
        </div>
        
    </div>
    
    
}

export default Header;