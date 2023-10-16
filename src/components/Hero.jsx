import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='logo' className='w-28 object-contain' />

        <button 
        type='button'
        onClick={() => window.open('https://github.com/AbhinavAgarwal1111')} 
        className='bg-gradient-to-r from-green-100 to-cyan-100 rounded-full text-green-800 w-24 h-12 relative hover:from-cyan-100 hover:to-green-100 font-semibold
        before:w-full before:h-full before:scale-x-[1.08] before:scale-y-[1.1]  before:absolute before:top-[50%] before:left-[50%]
        before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%] 
        before:from-green-500 before:to-blue-500 before:bg-gradient-to-br
        before:rounded-full'>GitHub</button>
      </nav>

      <h1 className='head_text'>Summerize Articles with <br 
      className='max-md:hidden'/>
      <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
      <h2 className='desc'>
      Harness the potential of SynopAI, an intelligent open-source article summarizer that delivers concise summaries,
       allowing you to grasp the key ideas of lengthy texts at a glance.
      </h2>
    </header>
  )
}

export default Hero;