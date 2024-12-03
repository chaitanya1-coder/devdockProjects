import { ConnectButton } from '@rainbow-me/rainbowkit';
import ListingForm from '../components/ListingForm';
import ListingsList from '../components/ListingsList';

export default function Home() {
  return (
    <main className='container mx-auto px-4'>
      <nav className='py-4'>
        <ConnectButton />
      </nav>
      
      <div className='grid grid-cols-1 gap-8 mt-8'>
        <ListingForm />
        <ListingsList />
      </div>
    </main>
  );
}