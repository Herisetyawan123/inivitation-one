import { useState, useEffect } from 'react';
import AOS from 'aos';
import Image from 'next/image';

const Cover = ({ onOpen, coupleNames }) => {
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi dalam ms
      once: true,     // animasi hanya sekali saat scroll
    });
  }, []);

  useEffect(() => {
    // Mengambil parameter nama dari URL saat komponen dimuat
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const nameParam = urlParams.get('nama');
      setGuestName(nameParam || 'Nama tamu');
    }
  }, []);

  return (
    <div className="sticky w-[100%] h-[100vh] overflow-hidden inset-0 flex flex-col items-center justify-center z-50 transition-transform duration-1000 ease-in-out"
      style={{
        backgroundImage: 'url("/bg.webp")',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      id="cover">
      <div className="absolute left-[200px] -top-[20px] -z-20 inset-0 w-[300px] h-[300px]">
        <Image
          src="/flowers-1.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute -left-[50px] -bottom-[20px] -z-20 w-[400px] h-[300px]">
        <Image
          src="/flowers-2.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute right-5 bottom-5 space-y-3">
        <div className='w-10 h-10 bg-[#b83143cd] rounded-full text-white flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256"><rect x="40" y="40" width="80" height="80" rx="16"></rect><rect x="40" y="136" width="80" height="80" rx="16"></rect><rect x="136" y="40" width="80" height="80" rx="16"></rect><path d="M144,184a8,8,0,0,0,8-8V144a8,8,0,0,0-16,0v32A8,8,0,0,0,144,184Z"></path><path d="M208,152H184v-8a8,8,0,0,0-16,0v56H144a8,8,0,0,0,0,16h32a8,8,0,0,0,8-8V168h24a8,8,0,0,0,0-16Z"></path><path d="M208,184a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V192A8,8,0,0,0,208,184Z"></path></svg>
        </div>
        <div className='w-10 h-10 bg-[#b83143cd] rounded-full text-white flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256" className="play"><path d="M184,152V104a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Zm40-72a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,224,80ZM53.92,34.62A8,8,0,1,0,42.08,45.38L73.55,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V175.09l42.08,46.29a8,8,0,1,0,11.84-10.76Zm92.16,77.59A8,8,0,0,0,160,106.83V32a8,8,0,0,0-12.91-6.31l-39.85,31a8,8,0,0,0-1,11.7Z"></path></svg>
        </div>
        <div className='w-10 h-10 bg-[#b83143cd] rounded-full text-white flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256" className="play"><path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm36.44,110.66-48,32A8.05,8.05,0,0,1,112,168a8,8,0,0,1-8-8V96a8,8,0,0,1,12.44-6.66l48,32a8,8,0,0,1,0,13.32Z"></path></svg>
        </div>
      </div>
      {/* <div className="absolute inset-0 flex items-center justify-center"></div> */}
      <div className="text-center p-6 max-w-md mx-auto">

        <div

          className="mx-auto mb-8 relative"
          style={{
            borderRadius: '20rem',
            padding: '2rem',
            width: '250px',
            height: '380px',
            border: '4px solid #BC9C6A',
            backgroundColor: '#fdf8f0',
          }}>
          <Image
            src="/wedding.webp"
            alt="Couple"
            layout="fill"
            objectFit="cover"
            className="w-[200px] h-[330px] object-cover rounded-full"
          />
        </div>

        <p className="text-[#b83143] mb-8" style={{
          fontSize: '14px',
        }}>
          Kepada Yth:<br />
          Bapak/Ibu/Saudara/i
          <br />
          <span className="mt-2 font-semibold">{guestName}</span><br />
        </p>

        <button
          onClick={onOpen}
          className="bg-[#b83143] text-[#fffaf2] font-medium py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center mx-auto cursor-pointer"
        >
          <span className='font-normal text-sm'>Open Invitation</span>
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg> */}
        </button>

      </div>
    </div>
  );
};

export default Cover;