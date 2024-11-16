import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DiscIcon as Discord, Lock, Twitter } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen  text-white flex flex-col items-center justify-center p-4">
      <div className="fixed top-4 right-4">
        <Card className="bg-blue-500 border-none p-4">
          <p className="text-sm text-white">
            Pin the Backpack Extension
            <br />
            Click 🧩 and 📌
          </p>
        </Card>
      </div>

      <div className="max-w-2xl w-full space-y-16 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">You&apos;re all good!</h1>
          <p className="text-gray-400">
            Open Backpack with{" "}
            <span className="text-blue-500">Shift</span> +{" "}
            <span className="text-blue-500">Option</span> +{" "}
            <span className="text-blue-500">B</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Card className="bg-zinc-900 border-none p-6 hover:bg-zinc-800 transition-colors flex flex-col items-center justify-center space-y-2 cursor-pointer">
              <Lock className="h-6 w-6 text-red-400" />
              <span className="text-gray-400">Support</span>
            </Card>
          </div>

          <div >
            <Card className="bg-zinc-900 border-none p-6 hover:bg-zinc-800 transition-colors flex flex-col items-center justify-center space-y-2 cursor-pointer">
              <Twitter className="h-6 w-6 text-gray-400" />
              <span className="text-gray-400">@Backpack</span>
            </Card>
          </div>

          <div>
            <Card className="bg-zinc-900 border-none p-6 hover:bg-zinc-800 transition-colors flex flex-col items-center justify-center space-y-2 cursor-pointer">
              <Discord className="h-6 w-6 text-indigo-400" />
              <span className="text-gray-400">Discord</span>
            </Card>
          </div>
        </div>

        <Button 
          size="lg" 
          className="w-full max-w-md mx-auto bg-white text-black hover:bg-gray-200"
        >
          Open Backpack
        </Button>
      </div>
    </div>
  )
}