import React from 'react'
import EjemploJson from '../examples/Bakemonogatari'
import NotFound from '../assets/Definitivas/Error2Pro.png'
import Banner from '../components/Banner'

export default function InfoAnime ({ BotonLuces }) {
  const DatosHentai = EjemploJson.Search
  const Hentai = DatosHentai?.length > 0

  return (
    <>
      {
        Hentai
          ? (
            <section>

              {
                DatosHentai.map(Dato => (
                  <section key={Dato.Url} className=' test'>
                    <Banner />

                    <div className='container mx-auto pt-16 pb-16'>

                      <section className='grid grid-cols-12 gap-4'>

                        <div className='col-span-12 md:col-span-3 mr-4 ml-4'>
                          <img className='w-full rounded-xl' src={Dato.ImgPortada} />
                        </div>

                        <div className='col-span-12 md:col-span-9 text-lg text-neutral-200  '>

                          <p className=' text-center pb-4 text-2xl font-bold Estilotextonoimportante'> {Dato.Nombre} </p>

                          <p className=' text-justify text-lg ml-4 mr-4 Estilotextonoimportante'>
                            Koyomi Araragi, a third-year high school student, manages to survive a vampire attack with the help of Meme Oshino, a strange man residing in an abandoned building. Though being saved from vampirism and now a human again, several side effects such as superhuman healing abilities and enhanced vision still remain. Regardless, Araragi tries to live the life of a normal student, with the help of his friend and the class president, Tsubasa Hanekawa.
                            <br /><br />
                            When fellow classmate Hitagi Senjougahara falls down the stairs and is caught by Araragi, the boy realizes that the girl is unnaturally weightless. Despite Senjougahara's protests, Araragi insists he help her, deciding to enlist the aid of Oshino, the very man who had once helped him with his own predicament.
                            <br /><br />
                            Through several tales involving demons and gods, Bakemonogatari follows Araragi as he attempts to help those who suffer from supernatural maladies.
                            <br /><br />
                            [Written by MAL Rewrite]
                            <br /><br />
                          </p>
                          <div className='flex flex-wrap justify-center'>
                            {
                            Dato.Generos.map(Genero => (
                              <div key={Genero} className='px-2 py-4'>
                                <a href='#' className='shadow-md bg-neutral-700 rounded-full px-4 py-2 font-bold text-base hover:bg-neutral-800 hover:ring-4 hover:ring-[pink] active:shadow-lg transition duration-150 ease-in-out '>
                                  {Genero}
                                </a>
                              </div>
                            ))
                          }
                          </div>
                        </div>

                      </section>

                      <section className='grid grid-cols-12 gap-4 py-16'>

                        <div className='col-span-12 md:col-span-3 text-lg text-neutral-200  '>

                          <p className=' text-center pb-4 text-2xl font-bold Estilotextonoimportante'> {Dato.Nombre} </p>

                          <p className=' text-center text-lg ml-4 mr-4 Estilotextonoimportante'>
                            Type: TV <br />
                            Episodes: 15<br />
                            Status: Finished Airing<br />
                            Aired: Jul 3, 2009 to Jun 25, 2010<br />
                            Premiered: Summer 2009<br />
                            Broadcast: Fridays at 23:00 (JST)<br />
                            Producers: Aniplex, Kodansha<br />
                            Licensors: Aniplex of America<br />
                            Studios: Shaft<br />
                            Source: Light novel<br />
                            Genres: Mystery, Romance, Supernatural<br />
                            Theme: Vampire<br />
                            Duration: 25 min. per ep.<br />
                            Rating: R - 17+ (violence & profanity)<br />
                          </p>

                        </div>

                      </section>

                      <section className='col-span-12 md:col-span-12 mr-4 ml-4'>
                        <div class='not-prose relative rounded-xl overflow-hidden '>
                          <div class='absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]' />
                          <div class='relative rounded-xl overflow-auto'>

                            <div class='relative w-full flex gap-6 snap-x overflow-x-auto pb-14'>

                              <div class='snap-center shrink-0'>
                                <div class='shrink-0 w-4 sm:w-48' />
                              </div>
                              <div className='snap-center shrink-0 first:pl-8 last:pr-8 scroll-ml-6'>
                                <p className=' text-center pb-10 text-xl font-bold text-neutral-200 Estilotextonoimportante'> Opening</p>
                                <img className='shrink-0 w-96 md:w-[52rem] rounded-lg shadow-xl bg-white' src={Dato.ImgOpening} />
                              </div>
                              <div className='snap-center shrink-0 first:pl-8 last:pr-8 scroll-ml-6'>
                                <p className=' text-center pb-10 text-xl font-bold text-neutral-200 Estilotextonoimportante'> Capitulo </p>
                                <img className='shrink-0 w-96 md:w-[52rem] rounded-lg shadow-xl bg-white' src={Dato.ImgCapitulo} />
                              </div>
                              <div className='snap-center shrink-0 first:pl-8 last:pr-8 scroll-ml-6'>
                                <p className=' text-center pb-10 text-xl font-bold text-neutral-200 Estilotextonoimportante'> Ending</p>
                                <img className='shrink-0 w-96 md:w-[52rem] rounded-lg shadow-xl bg-white' src={Dato.ImgEnding} />
                              </div>
                              <div class='snap-center shrink-0'>
                                <div class='shrink-0 w-4 sm:w-48' />
                              </div>

                            </div>
                          </div>
                        </div>
                      </section>

                    </div>

                  </section>
                ))
              }

            </section>
            )
          : (
            <section>
              <div className='container mx-auto pt-16 pb-16'>
                <h2 className=' text-neutral-800 dark:text-[#FFC0CB] text-3xl font-bold text-center'>❤ ERROR ❤</h2>
                <img className='pointer-events-none w-2/6 ml-[33%] mr-[33%]' src={NotFound} />
                <h2 className=' text-neutral-800 dark:text-[#FFC0CB] text-3xl font-bold text-center'>❤ NO SE ENCONTRO INFORMACION ❤</h2>
              </div>
            </section>
            )
      }

    </>
  )
}
