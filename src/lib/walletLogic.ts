import { generateMnemonic,mnemonicToSeed } from 'bip39'
import { Buffer } from 'buffer';
import { derivePath } from "ed25519-hd-key";
import { Keypair } from '@solana/web3.js';
globalThis.Buffer = Buffer;



export  const createWallets = async() =>{
    const mnemonic =  generateMnemonic();

    const seed = await mnemonicToSeed(mnemonic);

    console.log({"seed":seed,"men":mnemonic})

    const path = `m/44'/501'/0'/0'`;
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const keypair = Keypair.fromSeed(derivedSeed);
    const publicKey = keypair.publicKey.toBase58();
    
    console.log(publicKey);
}


