import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { BsPlayFill } from 'react-icons/bs';
import { BiChevronDown } from 'react-icons/bi';
import FavoriteButton from './FavoriteButton';
import useInfoModal from '@/hooks/useInfoModal';

interface MovieCardsProps {
    data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardsProps> = ({
    data
}) => {
    const router = useRouter();
    const { openModal } = useInfoModal();

    const handleOpenModal = useCallback(() => {
        openModal(data?.id)
    }, [openModal, data?.id])

    return (
        <div className='group bg-zinc-900 col-span relative h-12[vw]'>
            <img
                className='
           cursor-pointer
           object-cover
           transition
           duration
           shadow-xl
           rounded-md
           group-hover:opacity-90
           sm:group-hover:opacity-0
           delay-300
           w-auto
           h-auto
           lg:w-full
           lg:h-[12vw]
        '
                src={data.thumbnailUrl} alt="movie-img" />
            <div className="
        opacity-0
        absolute
        top-0
        transition
        duration-200
        z-10
        visible
        delay-300
        w-full
        scale-0
        group-hover:scale-100        
        lg:group-hover:translate-y-[2vw]
        lg:group-hover:translate-x-[2vw]
        group-hover:translate-y-0
        group-hover:translate-x-0
        group-hover:opacity-100
        ">
                <img
                    className='
             cursore-pointer
             object-cover
             transition
             duration
             shadow-xl 
             rounded-t-md
             w-full
             lg:h-[12vw]
             h-[35vw]
             '
                    src={data.thumbnailUrl} alt="Thumbnail" />
                <div className="
             z-10
             bg-zinc-800
             p-2
             lg:p-4
             absolute
             w-full
             transition
             shadow-md
             rounded-b-md
             ">

                    <div className="flex flex-row items-center gap-3">
                        <div                     
                        onClick={() => router.push(`/watch/${data?.id}`)}
                        className="
                    cursor-pointer
                    w-6
                    h-6
                    lg:w-10
                    lg:h-10
                    bg-white
                    rounded-full
                    flex
                    justify-center
                    items-center
                    transition
                    hover:bg-netural-300
                    ">
                            <BsPlayFill size={30} />
                        </div>
                        <FavoriteButton movieId={data?.id}/>
                        <div 
                        onClick={handleOpenModal}
                        className="
                        cursor-pointer 
                        ml-auto 
                        group/item 
                        w-6 
                        h-6 
                        lg:h-10 
                        lg:w-10
                        border-white 
                        border-2 
                        rounded-full 
                        flex 
                        justify-center 
                        items-center 
                        transition 
                        hover:border-neutral-300">
                            <BiChevronDown className='text-white group-hover/item:text-neutral-300' size={30}/>
                        </div>
                    </div>
                    <p className="text-green-400 font-semibold mt-4">
                        New <span className="text-white">2023</span>
                    </p>

                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
                    </div>
                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard