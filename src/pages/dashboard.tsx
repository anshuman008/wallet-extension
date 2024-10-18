import { Button } from '@/components/ui/button';
import {  createWallets } from '@/lib/walletLogic';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
   const navigate = useNavigate();
  return (
        <div className='h-[600px] w-[350px] bg-[#222222] flex flex-col  justify-center items-center gap-y-10'>
          {/* header  */}
          <header className='flex flex-col gap-2 px-3'>
          
          <div className='flex justify-center tems-center gap-2  '>
          <img src='cryptowallet.png'height={50} width={50}/>
          <span className='text-4xl font-bold text-[#ffffff]'>mywallet</span>
          </div>

             <span className='text-[#999999]'>To get started, create a new wallet or import an existing one.</span>
          </header>
          
          <div className='flex w-full flex-col gap-y-3 justify-center items-center'>
            <Button className='bg-white text-black hover:bg-slate-400 w-[70%]' onClick={() => createWallets()}>Create a new wallet</Button>
            <Button className='w-[70%] bg-[#333333] hover:bg-slate-400 hover:text-black'>I already have a wallet</Button>
          </div>
         
      </div>
  )
}

export default Dashboard
