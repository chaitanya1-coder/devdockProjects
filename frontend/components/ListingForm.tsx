import { useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { parseEther } from 'viem';
import { TRADING_CONTRACT_ADDRESS, TRADING_ABI } from '../lib/constants';

export default function ListingForm() {
  const [price, setPrice] = useState('');
  const [details, setDetails] = useState('');
  
  const { config } = usePrepareContractWrite({
    address: TRADING_CONTRACT_ADDRESS,
    abi: TRADING_ABI,
    functionName: 'createListing',
    args: [parseEther(price || '0'), details, false, '0x0', 0]
  });
  
  const { write } = useContractWrite(config);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (write) {
      write();
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <input
        type='number'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder='Price in USDC'
        className='w-full p-2 border rounded'
      />
      <textarea
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder='Item Details'
        className='w-full p-2 border rounded'
      />
      <button
        type='submit'
        className='w-full bg-blue-500 text-white p-2 rounded'
      >
        Create Listing
      </button>
    </form>
  );
}