import { useState, useEffect } from 'react';
import Image from 'next/image';

const Cover = ({ onOpen, coupleNames }) => {
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    // Mengambil parameter nama dari URL saat komponen dimuat
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const nameParam = urlParams.get('nama');
      setGuestName(nameParam || 'Bapak/Ibu/Saudara/i');
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-rose-100 to-pink-200 flex flex-col items-center justify-center z-50 transition-transform duration-1000 ease-in-out"
      id="cover">
      <div className="text-center p-6 max-w-md mx-auto">
        <h2 className="text-xl text-gray-600 mb-2">Undangan Pernikahan</h2>
        <h1 className="text-4xl font-serif text-rose-700 mb-6">{coupleNames}</h1>

        <div className="w-32 h-32 mx-auto mb-6 relative">
          <div className="absolute inset-0 rounded-full border-2 border-rose-300 animate-pulse"></div>
          <div className="absolute inset-2 rounded-full border-2 border-rose-400"></div>
          <div className="absolute inset-4 rounded-full border-2 border-rose-500"></div>
          <div className="absolute inset-6 rounded-full border-2 border-rose-600 flex items-center justify-center">
            <span className="text-rose-700 text-xl">💍</span>
          </div>
        </div>

        <p className="text-gray-600 mb-8">
          Kepada Yth:<br />
          <span className="font-semibold">{guestName}</span><br />
          <span className="italic">Di Tempat</span>
        </p>

        <button
          onClick={onOpen}
          className="bg-rose-500 hover:bg-rose-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center mx-auto"
        >
          <span>Buka Undangan</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Cover;