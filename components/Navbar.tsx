import Link from 'next/link';
import { details } from '../details.config';

export default function Navbar(): JSX.Element {
  return (
    <nav className='flex justify-between px-12 py-4 bg-slate-200'>
      <div>
        <a href='/'>Logo</a>
        <h1 className='sr-only'>{details.name}</h1>
      </div>
      <ul className='flex'>
        <li className='mx-4'>
          <Link href='/template'>Template</Link>
        </li>
        <li className='mx-4'>
          <Link href='/about'>About</Link>
        </li>
        <li className='mx-4'>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
      <button>Menu</button>
    </nav>
  );
}
