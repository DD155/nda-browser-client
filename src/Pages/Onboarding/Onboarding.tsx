import React, { useState, useEffect } from 'react'
import ProfessionGrid from './ProfessionGrid'

const FADE_DURATION = 500

const steps = [
    {
        title: 'What\'s your role in healthcare?',
        description: 'This helps us match you with others who understand your schedule and training stage.'
    },
    {
        title: 'What are you looking for?',
        description: 'Let us know your dating or connection goals — it improves match quality.'
    },
    {
        title: 'What\'s your schedule like?',
        description: 'We\'ll consider your availability when surfacing matches.'
    }
]

const Onboarding: React.FC = () => {
    const [started, setStarted] = useState(false)
    const [stepIndex, setStepIndex] = useState(0)
    const [fadeIn, setFadeIn] = useState(false)
    const [selectedProfession, setSelectedProfession] = useState<string | null>(null)

    const currentStep = steps[stepIndex]

    const renderOnStep = (step: number) => {
        switch(step) {
            case 0: // Choose profession step
                return (
                    <>
                        <div className='flex-grow flex items-center justify-center'>
                            <ProfessionGrid
                                selected={selectedProfession}
                                onSelect={(id) => setSelectedProfession(id)}
                            />
                        </div>
                    </>
                )
        }
    }  
    
    const handleStart = () => {
        setFadeIn(false)
        setTimeout(() => {
            setStarted(true)
            setFadeIn(true)
        }, FADE_DURATION)
    }

    useEffect(() => {
        const timeout = setTimeout(() => setFadeIn(true), 100)
        return () => clearTimeout(timeout)
    }, [started])

    return (
        <div className='min-h-screen bg-gray-100 flex items-center justify-center px-4'>
            <div
                className='w-full  max-w-6xl h-[85vh] bg-white rounded-xl shadow-xl p-10 flex flex-col transition-opacity duration-500'
                style={{ opacity: fadeIn ? 1 : 0 }}
            >
                <div className='flex-shrink-0 text-center mb-8'>
                    {!started ? (
                        <>
                            <h1 className='text-3xl font-bold mb-4'>Welcome to Onboarding</h1>
                            <p className='text-gray-600'>
                                We'll ask a few quick questions to help personalize your experience on the platform.
                            </p>
                        </>
                    ) : (
                        <>
                            <div className='text-sm text-gray-500 mb-2'>
                                Step {stepIndex + 1} of {steps.length}
                            </div>
                            <h2 className='text-2xl font-semibold mb-2'>{currentStep.title}</h2>
                            <p className='text-gray-600'>{currentStep.description}</p>
                        </>
                    )}
                </div>

                {started && (
                    renderOnStep(stepIndex)
                )}

                <div className='flex-grow' />
                <div className='flex-shrink-0 text-center'>
                    {!started ? 
                        <button onClick={handleStart} className='shadow-lg px-6 py-3 bg-white text-gray-800 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors ml-2'>
                            Get Started
                        </button>
                    :   <>
                            <button onClick={() => (stepIndex > 0) && setStepIndex(stepIndex - 1)} className='shadow-lg px-6 py-3 bg-black text-white border border-black rounded-full hover:bg-gray-900 transition-colors mr-2'> Back </button>
                            <button onClick={() => (stepIndex < steps.length - 1) && setStepIndex(stepIndex + 1)} className='shadow-lg px-6 py-3 bg-white text-gray-800 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors ml-2'> Next </button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Onboarding
