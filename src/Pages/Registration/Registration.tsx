import React, { useState, useEffect } from 'react';

const Registration: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const [isRegister, setIsRegister] = useState<boolean>(true)

    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="flex flex-col w-full min-h-[40%] max-w-md p-8 bg-white rounded shadow-lg">
                    <h2 className='text-2xl font-bold mb-10 text-center'> {isRegister ? 'Register' : 'Login'}</h2>
                    <div className='flex-1 flex flex-grow flex-col justify-center'>
                        <input type="email" placeholder="Email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className='lg:p-2  w-full border rounded '/> <br/>
                        <input type='text' placeholder = "Password" value={pass} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPass(e.target.value)} className='lg:p-2 w-full border rounded mb-4'/>
                        <button className='w-full bg-black text-white py-2 mb-4 border rounded '> { isRegister ? 'Register' : 'Login' } </button>
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