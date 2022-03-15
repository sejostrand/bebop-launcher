import Image from 'next/image';

export default function Hero(): JSX.Element {
  return (
    <div
      data-scroll-section
      className='flex justify-center relative h-96 overflow-hidden'
    >
      <div className='absolute top-0 left-0 h-[calc(11400vw/256)] w-full'>
        <Image src='/background.jpg' layout='fill' />
      </div>
      <p>This is a hero</p>
    </div>
  );
}
