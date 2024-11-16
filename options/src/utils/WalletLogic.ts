import { generateKey } from "crypto";
import {generateMnemonic,mnemonicToSeed} from "bip39";
import { derivePath } from "ed25519-hd-key";

export const CreateWallet = async() => {


    // genrating menomics or seed phrases
    const men = generateMnemonic();

    // genrating teh seed
    const seed = await mnemonicToSeed(men);


    //path
    const path = `m/44'/501'/0'/0'`;

    console.log("here is yhe path",path);

    const deriveSeed =  derivePath(path,seed.toString());

    console.log("here is derive seed",deriveSeed);


    

    console.log(men)
} 