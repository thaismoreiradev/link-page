import { Footer } from './components/Footer'
import { ColorTheme } from './components/ColorTheme'
import { Links } from './components/Links'
import { Networks } from './components/Networks'
import { useState } from 'react'


export const App = () => {


  return (

    <div className='flex justify-center m-10'>

      <main className="flex flex-col bg-blue-300 items-center justify-center">

        <img src="https://profile-images-options.s3.sa-east-1.amazonaws.com/friend1.jpg" alt="" className='rounded-full w-12' />
        <p>@thaismoreiraaa</p>

        <ColorTheme />

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
        
        <Networks />



        <Footer />
      </main>
    </div>
  )

}

