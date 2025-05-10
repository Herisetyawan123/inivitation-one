"use client";

import { useState, useEffect } from 'react';
import Cover from '../components/Cover';
import MainContent from '../components/MainContent';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);

    // Animasi untuk menggeser cover ke atas
    const cover = document.getElementById('cover');
    if (cover) {
      cover.style.transform = 'translateY(-100%)';
    }

    // Aktifkan scroll setelah cover dibuka
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    // Nonaktifkan scroll saat pertama kali halaman dimuat
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Cover onOpen={handleOpen} coupleNames="Nama Mempelai Wanita & Nama Mempelai Pria" />
      <MainContent isOpen={isOpen} />
    </main>
  );
}