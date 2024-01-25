import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./style.css";
import "./App.css";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getLedgerWallet,
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletExtensionWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ethers from 'ethers';

import MyWallet from "./MyWallet";

import Landing from './Components/Landing';
import Mission from './Components/Mission';
import Policy from './Components/Policy';
import Nodes from './Components/Nodes';
import MyNode from './Components/MyNode';

function App() {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint
  const endpoint = React.useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application
  const wallets = React.useMemo(
    () => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolflareWallet(),
      getLedgerWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/mission' element={<Mission />}></Route>
            <Route path='/policy' element={<Policy />}></Route>
            <Route path='/nodes' element={<Nodes />}></Route>
            <Route path='/mynode' element={<MyNode />}></Route>
          </Routes>
        </BrowserRouter>
      </WalletProvider>
    </ConnectionProvider >
  );
}

export default App;
