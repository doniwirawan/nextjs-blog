import { useState } from "react"
import { BsFillMoonStarsFill } from 'react-icons/bs'

export default function Layout({ children }) {
    const [darkMode, setDarkMode] = useState(true)

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className="dark:bg-gray-900 dark:text-white w-auto min-h-screen p-0 -mt-4 py-5 px-5">
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-xl mt-4 fixed' />
                {children}
            </div>
        </div>
    )
}