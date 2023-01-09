import { Footer } from './components/Footer'
import { ColorTheme } from './components/ColorTheme'
import { Links } from './components/Links'
import { Networks } from './components/Networks'
import { useState } from 'react'


export const App = () => {

  const [darkTheme, setDarkTheme] = useState(false)


  return (


    <div className=

      {darkTheme ? 'flex justify-center bg-mobiledarkmode bg-no-repeat bg-cover w-screen h-screen text-white' :

        'flex justify-center bg-mobilelightmode bg-no-repeat bg-cover w-screen h-screen'
      }


    >

      <main className="flex flex-col bg-blue-300 items-center mt-10 mb-3 text-sm justify-between">


        <div>

          <div className='flex flex-col items-center gap-1'>
            <img src="https://profile-images-options.s3.sa-east-1.amazonaws.com/friend1.jpg" alt="" className='rounded-full w-20' />
            <p>@thaismoreiraaa</p>

            <ColorTheme
              darkTheme={darkTheme}
              setDarkTheme={setDarkTheme}

            />
          </div>





          <section className='flex flex-col gap-1 items-center mt-3'>

            <Links
              text={"my GitHub"}
              link={"https://github.com/thaismoreiradev"}
            />

            <Links
              text={"my GitHub"}
              link={"https://github.com/thaismoreiradev"}
            />

            <Links
              text={"my GitHub"}
              link={"https://github.com/thaismoreiradev"}
            />

          </section>

        </div>

        <Footer
          text={"Developed by Thais Moreira"}
        />


      </main>
    </div>
  )

}

