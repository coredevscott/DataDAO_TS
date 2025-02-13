import '../../css/project-base.css';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import MyWallet from '../../MyWallet';

import { useState } from 'react';

const navigation = [
  { name: 'HOME', href: '/', current: true },
  { name: 'POLICY', href: '/policy', current: false },
  { name: 'MISSION', href: '/mission', current: false },
  { name: 'NODES', href: '/nodes', current: false },
  { name: 'MYNODE', href: '/mynode', current: false },
  { name: 'DOCS', href: 'https://datadao.gitbook.io/datadao/', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [showModal, setShowModal] = useState<number>(0);
  const [showEVMModal, setShowEVMModal] = useState<number>(0);
  const [isConnected, setIsConnected] = useState<number>(0);

  const [chainType, setChainType] = useState<number>(0);

  const handleMetamask = async (): Promise<void> => {
    if ((window as any).ethereum?.isMetaMask) {
      let instance: any;
      instance = (window as any).ethereum;

      try {
        await instance.request({ method: "eth_requestAccounts" });
        setIsConnected(1);
        setShowModal(0);
        setShowEVMModal(0);
      } catch (error) {
        // Handle error
      }
    }
    else {
      alert('Please install Metamask wallet');
    }
  };

  const handleBitget = async (): Promise<void> => {
    if ((window as any).bitkeep?.ethereum) {
      let instance: any;
      instance = (window as any).bitkeep?.ethereum;

      try {
        await instance.request({ method: "eth_requestAccounts" });
        setIsConnected(1);
        setShowModal(0);
        setShowEVMModal(0);
      } catch (error) {
        // Handle error
      }
    }
    else {
      alert('Please install Bitget wallet');
    }
  };

  return (
    <Disclosure as="nav" className="relative font-normal">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* Modal */}
            {showModal == 1 ? (<div className='fixed fadeIn left-0 top-0 w-full h-full bg-transparent z-[1] backdrop-filter backdrop-blur-md'>
              <div className='relative flex flex-col items-center justify-center w-full h-full text-white'>
                  <div className='relative w-full mx-8 sm:w-[540px] bg-gradient-to-r from-[#111937] to-[#0F2835] p-10 rounded-xl flex items-center flex-col justify-center'>
                      <XMarkIcon onClick={() => setShowModal(0)} className='absolute w-6 h-6 cursor-pointer top-3 right-3'/>
                      <div className='text-2xl font-bold text-left'>Select Chains</div>
                      <div className="flex flex-row items-center justify-center gap-10 my-10">
                        <label className="container">
                          Solana
                          <input type="radio" name="radio" onClick={() => {setChainType(1)}}></input>
                          <span className="checkmark"></span>
                        </label>
                        <label className="container">
                          EVM
                          <input type="radio" name="radio" onClick={() => {setChainType(2)}}></input>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      {chainType == 1 && (<MyWallet />)} 
                      {chainType == 2 && (<div className='py-4 px-5 hover:bg-[#423AAF] bg-[#4E44CE] rounded-md cursor-pointer font-semibold' style={{fontSize: "16px"}} onClick={() => {setShowEVMModal(1)}}>Select Wallet</div>)}
                    </div>        
                </div>
              </div>) : null}

            {/* EVM wallet select */}
            {showEVMModal == 1 ? (<div className='fixed fadeIn left-0 top-0 w-full h-full bg-transparent z-[1] backdrop-filter backdrop-blur-md'>
              <div className='relative flex flex-col items-center justify-center w-full h-full text-white'>
                  <div className='relative w-full mx-8 sm:w-[540px] bg-[#2C2D30] p-10 rounded-xl flex items-center flex-col justify-center'>
                      <XMarkIcon onClick={() => setShowEVMModal(0)} className='absolute w-6 h-6 cursor-pointer top-3 right-3'/>
                      <div className='text-2xl font-bold text-left'>Select Wallets</div>
                      <div className='flex flex-col gap-5 my-10'>
                        <div className='min-w-[250px] py-4 px-5 hover:bg-[#36373A] bg-[#404144] rounded-md cursor-pointer font-semibold flex flex-row gap-3 justify-center items-center' style={{fontSize: "16px"}} onClick={() => {handleMetamask()}}><img src="./img/metamask.png" className='w-7 h-7'></img>Connect Metamask</div>
                        <div className='min-w-[150px] py-4 px-5 hover:bg-[#36373A] bg-[#404144] rounded-md cursor-pointer font-semibold flex flex-row gap-3 justify-center items-center' style={{fontSize: "16px"}} onClick={() => {handleBitget()}}><img src="./img/bitget.png" className='w-7 h-7'></img>Connect Bitget</div>
                      </div>
                    </div>     
                </div>
              </div>) : null}

            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-between">
                <div className="text-[#1587E7] items-center flex-shrink-0 font-semibold text-xl sm:flex hidden">
                  DataDAO
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          'rounded-md px-3 py-2 text-sm text-white hover:bg-white hover:bg-opacity-20'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                {isConnected == 0 ? 
                  (<div className='gradient-border text-sm py-1 px-3 rounded-md flex items-center text-transparent bg-gradient-to-r from-[#1A61ED] to-[#11BAE3] bg-clip-text cursor-pointer' onClick={() => setShowModal(1)}>Connect Wallet</div>) :
                  (<div className='gradient-border text-sm py-1 px-3 rounded-md flex items-center text-transparent bg-gradient-to-r from-[#1A61ED] to-[#11BAE3] bg-clip-text cursor-pointer'>Connected</div>)
                }
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    'block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white hover:bg-opacity-20'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
