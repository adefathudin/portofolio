'use client'
import Image from 'next/image'
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {

    window.onscroll = function(){
      let header = document.querySelector('header');
      let fixedNav = header?.offsetTop;

      if (window.pageYOffset > 0){
        header?.classList.add('navbar-fixed');
      } else {
        header?.classList.remove('navbar-fixed');
      }
    }

    const hamberger = document.querySelector('#hamberger');
    const navMenu = document.querySelector('#nav-menu');
    hamberger?.addEventListener('click', function(){
      hamberger.classList.toggle('hamberger-active');
      navMenu?.classList.toggle('hidden');
    });
  })

  return (
    <main>

    {/* S:Navbar */}
    <header className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'>
      <div className='container'>
        <div className='flex items-center justify-between relative'>
          <div className='px-4'>
            <a href='#' className='font-bold text-lg text-primary block py-6'>adefathudin</a>
          </div>
          <div className='flex items-center px-4'>
            <button id='hamberger' name='hamberger' type='button' className='absolute block right-4 lg:hidden'>
              <span className='hamburger-line transition duration-300 ease-in-out origin-top-left'></span>
              <span className='hamburger-line transition duration-300 ease-in-out'></span>
              <span className='hamburger-line transition duration-300 ease-in-out origin-bottom-left'></span>
            </button>
            <nav id='nav-menu' className='hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none'>
              <ul className='block lg:flex'>
                <li className='group'>
                  <a href='#' className='text-base text-secondary py-2 mx-8 flex group-hover:text-primary'>Home</a>
                </li>
                <li className='group'>
                  <a href='#' className='text-base text-secondary py-2 mx-8 flex group-hover:text-primary'>Home</a>
                </li>
                <li className='group'>
                  <a href='#' className='text-base text-secondary py-2 mx-8 flex group-hover:text-primary'>Home</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    {/* E:Navbar */}

    {/* S:Hero */}
    <section id='home' className='pt-36'>
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='w-full self-center px-4 lg:w-1/2'>
            <h1 className='text-base font-semibold text-primary md:text-xl lg:text-2xl'>Hallo Semua 😁 <span className='block font-bold text-slate-900 text-4xl'>Ade Fathudin</span></h1>
            <h2 className='font-medium text-slate-500 text-lg mb-5'>Web Developer</h2>
            <p className='font-medium text-secondary mb-10 leading-relaxed'>Nama saya ade fathudin</p>
            <a href='#' className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full'>Hubungi Saya</a>
          </div>
          <div className='w-full self-end px-4 lg:w-1/2'>
            <div className='relative mt-10'>
              <Image src='/adefathudin.png' width={400} height={400} alt="Picture of the author" className='max-w-full mx-auto'></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* E:Hero */}

    {/* S:About */}
    <section id='about' className='pt-36 pb-32'>
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 mb-10 lg:w-1/2'>
            <h4 className='font-bold uppercase text-primary text-lg mb-3'>Tentang Saya</h4>
            <h2 className='font-bold text-primary text-3xl mb-5 max-w-md lg:text-lg'>Yuk Belaar programing</h2>
            <p className='font-medium text-base text-secondary max-w-xl lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis, amet nesciunt non nostrum tempora. Non in quidem, recusandae pariatur dolorem, delectus iusto, esse natus eaque architecto veritatis placeat magnam.</p>
          </div>
          <div className='w-full px-4 lg:w-1/2'>
            <h3 className='font-semibold text-secondary text-2xl mb-4 lg:text-lg pt-10'>Mari berlaa</h3>
            <p className='font-medium text-base text-secondary mb-6 lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque omnis rerum itaque accusantium odit voluptate voluptatibus veniam eligendi, repudiandae ipsa libero sed ab laboriosam in nostrum voluptates et quibusdam possimus.</p>
            <div className='flex items-center'>
              {/* Github */}
              <a href='#' target='_blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300'>
                <svg role="img" width={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              {/* Linkedin */}
              <a href='#' target='_blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300'>
                <svg role="img" width={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* E:About */}

    </main>
  )
}
