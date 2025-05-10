import { useEffect, useRef } from 'react';

const MainContent = ({ isOpen }) => {
  const contentRef = useRef(null);
  
  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen]);

  return (
    <div ref={contentRef} className={`min-h-screen flex flex-col items-center justify-start pt-10 transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <section className="text-center p-6 max-w-md mx-auto mb-10">
        <h2 className="text-xl text-gray-600 mb-2">Dengan Rahmat Allah SWT</h2>
        <h1 className="text-3xl font-serif text-rose-700 mb-6">Kami Mengundang Anda</h1>
        <p className="text-gray-600 mb-4">
          Untuk menghadiri acara pernikahan kami:
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-10">
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-rose-200 mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">👰</span>
            </div>
            <h3 className="text-xl font-serif text-rose-600">Nama Mempelai Wanita</h3>
            <p className="text-sm text-gray-500">Putri dari Bpk. ... & Ibu ...</p>
          </div>
          
          <div className="text-4xl font-serif text-rose-500">&</div>
          
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-rose-200 mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">🤵</span>
            </div>
            <h3 className="text-xl font-serif text-rose-600">Nama Mempelai Pria</h3>
            <p className="text-sm text-gray-500">Putra dari Bpk. ... & Ibu ...</p>
          </div>
        </div>
      </section>
      
      <section className="bg-rose-50 w-full p-6 text-center mb-10">
        <h2 className="text-2xl font-serif text-rose-700 mb-6">Jadwal Acara</h2>
        
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-medium text-rose-600 mb-2">Akad Nikah</h3>
            <p className="text-gray-600 mb-1">Sabtu, 01 Januari 2025</p>
            <p className="text-gray-600 mb-1">08:00 - 10:00 WIB</p>
            <p className="text-gray-600">Masjid Al-Hikmah, Jakarta</p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-rose-600 mb-2">Resepsi</h3>
            <p className="text-gray-600 mb-1">Sabtu, 01 Januari 2025</p>
            <p className="text-gray-600 mb-1">11:00 - 14:00 WIB</p>
            <p className="text-gray-600">Gedung Serbaguna, Jakarta</p>
          </div>
        </div>
      </section>
      
      <section className="text-center p-6 max-w-md mx-auto mb-10">
        <h2 className="text-2xl font-serif text-rose-700 mb-6">Lokasi</h2>
        <div className="bg-gray-200 h-64 mb-4 flex items-center justify-center">
          <p className="text-gray-500">Peta Lokasi</p>
        </div>
        <a href="#" className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-medium py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
          Buka di Google Maps
        </a>
      </section>
      
      <section className="bg-rose-50 w-full p-6 text-center mb-10">
        <h2 className="text-2xl font-serif text-rose-700 mb-6">Galeri Foto</h2>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-gray-200 h-40 flex items-center justify-center">
              <p className="text-gray-500">Foto {item}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="text-center p-6 max-w-md mx-auto mb-10">
        <h2 className="text-2xl font-serif text-rose-700 mb-6">Ucapan & Doa</h2>
        <form className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="Nama Anda" 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
          </div>
          <div>
            <textarea 
              placeholder="Ucapan & Doa" 
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="bg-rose-500 hover:bg-rose-600 text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Kirim Ucapan
          </button>
        </form>
        
        <div className="mt-8 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-rose-600">Ahmad</h4>
            <p className="text-gray-600">Selamat atas pernikahan kalian! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-rose-600">Siti</h4>
            <p className="text-gray-600">Barakallah untuk kedua mempelai. Semoga menjadi pasangan yang selalu bahagia.</p>
          </div>
        </div>
      </section>
      
      <footer className="bg-rose-100 w-full p-6 text-center">
        <p className="text-gray-600 mb-2">Terima kasih atas doa dan kehadiran Anda</p>
        <h2 className="text-2xl font-serif text-rose-700 mb-4">Nama Mempelai Wanita & Nama Mempelai Pria</h2>
        <p className="text-gray-500 text-sm">© 2025 Wedding Invitation</p>
      </footer>
    </div>
  );
};

export default MainContent;