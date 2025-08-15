import { useEffect } from "react"
import { MdErrorOutline } from "react-icons/md"

type PasswordCheckerProps = {
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setIsValidPass: React.Dispatch<React.SetStateAction<boolean>>
}

type StrengthLevel = {
    valid:boolean,
    color:string,
    width:string
}

const getPasswordStrength = (password:string):StrengthLevel => {
    const rules = [
        password.length > 0,                
        password.length >= 8,              
        /[A-Z]/.test(password),            
        /[0-9]/.test(password),            
        /[^A-Za-z0-9]/.test(password),     // special char
    ]
    
    const strength = rules.filter(Boolean).length
      
    const levels: Record<number, StrengthLevel> = {
        0: { valid: false,   color: 'bg-red-500',     width: '0%'},
        1: { valid: false, color: 'bg-red-500',     width: '10%'},
        2: { valid: false,    color: 'bg-red-500',     width: '35%' },
        3: { valid: false,    color: 'bg-yellow-500',  width: '65%'},
        4: { valid: false,    color: 'bg-yellow-500',  width: '80%' },
        5: { valid: true,  color: 'bg-green-500',   width: '100%' },
    }
    return levels[strength]
}

const PasswordChecker = ({ password, setPassword, setIsValidPass }: PasswordCheckerProps) => {
    const strength:StrengthLevel = getPasswordStrength(password)

    useEffect(() => {
        setIsValidPass(strength.valid)
    }, [password])

    return <div className='flex flex-col gap-y-4'> {/* Password Container */}
    <input type='password' placeholder = "Password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className='flex-1 lg:p-2 w-full border rounded-t'/>
    {/* Only render on registration */} 
    <div className='-mt-4 flex-1 h-2 w-full bg-gray-200'>
        <div className={`h-2 rounded transition-all duration-300 ${strength.color}`} 
        style={{width:`${strength.width}`}}
        ></div>
    </div>
    { (password.length > 0 && !strength.valid) &&
    <div className='p-4 bg-red-100 rounded-lg'>
        <div className="flex items-center space-x-2">
            <MdErrorOutline size={24}/> <p> Please check that your password includes these things: </p>
        </div>
        <ul className='list-disc pl-6'>
            <li>At least 8 characters long</li>
            <li>Contains a capital letter and number</li>
            <li>Contains a symbol (!, @, #, $, %, etc.)</li>
        </ul>
    </div>
    }
</div>
}

export default PasswordChecker