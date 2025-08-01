import React, { useState, useEffect } from 'react';

const Registration: React.FC = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [isRegister, setIsRegister] = useState(true)

    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="flex flex-col w-full min-h-[45%] max-w-md p-8 bg-white rounded shadow-lg">
                    <h2 className='text-2xl font-bold mb-1 text-center'> {isRegister ? 'Register' : 'Login'}</h2>
                    <div className='flex-1 flex flex-grow flex-col justify-center'>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className='lg:p-2  w-full border rounded '/> <br/>
                        <input type='text' placeholder = "Password" value={pass} onChange={(e) => setPass(e.target.value)} className='lg:p-2 w-full border rounded mb-4'/>
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
            
            {/*
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="w-full max-w-sm p-6 bg-white rounded shadow">
                    {/*<h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                    <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" />
                    <input type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" />
                    <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Sign In</button>
                </div>
            </div>
            */}
        </div>)
};

export default Registration;