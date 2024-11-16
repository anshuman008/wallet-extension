"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Welcome from "./components/Onboarding/Welcome"
import NetworkSlection from "./components/Onboarding/NetworkSlection"
import PasswordSet from "./components/Onboarding/PasswordSet"
import RecoveryPhrase from "./components/Onboarding/RecoveryPhrase"
import FinalStep from "./components/Onboarding/FinalStep"
import WarningComp from "./components/Onboarding/Warning"

export default function Component() {
  const [step, setStep] = useState(0)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [selectedNetwork, setSelectedNetwork] = useState("")
  const [savedPhrase, setSavedPhrase] = useState(false)

 


  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const steps = [
    // Welcome Step
    {
      name: "Welcome",
      page: <Welcome setStep = {setStep} />
    },

    {
      name: "Network",
      page: <NetworkSlection setStep = {setStep} />
    },
    {
      name: "Recover Page Warning",
      page: <WarningComp setStep = {setStep}/>
    },

    {
      name: "Recovery",
      page: <RecoveryPhrase setStep = {setStep}/>
    },
    {
      name: "Password",
      page: <PasswordSet setStep = {setStep}/>
    },

    {
      name: "Final step",
      page: <FinalStep/>
    },
  ]

  return (
    <div className="min-h-screen bg-[#0e0f14] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <AnimatePresence mode="wait" custom={step}>
          <motion.div
            key={step}
            custom={step}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            {steps[step].page}
          </motion.div>
        </AnimatePresence>
        
        {/* Step indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                index === step ? "bg-blue-600" : "bg-blue-600/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}