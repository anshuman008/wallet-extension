import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CheckPassword = () => {

    const [password,setPassword] = useState('');
    const navigate = useNavigate();
  return (
    <div className='h-[600px] w-[350px] bg-[#222222] flex flex-col justify-center items-center gap-y-6 px-3 text-white'>
         <div className='flex flex-col justify-center items-center gap-y-2'>
            <img src='cryptowallet.png'height={70} width={70}/>
            <h2 className='text-xl font-bold'>Enter your password</h2>
          </div>

          <div className='flex flex-col gap-y-2 w-full'>
            <Input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

         <Button className='bg-neutral-700 text-white w-full' onClick={ async() => {
            const data =  JSON.parse(localStorage.getItem("mywallet") || "");
            
            if(password === data.password){
                navigate('/wallet') 
            }
            else{
                console.log('invalid hai!!')
            }
         }}>Unlock</Button>
    </div>
  )
}

export default CheckPassword