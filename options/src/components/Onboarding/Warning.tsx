import { AlertTriangle, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"

export default function WarningComp({setStep} :{setStep:React.Dispatch<React.SetStateAction<number>>
}) {
  return (
    <div className="  w-full text-white flex items-center justify-center p-4">
      <div className=" w-full space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Secret Recovery Phrase Warning
          </h1>
          <p className="text-gray-400 text-lg">
            On the next page, you will receive your secret recovery phrase.
          </p>
        </div>

        <div className="space-y-4">
          <Card className="bg-zinc-900 border-zinc-800 p-4 flex items-start gap-3">
            <AlertTriangle className="text-amber-400 mt-1" />
            <div>
              <span className="text-gray-300">This is the </span>
              <span className="font-bold text-red-400">ONLY</span>
              <span className="text-gray-300"> way to recover your account</span>
              <br />
              <span className="text-gray-300">if you lose access to your device or password.</span>
            </div>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 p-4 flex items-start gap-3">
            <Lock className="text-emerald-400 mt-1" />
            <div>
              <span className="text-gray-300">Write it down, store it in a safe place, and</span>
              <br />
              <span className="font-bold text-red-400">NEVER</span>
              <span className="text-gray-300"> share it with anyone.</span>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <Checkbox id="terms" className="mt-1" />
            <label htmlFor="terms" className="text-gray-300">
              I understand that I am responsible for saving my secret recovery phrase, and that it is the only way to recover my wallet.
            </label>
          </div>

          <Button className="w-full bg-white text-black hover:bg-gray-200" size="lg" 
           onClick={() => {setStep((prev) => prev+1)}}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}