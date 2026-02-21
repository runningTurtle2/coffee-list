import CoffeeCard from '../components/Results/CoffeeCard';
import FilterMenu from '@/components/Results/FilterMenu';
import { coffees } from '@/lib/data/data';


export default async function Home() {
  

          


  return (
    <div className='flex-1 p-4 w-full max-w-7xl mx-auto px-6'>

      <div className="flex gap-8">

        {/* <aside className='w-64 shrink-0 hidden sm:block'>
          <FilterMenu />
        </aside> */}

        <article className='flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 gap-10'>
          
          {coffees.map(c => (
            <CoffeeCard key={c.id} coffee={c}/>
          ))}
          
        </article>

      </div>

    </div>
  );
}