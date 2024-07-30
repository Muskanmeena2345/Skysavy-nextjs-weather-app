import Image from 'next/image';
import React from 'react';

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-white z-10'>
      <div className='relative flex justify-between pt-12'>
        <div className='flex flex-col items-center'>
          <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={`Weather icon for ${data.weather[0].description}`}
            width={100}
            height={100}
          />
          <p className='text-2xl text-white'>{data.weather[0].main}</p>
        </div>
        <p className='text-9xl text-white'>{data.main.temp.toFixed(0)}&#176;</p>
      </div>
      {/* bottom */}
      <div className='bg-black/50 relative p-8 rounded-md'>
        <p className='text-2xl text-center pb-6 text-white'>Weather in {data.name}</p>
        <div className='flex justify-between text-center'>
          <div>
            <p className='font-bold text-2xl text-white'>{data.main.feels_like.toFixed(0)}&#176;</p>
            <p className='text-xl text-white'>Feels Like</p>
          </div>
          <div>
            <p className='font-bold text-2xl text-white'>{data.main.humidity}</p>
            <p className='text-xl text-white'>Humidity</p>
          </div>
          <div>
            <p className='font-bold text-2xl text-white'>{data.wind.speed.toFixed(0)}MPH</p>
            <p className='text-xl text-white'>Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;