import { MdNightsStay } from 'react-icons/md'
import { BsSunFill } from 'react-icons/bs'



export const ColorTheme = ({ darkTheme, setDarkTheme }) => (


    <div
        className='flex relative w-full p-1 justify-center cursor-pointer'
        onClick={() => setDarkTheme(prevTheme => !prevTheme)}
    >


        <button className={`
        flex absolute rounded-full w-5 sm:w-8 h-5 sm:h-8 top-[10%] justify-center items-center text-xs sm:text-base border-[1px]
        ${darkTheme ? "bg-neutral-900 border-white right-0" :
                "bg-slate-300 border-neutral-700 left-[-1%]"}     
        `}>

            {
                darkTheme ? <BsSunFill /> : <MdNightsStay />
            }

        </button>

        <span className={`
        block rounded-2xl w-full h-4 sm:h-6 border-[1px]
        ${darkTheme ? "border-white" : "border-neutral-700"}
        `}></span>

    </div >
)   