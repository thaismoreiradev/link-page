import { Footer } from './components/Footer'
import { ColorTheme } from './components/ColorTheme'
import { Links } from './components/Links'
import { useState } from 'react'


export const App = () => {

  const [darkTheme, setDarkTheme] = useState(false)


  return (


    <div className={`
        flex flex-col items-center justify-center bg-no-repeat bg-cover w-screen h-screen 
        ${darkTheme ? "bg-mobiledarkmode md:bg-desktopdarkmode text-white" :
        "bg-mobilelightmode md:bg-desktoplightmode text-neutral-700"}
    `}>

      <main className=" flex flex-col items-center mt-10 xs:mt-16 text-xs xs:text-sm sm:text-base gap-2 w-2/3 h-5/6">




        <div className='flex flex-col items-center gap-1'>
          <img src="https://profile-images-options.s3.sa-east-1.amazonaws.com/friend1.jpg" alt="" className='rounded-full w-20' />
          <p>Thais Moreira</p>

          <ColorTheme
            darkTheme={darkTheme}
            setDarkTheme={setDarkTheme}
          />
        </div>





        <section className='flex flex-col gap-1 xs:gap-2 items-center'>

          <Links
            text={"LinkedIn"}
            link={"https://www.linkedin.com/in/thaismoreiradev/"}
            darkTheme={darkTheme}
          />

          <Links
            text={"GitHub"}
            link={"https://github.com/thaismoreiradev"}
            darkTheme={darkTheme}
          />

          <Links
            text={"Instagram"}
            link={"https://www.instagram.com/thaismoreiraaa/"}
            darkTheme={darkTheme}
          />

          <Links
            text={"WhatsApp"}
            link={"https://wa.me/qr/UJSNDZURJDEVC1"}
            darkTheme={darkTheme}
          />

        </section>


        <p>
          <a href="mailto:contatothaismoreira@hotmail.com">
            Click here to mail me
          </a>
        </p>







      </main>
      <Footer
        text={"Developed by Thais Moreira"}
      />
    </div>
  )

}

