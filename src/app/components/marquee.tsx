
import React from 'react';
import Image from 'next/image';

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="animate-marquee flex space-x-8">
       
        <Image src="/images/spotify.png" alt='spotify'height={150} width={150}/>

        <Image src="/images/spotify.png" alt='spotify'height={150} width={150}/>
        <Image src="/images/spotify.png" alt='spotify'height={150} width={150}/>
        <Image src="/images/spotify.png" alt='spotify'height={150} width={150}/>
        <Image src="/images/spotify.png" alt='spotify'height={150} width={150}/>
        <Image src="/images/spotify.png" alt='spotify'height={150} width={150}/>
        <Image src="/images/spotify.png" alt='spotify'height={150} width={150}/>
        <Image src="/images/spotify.png" alt='spotify'height={150} width={150}/>

       
      </div>
    </div>
  );
};

export default Marquee;
