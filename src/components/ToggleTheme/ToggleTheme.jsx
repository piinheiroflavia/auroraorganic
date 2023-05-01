import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useEffect } from "react"

const ToggleTheme = () => {
    const preferencialSistema = window.matchMedia('(prefers-color-scheme: dark)').matches
    const pageClasses = document.documentElement.classList

    useEffect(() => {
        preferencialSistema && pageClasses.add('dark')
    })
    const Toggle = () => {
        pageClasses.toggle('dark')
    }
    return <div className="hidden sm:block">
        <MoonIcon className="h-5 text-gray-100 hidden dark:block cursor-pointer" onClick={Toggle}/>
        <SunIcon className="h-5 text-gray-100 block dark:hidden cursor-pointer" onClick={Toggle}/>
    </div>
}

export default ToggleTheme