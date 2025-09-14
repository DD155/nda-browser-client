import React from 'react'
import { FaCocktail, FaHeart } from 'react-icons/fa'
import { GiBigDiamondRing } from 'react-icons/gi'

type Status = {
    id: string
    label: string
    description: string,
    icon: JSX.Element | null
}

type StatusGridProps = {
    selected: string | null
    onSelect: (id: string) => void
}

const ICON_SIZE = 28

const status: Status[] = [
    {
        id: 'STR',
        label: 'Short Term Relationship',
        description: 'Casual dating, no pressure',
        icon: <FaCocktail size={ICON_SIZE}/>
    },
    {
        id: 'LTR',
        label: 'Long Term Relationship',
        description: 'Looking for a serious relationship',
        icon: <GiBigDiamondRing size={ICON_SIZE}/>
    },
    {
        id: 'OPEN',
        label: 'Open to Both',
        description: 'Open to see where it goes',
        icon: <FaHeart size={ICON_SIZE}/>
    }
]

const StatusGrid: React.FC<StatusGridProps> = ({ selected, onSelect }) => {
    return (
        <div className='w-full grid grid-rows-3 place-items-center gap-8'>
            {status.map((item) => (
                <button
                    key={item.id}
                    onClick={() => onSelect(item.id)}
                    className={`flex items-center w-1/3 justify-center text-center transition border rounded-xl shadow-md p-6 
                        ${selected === item.id
                            ? 'bg-blue-100 border-blue-500 text-blue-700 shadow-md'
                            : 'bg-white border-gray-200 hover:bg-gray-50'}
                    `}
                    aria-pressed={selected === item.id}
                >
                    <div className='w-full grid grid-cols-[20%_80%]'> 
                        <div className='flex items-center justify-center'> {item.icon} </div>
                        <div className='grid grid-row-2'>
                            <span className='text-lg font-medium'>{item.label}</span>
                            <span className='text-sm'>{item.description}</span>
                        </div>
                    </div>
                </button>
            ))}
        </div>
    )
}

export default StatusGrid
