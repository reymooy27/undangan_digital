import React from 'react';

const Lokasi = () => {
  return (
    <div className="mx-5 my-20 flex flex-col justify-center">
      <div className="border-4 border-green rounded-md mb-4">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.0089759547602!2d123.6224761387614!3d-10.162816324133388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8f3374c17ff6138a!2sSEKOLAH%20TINGGI%20ILMU%20KESEHATAN%20CITRA%20HUSADA%20MANDIRI%20KUPANG%20(STIKES%20CHMK)!5e0!3m2!1sid!2sid!4v1637818849627!5m2!1sid!2sid" 
          width="100%" 
          height="500px" 
          allowFullScreen="" 
          loading="lazy">
  
        </iframe>
      </div>
      <span className="text-center">Jalan Pondok Merah Kuning Blok M No 22, Kaliabang tengah, Bekasi Utara</span>
      <button className="w-60 h-12 mx-auto flex items-center justify-center my-3 rounded-3xl p-4 bg-green text-white text-center uppercase hover:bg-greenDark transition-all ease-in-out duration-500">Lihat Lokasi</button>
    </div>
  );
}

export default Lokasi;
