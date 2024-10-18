import { Search, Copy, QrCode, Send, ArrowLeftRight, DollarSign, Home, Grid, Clock, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Wallet() {
  return (
    <div className="h-[600px] w-[350px] bg-[#222222] flex flex-col text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">A1</div>
          <span className="font-semibold">Account 1</span>
          <Copy size={16} className="text-gray-400" />
        </div>
        <div className="flex space-x-2">
          <Search className="text-gray-400" />
          <QrCode className="text-gray-400" />
        </div>
      </header>

      {/* Balance */}
      <div className="text-center py-8">
        <h1 className="text-5xl font-bold">$0.00</h1>
        <p className="text-gray-400 mt-2">+$0.00 +0.00%</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around px-4 mb-6">
        {[
          { icon: <QrCode size={24} />, label: 'Receive' },
          { icon: <Send size={24} />, label: 'Send' },
          { icon: <ArrowLeftRight size={24} />, label: 'Swap' },
          { icon: <DollarSign size={24} />, label: 'Buy' },
        ].map((action, index) => (
          <Button key={index} variant="ghost" className="flex flex-col items-center" size="sm">
            <div className="bg-gray-700 p-2 rounded-lg mb-1">{action.icon}</div>
            <span className="text-xs">{action.label}</span>
          </Button>
        ))}
      </div>

 

      {/* Token List */}
      <div className="flex-grow overflow-auto px-4">
        {['Solana', 'Ethereum'].map((token, index) => (
          <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-600 rounded-full mr-3"></div>
              <div>
                <p className="font-medium">{token}</p>
                <p className="text-sm text-gray-400">0 {token.substring(0, 3).toUpperCase()}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">$0.00</p>
              <p className="text-sm text-gray-400">$0.00</p>
            </div>
          </div>
        ))}
        <Button variant="ghost" className="w-full text-purple-400 mt-2">
          Manage token list
        </Button>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-around py-2 border-t border-gray-700">
        {[
          { icon: <Home size={20} />, label: 'Home' },
          { icon: <Grid size={20} />, label: 'Discover' },
          { icon: <ArrowLeftRight size={20} />, label: 'Swap' },
          { icon: <Clock size={20} />, label: 'Activity' },
          { icon: <Settings size={20} />, label: 'Settings' },
        ].map((item, index) => (
          <Button key={index} variant="ghost" className="flex flex-col items-center" size="sm">
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}