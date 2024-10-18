import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Eye, EyeOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Separator } from "@/components/ui/separator"


function WalletSetup() {
  const [currentStep, setCurrentStep] = useState(1)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [recoveryPhrase] = useState(generateRecoveryPhrase())
  const [showRecoveryPhrase, setShowRecoveryPhrase] = useState(false)
  const [savedRecoveryPhrase, setSavedRecoveryPhrase] = useState(false)
  const navigate = useNavigate();
  function generateRecoveryPhrase() {
    // This is a mock function. In a real app, use a secure method to generate the recovery phrase.
    const words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'imbe', 'jackfruit', 'kiwi', 'lemon']
    return words.sort(() => 0.5 - Math.random()).slice(0, 12)
  }

  function handleContinue() {
    if (currentStep === 1 && password === confirmPassword && password.length > 0 && agreedToTerms) {
      setCurrentStep(2)
    } else if (currentStep === 2 && savedRecoveryPhrase) {
      setCurrentStep(3)
    }
     else if(currentStep === 3){
       navigate('/wallet')
     }

  }

  return (
    <div className='h-[600px] w-[350px] bg-[#222222] flex flex-col justify-start items-center gap-y-6 px-3 text-white'>
      <header className='flex flex-col w-full justify-center items-center'>
       <div className='flex w-full justify-between items-center pt-4'>
       {currentStep > 1 && (
            <ArrowLeft className="h-4 w-4 cursor-pointer" onClick={() => setCurrentStep(prev => prev - 1)} />
        )}
        <div className='flex-grow flex justify-center gap-x-2'>
          {[1, 2, 3].map(step => (
            <span key={step} className={`w-2 h-2 rounded-full ${currentStep >= step ? 'bg-green-500' : 'bg-gray-500'}`}></span>
          ))}
        </div>
       </div>

        <Separator  className='mt-4'/>

      </header>

      {currentStep === 1 && (
        <>
          <div className='flex flex-col gap-y-2'>
            <h2 className='text-2xl font-bold'>Create a password</h2>
            <p>You will use this to unlock your wallet.</p>
          </div>

          <div className='flex flex-col gap-y-2 w-full'>
            <Input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className='flex items-center gap-x-2'>
            <Checkbox
            className='border-white'
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            />
            <label htmlFor="terms" className='text-sm '>
              I agree to the Terms of Service
            </label>
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
          <div className='flex flex-col gap-y-2 items-center'>
            <h2 className='text-2xl font-bold'>Secret Recovery Phrase</h2>
            <p className='text-yellow-400 text-center'>
              This phrase is the ONLY way to recover your wallet. Do NOT share it with anyone!
            </p>
          </div>

          <div className='grid grid-cols-3 gap-2 w-full'>
            {recoveryPhrase.map((word, index) => (
              <div key={index} className='bg-gray-800 p-2 rounded'>
                {showRecoveryPhrase ? word : '••••'}
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={() => setShowRecoveryPhrase(!showRecoveryPhrase)}
            className='flex items-center gap-x-2 bg-white text-black'
          >
            {showRecoveryPhrase ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showRecoveryPhrase ? 'Hide' : 'Reveal'} Recovery Phrase
          </Button>

          <div className='flex items-center gap-x-2'>
            <Checkbox
              className='border-white'
              id="saved"
              checked={savedRecoveryPhrase}
              onCheckedChange={(checked) => setSavedRecoveryPhrase(checked as boolean)}
            />
            <label htmlFor="saved" className='text-sm'>
              I saved my Secret Recovery Phrase
            </label>
          </div>
        </>
      )}

      {currentStep === 3 && (
        <div className='flex flex-col items-center gap-y-6'>
          <img src='cryptowallet.png' className="h-24 w-24 text-purple-500" />
          <h2 className='text-3xl font-bold'>You're all done!</h2>
          <p className='text-center'>You can now fully enjoy your wallet.</p>
        </div>
      )}

      <Button
        className='w-full'
        onClick={handleContinue}
        disabled={(currentStep === 1 && (password !== confirmPassword || password.length === 0 || !agreedToTerms)) ||
                  (currentStep === 2 && !savedRecoveryPhrase)}
      >
        {currentStep === 3 ? 'Get Started' : 'Continue'}
      </Button>
    </div>
  )
}

export default WalletSetup