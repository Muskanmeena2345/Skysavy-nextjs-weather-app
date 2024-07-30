import React from 'react';
import spinning from '..public/spinning.gif'
import Image from 'next/image';
import React from 'react';


const ComponentName = () => {
  return <>
            <Image className='w-[200px] m-auto block' src={spinning.gif} alt='loading'/>

</>;
};

export default ComponentName;