import React, { useState, useEffect } from 'react';
import { MdErrorOutline } from 'react-icons/md';
import PasswordChecker from './PasswordChecker';

const Registration: React.FC = () => {
    const [firstName, setFirsrtName] = useState<string>('')
    const [lastName, setlastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const [verifyPass, setVerifyPass] = useState<string>('')
    const [isRegister, setIsRegister] = useState<boolean>(true) // toggle conditional fields
    const [isValidPass, setIsValidPass] = useState<boolean>(false)
    
    const getTestApi = async () => {
        fetch('https://rda-browser-server.onrender.com/api/Accounts/', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => console.log(json))
    } 

    const validateRegistration = () => {
        if (isValidPass && verifyPass === pass) {
            console.log(`
                Email: ${email},
                First Name: ${firstName},
                Last Name: ${lastName},
                Password: ${pass},
                Repeat Password: ${verifyPass}
            `)
        }
    }

    console.log(isValidPass)

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
                        {isRegister &&
                        <>
                            <PasswordChecker password={pass} setPassword={setPass} setIsValidPass={setIsValidPass}/>
                            <input type='password' placeholder = "Verify Password" value={verifyPass} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVerifyPass(e.target.value)} className='flex-1 lg:p-2 w-full border rounded'/>
                            { ((verifyPass.length > 0) && pass !== verifyPass) && <p className='text-red-500'> Passwords do not match </p> }
                        </>
                        }
                        </div>
                        <button onClick={validateRegistration} className='w-full bg-black hover:scale-[1.02] transition-transform duration-200 text-white py-2 border rounded'> { isRegister ? 'Register' : 'Login' } </button>
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