import Image from "next/image"
import { Coffee } from "@/types";

interface Props {
  coffee: Coffee;
}
export default function CoffeeCard({coffee}: Props) {
  return (
    <div className='max-w-sm w-full rounded shadow-lg bg-gray-50 flex flex-col'>
      {/* Image */}
        <div className="w-full h-60 relative">
          {coffee.uri && (
            <Image
              src={coffee.uri}
              alt={coffee.name}
              fill
              className="object-cover rounded-t"
            />
          )}
        </div>

        <div className="px-6 py-4 flex flex-1 flex-col justify-between">
          <div>

          {/* Name and Description */}
          <div className="mb-4">
            <h3 className='font-bold text-2xl mb-2 line-clamp-1'>{coffee.name}</h3>
            <p className='text-gray-700 text-base line-clamp-4'>{coffee.description}</p> {/* What should be the max text?*/}
          </div>

          {/* Labels */}
          <div className="grid grid-cols-3 items-center mb-4">
            <h4 className='col-span-1 text-lg'>Roast:</h4>
            <p className="col-span-2 text-gray-700">{coffee.roast}</p>
            
            <h4 className='col-span-1 text-lg'>Acidity:</h4>
            <p className="col-span-2 text-gray-700">{coffee.acidity}</p>
            
            <h4 className='col-span-1 text-lg'>Process:</h4>
            <p className="col-span-2 text-gray-700">{coffee.process}</p>
          </div>

          {/* Tags */}
          <div className="pb-2">
            {coffee.tags?.map(tag => (
              <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">{tag}</span>
            ))}
          </div>
            </div>

          <div className="pt-4">
            <button className='w-full py-2 rounded-lg text-xl bg-yellow-600 text-white font-semibold shadow-md transform transition duration-200 hover:scale-105'>View More</button>
          </div>

        </div>
    </div>
  );
}
