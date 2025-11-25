import CoffeeCard from '../components/Results/CoffeeCard';
import FilterMenu from '@/components/Results/FilterMenu';

export default function Home() {
  return (
    <main className='p-4 w-full max-w-7xl mx-auto'>

      <header className=' mb-10 text-center '>
        <h2 className='text-4xl font-bold'>Coffee List</h2>
      </header>
      <div className="flex gap-8">

        <aside className='w-64 shrink-0 hidden sm:block'>
          <FilterMenu />
        </aside>

        <article className='flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 gap-10'>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </article>

      </div>

    </main>
  );
}