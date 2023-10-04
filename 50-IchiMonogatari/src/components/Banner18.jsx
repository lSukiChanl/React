import Banner18Dark from '../assets/Banner18.png'
import Banner18Light from '../assets/Banner18.png'

export default function Banner ({ Theme }) {
  return (
    <div className=' bg-black'>
      {
        Theme === 'dark'
          ? <img className='w-full opacity-75 pointer-events-none' src={Banner18Dark} alt='Imagen del Banner' />
          : <img className='w-full opacity-75 pointer-events-none' src={Banner18Light} alt='Imagen del Banner' />
      }
    </div>
  )
}
