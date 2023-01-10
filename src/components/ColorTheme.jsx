import { MdNightsStay } from 'react-icons/md'
import { BsSunFill } from 'react-icons/bs'





export const ColorTheme = ({ darkTheme, setDarkTheme }) => (





    <div
        className='flex relative w-full p-1 justify-center'
        onClick={() => setDarkTheme(prevTheme => !prevTheme)}
    >



        <button className={`
        flex absolute rounded-full w-5 h-5 top-[10%] justify-center items-center text-xs cursor-pointer border-[1px] border-neutral-700
        ${darkTheme ? "bg-neutral-900 border-white right-0" :
                "bg-neutral-50 border-neutral-700 left-[-1%]"}     
        `}>

            {
                darkTheme ? <BsSunFill /> : <MdNightsStay />
            }

        </button>
        <span className={`
        block rounded-2xl w-full h-4 border-[1px]
        ${darkTheme ? "border-white" : "border-neutral-700"}
        `}></span>
    </div >

)   