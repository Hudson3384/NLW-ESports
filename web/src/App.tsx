import logoImg  from './assets/Logo.svg'
import {  MagnifyingGlassPlus } from 'phosphor-react';
function App() {
  return (

    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
        <img src={logoImg} alt="Logo da NLW ESPORTS" />
        <h1 className='text-6xl text-white font-black mt-20'>
          Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui.
        </h1>
        <div className='grid grid-cols-6 gap-6 mt-20'>
          <a href='/' className='relative rounded-lg overflow-hidden'>
            <img src='/game-1.png'/>
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute  left-0 right-0 bottom-0" >
              <strong className='font-bold text-white block'>League of Legends</strong>
              <span className="text-zinc-300 text-sm block">4 Anúncios</span>
            </div>
          </a>
          <a href='/' className='relative'>
            <img src='/game-2.png'/>
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute  left-0 right-0 bottom-0" >
              <strong className='font-bold text-white block'>DOTA 2</strong>
              <span className="text-zinc-300 text-sm block">4 Anúncios</span>
            </div>
          </a>
          <a href='/' className='relative'>
            <img src='/game-3.png'/>
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute  left-0 right-0 bottom-0" >
              <strong className='font-bold text-white block'>Call of Duty</strong>
              <span className="text-zinc-300 text-sm block">4 Anúncios</span>
            </div>
          </a>
          <a href='/' className='relative'>
            <img src='/game-4.png'/>
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute  left-0 right-0 bottom-0" >
              <strong className='font-bold text-white block'>Apex</strong>
              <span className="text-zinc-300 text-sm block">4 Anúncios</span>
            </div>
          </a>
          <a href='/' className='relative'>
            <img src='/game-5.png'/>
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute  left-0 right-0 bottom-0" >
              <strong className='font-bold text-white block'>Warcraft</strong>
              <span className="text-zinc-300 text-sm block">4 Anúncios</span>
            </div>
          </a>
          <a href='/' className='relative'>
            <img src='/game-6.png'/>
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute  left-0 right-0 bottom-0" >
              <strong className='font-bold text-white block'>Fortnite</strong>
              <span className="text-zinc-300 text-sm block">4 Anúncios</span>
            </div>
          </a>
        </div>

        <div className='w-full'>
          <div className='pt-1 bg-nlw-gradient mt-8 self-stretch rounded-lg overflow-hidden'> </div>
          <div className='bg-[#2A2634] px-8 py-6 flex justify-between align-center self-stretch '>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button  className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
            </button>
        </div>
        


        </div>
    </div>
  )
}

export default App

