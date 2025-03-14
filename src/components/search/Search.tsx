import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import { translateText } from '../../services/translaText'
import { useMealStore } from '../../hooks/useMeal'


export const Search= () => {
    const [search, setSearch] = useState<string>('')

    const getMeal = useMealStore((state) => state);

    const hadleSearch = async () => {
      console.log(search)
        if(search === '') {
          getMeal.getMeal();
        }else{
          const translate = await translateText(search, 'en')
          console.log(translate)
          getMeal.getMealByName(translate)
            .catch(() => getMeal.getMealByPIngredient(translate));
        }
    }
  return (
    <div className='flex w-full'>
        <input className='border border-border rounded-4xl p-3 w-[30%] outline-secondary shadow-lg' 
          onChange={(e) => setSearch(e.target.value)} 
          type="text" placeholder='Buscar...'/>
        <button className='cursor-pointer' onClick={hadleSearch} type="submit"><MagnifyingGlassIcon className='h-[50px]'/></button>
    </div>
  )
}

