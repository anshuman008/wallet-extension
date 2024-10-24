import { generateMnemonic,mnemonicToSeed } from 'bip39'
import { derivePath } from "ed25519-hd-key";
import { Keypair } from '@solana/web3.js';
import bs58 from "bs58";



export  const createWallets = async() => 
    {
    const men = generateMnemonic();
    const seed = await mnemonicToSeed(men);


    const path = `m/44'/501'/0'/0'`;

    const derivedSeed = derivePath(path, seed.toString('hex')).key;

    const keypair = Keypair.fromSeed(derivedSeed);
    const publicKey = keypair.publicKey.toBase58(); 
    const secretKey = bs58.encode(keypair.secretKey);


    
    return{
      "men":men,
      "pubKey":publicKey,
      "secretKey":secretKey
  }
  }

export const addNewWallet =  async(men:string) =>{
   const seed =  await mnemonicToSeed(men);
   const path = `m/44'/501'/0'/0'`;

   const deriveseed =  derivePath(path,seed.toString('hex')).key;

   const keypair = Keypair.fromSeed(deriveseed);
   const publicKey = keypair.publicKey.toBase58();
   const privateKey = bs58.encode(keypair.secretKey);

   return{
    "pubKey":publicKey,
    "secretKey":privateKey
   }


}


