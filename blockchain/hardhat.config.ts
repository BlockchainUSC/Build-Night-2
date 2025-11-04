import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const privateKey = process.env.PRIVATE_KEY;
const sepoliaUrl = process.env.SEPOLIA_RPC_URL;
  

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: sepoliaUrl,
      accounts: [`0x${privateKey}`],
    },
  },
};

export default config;
