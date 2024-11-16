import { motion } from 'framer-motion';
import { Button } from '../ui/button';

const NetworkSlection = ({setStep}:{setStep: React.Dispatch<React.SetStateAction<number>>}) => {
  const networks = [
    { id: 'solana', name: 'Solana', icon: '💎' },
    { id: 'ethereum', name: 'Ethereum', icon: '⟠' },
  ];

  return (
    <div>
      <motion.div
        key="network"
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-center">Select Network</h2>
        <p className="text-center text-muted-foreground">
          Which blockchain do you want to use? You can add more later.
        </p>
        {/* <Input type="search" placeholder="Search Networks" className="mb-4" /> */}
        <div className="space-y-2">
          {networks.map((network) => (
            <Button
            onClick={() => setStep((prev) => prev+1)}
              key={network.id}
            //   variant={selectedNetwork === network.id ? 'default' : 'outline'}
            variant={'outline'}
              className="w-full justify-start text-left bg-[#202027] hover:bg-[#1a1a1f] hover:text-white border-none text-white p-7 rounded-xl"
            //   onClick={() => setSelectedNetwork(network.id)}
            >
              <span className="mr-2">{network.icon}</span>
              {network.name}
            </Button>
          ))}
        </div>
        {/* <Button
          className="w-full mt-4 bg-slate-800"
          // onClick={() => setStep(2)}
        //   disabled={!selectedNetwork}
        >
          Next
        </Button> */}
      </motion.div>
    </div>
  );
};

export default NetworkSlection;
