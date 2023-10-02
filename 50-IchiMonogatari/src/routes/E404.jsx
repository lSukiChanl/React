import IMGE404 from '../Assets/NoDatos.png'

export default function E404 () {
  return (
    <div className='container mx-auto'>
      <h2 className='text-[#FFC0CB] text-4xl font-bold text-center'>❤ ERROR 404 ❤</h2>
      <img className='pointer-events-none w-2/6 ml-[33%] mr-[33%]' src={IMGE404} />
      <h2 className='text-[#FFC0CB] text-4xl font-bold text-center'>❤ PAGINA NO ENCONTRADA ❤</h2>
    </div>
  )
}
