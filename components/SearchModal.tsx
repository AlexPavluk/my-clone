import React, { useCallback, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';

import { isEmpty } from 'lodash';
import Input from '@/components/Input'
import SearchItems from './SearchItems';

interface InfoSearchModalProps {
  visible?: boolean;
  onClose: any;
  data: any;
}


const Search: React.FC<InfoSearchModalProps> = ({ data, visible, onClose }) => {
  const [isVisible, setIsVible] = useState<boolean>(!!visible);
  const [serchInputValue, setSerchInputValue] = useState('')
  const fileredArray = data.filter((movie:any) => movie.title === serchInputValue)


  useEffect(() => {
    setIsVible(!!visible)
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVible(false)
    setTimeout(() => {
      onClose();
    }, 300)
  }, [onClose])

  if (!visible) {
    return null;
  }

  if (isEmpty(data)) {
    null
  }

  return (
    <>
      <div className=' bg-black absolute sm:right-[200px] lg:right-[240px] top-2 z-50 rounded-md'>
        <div className="flex items-center ml-[35px] justify-center">
          <div className="w-full">
            <Input
              label="Search film"
              onChange={(ev: any) => setSerchInputValue(ev.target.value)}
              id='search'
              type="text"
              value={serchInputValue} />
          </div>
          <div
            className="
           cursor-pointer           
           w-10
           h-10
           top-9
           right-3
           lg:h-[52px]
           lg:w-[50px]
           rounded-lg
           bg-opacity-70
           flex
           items-center
           justify-center
           transition
           "
            onClick={() => console.log('i work')}
          >
            <AiOutlineClose onClick={handleClose} className='text-white' size={20} />
          </div>
        </div>
      </div>
      <div>
          <SearchItems value={serchInputValue} data={data}/>
      </div>
    </>
  )
}

export default Search