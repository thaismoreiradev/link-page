import { MdNightsStay } from 'react-icons/md'
import { BsSunFill } from 'react-icons/bs'





export const ColorTheme = ({ darkTheme, setDarkTheme }) => (





    <form className='flex relative bg-red-300 w-2/3 p-1 justify-center'

        onSubmit={(e) => {
            e.preventDefault()
            setDarkTheme(!darkTheme)

        }}
    >

    

        <button className=
            {darkTheme ? "absolute right-0  flex bg-red-200 rounded-full w-5 h-5 absolute top-[10%] justify-center items-center text-xs cursor-pointer" :

                'flex bg-red-200 rounded-full w-5 h-5 absolute top-[10%] left-[-1%] justify-center items-center text-xs cursor-pointer'
            }

        >

            {
                darkTheme ? <BsSunFill /> : <MdNightsStay />
            }

        </button>
        <span className='block rounded-2xl bg-neutral-900 w-20 h-4'></span>
    </form >



)   