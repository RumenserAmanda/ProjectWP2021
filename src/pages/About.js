import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return(
    <>
      <Navigation />

      <div className="container my-5">
        <h1>About this Application</h1>
        <p className="fs-5 fw-bold">Aplikasi ini merupakan Aplikasi mencari resep makanan. Cari resep apa yang akan anda buat dan secara detail akan dijelaskan semua yang anda perlukan</p>
        <p className="fs-5 fst-italic">Rumenser, Amanda Putri Hillary Christy</p>
        <p className="fs-5 fst-italic">Sistem Informasi</p>
        <p className="fs-5 fst-italic">NIM: 105011910023</p>
        <p className="fs-5 fst-italic">Final Project Web Progamming</p>
      </div>

      <Footer />
    </>
  );
}

export default About;
