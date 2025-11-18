import CoffeeCard from '../components/Results/CoffeeCard';
import FilterMenu from '@/components/Results/FilterMenu';

export default function Home() {
  return (
    <div className='flex gap-16 py-6'>
      <FilterMenu />
      
      <div className='flex-1'>
        <h2 className='mb-4 text-xl'>Coffee Results</h2>
        <div className='grid gap-4'>
          <CoffeeCard />
        </div>
      </div>
    </div>
  );
}