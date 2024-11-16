'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { EyeOff, Check, Copy } from 'lucide-react'

export default function Component({setStep} :{setStep :React.Dispatch<React.SetStateAction<number>>}) {
  const [savedPhrase, setSavedPhrase] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const recoveryPhrase = [
    'actor', 'asset', 'palm', 'legend', 'lecture', 'laugh',
    'chuckle', 'subject', 'unknown', 'great', 'regular', 'grant'
  ]

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(recoveryPhrase.join(' '))
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }, [recoveryPhrase])

  return (
    <div className=" text-white flex items-center justify-center p-4">
      <motion.div
        key="recovery"
        className="space-y-6 max-w-md w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <h2 className="text-4xl font-bold text-center">
          Secret Recovery Phrase
        </h2>
        <p className="text-center text-gray-400 text-lg">
          Save these words in a safe place.
        </p>
        <Card 
          className="p-6 bg-gray-800 border-none backdrop-blur-md backdrop-filter relative overflow-hidden"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          onClick={copyToClipboard}
        >
          <motion.div 
            className="absolute inset-0 bg-gray-800/5 flex items-center justify-center z-10 cursor-pointer backdrop-blur-[8px]"
            initial={{ opacity: 1 }}
            animate={{ opacity: isVisible ? 0 : 1, backdropFilter: isVisible ? "blur(0px)" : "blur(8px)" }}
            transition={{ duration: 0.3 }}
          >
            <EyeOff className="w-12 h-12 text-gray-400" />
          </motion.div>
          <motion.div
            className="grid grid-cols-3 gap-3 relative"
            initial={{ filter: "blur(8px)" }}
            animate={{ filter: isVisible ? "blur(0px)" : "blur(8px)" }}
            transition={{ duration: 0.3 }}
          >
            {recoveryPhrase.map((word, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 space-x-2 p-2 bg-gray-700 rounded-md"
                initial={{ opacity: 0.5, scale: 0.9 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0.5, 
                  scale: isVisible ? 1 : 0.9,
                  filter: isVisible ? "blur(0px)" : "blur(4px)"
                }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <span className="text-gray-400">{index + 1}</span>
                <span className="font-medium text-slate-300">{word}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="mt-4 text-center text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {isCopied ? (
              <span className="flex items-center justify-center">
                <Check className="w-4 h-4 mr-2" /> Copied to clipboard
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <Copy className="w-4 h-4 mr-2" /> Click to copy all words
              </span>
            )}
          </motion.div>
        </Card>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="saved"
             className=''
            checked={savedPhrase}
            onCheckedChange={(checked) => setSavedPhrase(checked as boolean)}
          />
          <label htmlFor="saved" className="text-md text-gray-400">
            I saved my secret recovery phrase
          </label>
        </div>
        <Button
          className="w-full bg-white hover:bg-slate-200 text-black p-6 rounded-xl"
          disabled={!savedPhrase}
          onClick={() => {setStep((prev) => prev+1)}}
        >
          Next
        </Button>
      </motion.div>
    </div>
  )
}