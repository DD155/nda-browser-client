import React, { useState, useEffect } from 'react';
import { MdErrorOutline } from 'react-icons/md';

type StrengthLevel = {
    label:string,
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
        0: { label: 'Empty',   color: 'bg-red-500',     width: '0%'},
        1: { label: 'Invalid', color: 'bg-red-500',     width: '10%'},
        2: { label: 'Weak',    color: 'bg-red-500',     width: '35%' },
        3: { label: 'Okay',    color: 'bg-yellow-500',  width: '65%'},
        4: { label: 'Okay',    color: 'bg-yellow-500',  width: '80%' },
        5: { label: 'Strong',  color: 'bg-green-500',   width: '100%' },
    }
    return levels[strength]
}

const Registration: React.FC = () => {
    const [firstName, setFirsrtName] = useState<string>('')
    const [lastName, setlastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const [verifyPass, setVerifyPass] = useState<string>('')
    const [isRegister, setIsRegister] = useState<boolean>(true) // toggle conditional fields
    
    const passwordStrengthStyle:StrengthLevel = getPasswordStrength(pass)                                        

    const getTestApi = async () => {
        fetch('https://rda-browser-server.onrender.com/api/Accounts/', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => console.log(json))
    }

    const validateRegistration = () => {
        if (passwordStrengthStyle.label === 'Strong' && verifyPass === pass) {
            console.log(`
                Email: ${email},
                First Name: ${firstName},
                Last Name: ${lastName},
                Password: ${pass},
                Repeat Password: ${verifyPass}
            `)
        }
    }

    useEffect(() => {
        getTestApi()
    }, [])

    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="flex flex-col w-full min-h-[50%] max-w-md p-8 bg-white rounded shadow-lg min-w-[460px] sm:min-w-[560px] lg:min-w-[660px]">
                    <h2 className='text-2xl font-bold mb-6 text-center'> {isRegister ? 'Register' : 'Login'}</h2>
                    <div className='flex-1 flex flex-grow flex-col justify-center gap-y-4'> {/* Container for Inputs */}
                        <input type="email" placeholder="Email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className='lg:p-2  w-full border rounded '/>
                        { isRegister && <div className='flex gap-x-4'> {/* Container for First/Last */}
                            <div className='flex-1'>
                                <input className='lg:p-2 w-full border rounded' placeholder="First Name" value={firstName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirsrtName(e.target.value)}></input>
                            </div>
                            <div className='flex-1'>
                                <input className='lg:p-2 w-full border rounded' placeholder="Last Name" value={lastName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setlastName(e.target.value)}></input>
                            </div>
                        </div>  } 
                        <div className='flex flex-col gap-y-4'> {/* Password Container */}
                            <input type='password' placeholder = "Password" value={pass} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPass(e.target.value)} className='flex-1 lg:p-2 w-full border rounded-t'/>
                            <div className='-mt-4 flex-1 h-2 w-full bg-gray-200'> 
                                <div className={`h-2 rounded transition-all duration-300 ${passwordStrengthStyle.color}`} 
                                style={{width:`${passwordStrengthStyle.width}`}}
                                ></div>
                            </div>
                            { (pass.length > 0 && passwordStrengthStyle.label !== 'Strong') && 
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
                            <input type='password' placeholder = "Verify Password" value={verifyPass} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVerifyPass(e.target.value)} className='flex-1 lg:p-2 w-full border rounded'/>
                            { ((verifyPass.length > 0) && pass !== verifyPass) && <p className='text-red-500'> Passwords do not match </p> }
                        </div>
                        <button onClick={validateRegistration} className='w-full bg-black text-white py-2 border rounded'> { isRegister ? 'Register' : 'Login' } </button>
                        <div>
                            <h6 className='inline'> { isRegister ? 'Already have an account?' : 'Need a new account?' } </h6> 
                            <button onClick={() => setIsRegister(!isRegister)} className='inline'> 
                                <p className='hover:text-blue-600'> { isRegister ? 'Click here to login.' : 'Click here to create one.' } </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
};

export default Registration;