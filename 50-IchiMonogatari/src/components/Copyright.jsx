import IMGLogo from '../Assets/Leyenda.png'

export default function Copyright () {
  return (
    <section>
      <div className='container mx-auto'>
        <img className='py-10 ml-auto mr-auto w-[25%]' src={IMGLogo} />
      </div>
      <p className='pt-5 pb-10 text-neutral-800 dark:text-neutral-400 font-bold text-center'>Copyright © 2021 IchiMonogatari. <br /> All Rights Reserved Disclaimer, <br />The site IchiMonogatari does not store any files on its server, <br />All contents are provided by non-affiliated third parties.</p>
    </section>
  )
}
