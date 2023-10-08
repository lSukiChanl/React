import BannerDark from '../assets/BannerDark.png'

export default function Banner ({ Theme }) {
  return (
    <div className=' bg-black'>
      {
        Theme === 'dark'
          ? <img className='w-full opacity-75 pointer-events-none' src={BannerDark} alt='Imagen del Banner' />
          : <img className='w-full opacity-75 pointer-events-none' src={BannerDark} alt='Imagen del Banner' />
      }
    </div>
  )
}
