import { config } from 'process';
import { details } from '../details.config';

export default function Footer(): JSX.Element {
  return (
    <footer className='flex py-4 px-12 bg-slate-200'>
      <ul className='flex'>
        <li className='mx-4'>
          <a>Item 1</a>
        </li>
        <li className='mx-4'>
          <a>Item 2</a>
        </li>
        <li className='mx-4'>
          <a>Item 3</a>
        </li>
        <li className='mx-4'>{details.legalName} 2022</li>
      </ul>
    </footer>
  );
}
