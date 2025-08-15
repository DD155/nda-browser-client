import React from 'react'
import { MdMedicalServices, MdLocalPharmacy, MdOutlineMedicalServices, MdPerson } from 'react-icons/md'
import { GiToothbrush } from 'react-icons/gi'

type Profession = {
    id: string
    label: string
    icon: JSX.Element
}

type ProfessionGridProps = {
    selected: string | null
    onSelect: (id: string) => void
}

const ICON_SIZE = 40

const professions: Profession[] = [
    {
        id: 'medicine',
        label: 'Medicine',
        icon: <MdMedicalServices size={ICON_SIZE} />
    },
    {
        id: 'pharmacy',
        label: 'Pharmacy',
        icon: <MdLocalPharmacy size={ICON_SIZE} />
    },
    {
        id: 'dental',
        label: 'Dental',
        icon: <GiToothbrush size={ICON_SIZE} />
    },
    {
        id: 'nursing',
        label: 'Nursing',
        icon: <MdOutlineMedicalServices size={ICON_SIZE} />
    }
]

const ProfessionGrid: React.FC<ProfessionGridProps> = ({ selected, onSelect }) => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-2 gap-4'>
            {professions.map((item) => (
                <button
                    key={item.id}
                    onClick={() => onSelect(item.id)}
                    className={`flex flex-col items-center justify-center border rounded-xl transition text-center shadow-md p-12 
                        ${selected === item.id
                            ? 'bg-blue-100 border-blue-500 text-blue-700 shadow-md'
                            : 'bg-white border-gray-200 hover:bg-gray-50'}
                    `}
                    aria-pressed={selected === item.id}
                >
                    <div className='mb-1'>{item.icon}</div>
                    <span className='text-sm font-medium'>{item.label}</span>
                </button>
            ))}
        </div>
    )
}

export default ProfessionGrid
