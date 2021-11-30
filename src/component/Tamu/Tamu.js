import React from 'react';

const Tamu = () => {
  return (
    <div className="flex items-center justify-center flex-col border-2 border-dotted border-green m-4 p-3">
      <h3 className="text-center"><b>6 tamu</b> merespon akan datang, <br/>kirim konfirmasi</h3>
      <button className="rounded-md p-4 mt-5 bg-green text-white text-center uppercase hover:bg-greenDark transition-all ease-in-out duration-500">Konfirmasi Kehadiran</button>
    </div>
  );
}

export default Tamu;
