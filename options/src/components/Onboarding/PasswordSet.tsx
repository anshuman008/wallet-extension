'use client'

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function Component({setStep} :{setStep: React.Dispatch<React.SetStateAction<number>>}) {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const isPasswordValid = password.length >= 8
  const passwordsMatch = password === confirmPassword
  const isFormValid = isPasswordValid && passwordsMatch && agreed


  return (
    <div className="min-h-screen  text-white flex items-center justify-center p-4">
      <div className="w-full  space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Create a Password</h1>
          <p className="text-gray-400">
            It should be at least 8 characters.
            <br />
            You&apos;ll need this to unlock Backpack.
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`bg-gray-900 border-2 h-12 pl-4 pr-12 ${
                password && !isPasswordValid ? 'border-red-500' : 'border-gray-700'
              }`}
              placeholder="Enter password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="relative">
            <Input
              // type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-gray-900 border-2 border-gray-700 h-12 pl-4 pr-12"
              placeholder="Confirm password"
            />
          </div>

          {password && !isPasswordValid && (
            <p className="text-red-500 text-sm">
              Your password must be at least 8 characters.
            </p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={agreed}
            onCheckedChange={(checked) => setAgreed(checked as boolean)}
            className="border-gray-700 data-[state=checked]:bg-blue-600"
          />
          <label htmlFor="terms" className="text-gray-400">
               I agree to the <span className='text-blue-500'>Terms of Service</span>
          </label>
        </div>

        <Button
         onClick={() => setStep((prev) => prev+1)}
          disabled={!isFormValid}
          className="w-full h-12 bg-gray-200 text-black hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </Button>

        <div className="flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 4 ? 'bg-blue-600' : 'bg-blue-600/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}