import { motion } from 'framer-motion';
import { Button } from '../ui/button';

const Welcome = ({setStep}:{setStep: React.Dispatch<React.SetStateAction<number>>}) => {
  return (
    <div>
      <motion.div
        key="welcome"
        className="space-y-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <h2 className="text-2xl font-bold md:text-4xl">Welcome to Backpack</h2>
        <p className="text-muted-foreground md:text-lg">Let's get started.</p>

        <div className="space-y-5">
          <Button className="w-full bg-white hover:bg-slate-200 text-black p-6 rounded-xl" onClick={() => {
            setStep((prev) => prev+1)
          }} >Create a new wallet</Button>
          <Button variant="outline" className="w-full bg-[#202027] hover:bg-slate-700 hover:text-white text-white border-none p-6 rounded-xl">
            Import Wallet
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Welcome;
