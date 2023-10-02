import DarkBanner from '../assets/BannerDark.png'
import LightBanner from '../assets/BannerLight.png'

export default function Banner ({ Theme }) {
  return (
    <div className=' bg-black'>
      {
        Theme === 'dark'
          ? <img className='w-full opacity-75 pointer-events-none' src={DarkBanner} alt='Imagen del Banner' />
          : <img className='w-full opacity-75 pointer-events-none' src={LightBanner} alt='Imagen del Banner' />
      }
    </div>
  )
}
