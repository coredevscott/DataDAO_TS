export default function Nodes() {
    return (
      <div className="relative py-24 font-normal sm:py-32" style={{fontSize: "16px"}}>
        <div className="px-6 mx-auto text-white max-w-7xl lg:px-8">
          <div className="flex flex-col items-center justify-center mx-auto sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Node</h2>
            <div className="flex flex-col items-center justify-center gap-12 mt-24 lg:gap-48 lg:flex-row">
              <img src="./img/nodes-fore-image.png" className="w-80 h-80"></img>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3 text-center lg:text-left">
                  <p className="text-sm">Price</p>
                  <p className="text-2xl font-semibold">USDT</p>
                </div>
                <div className="flex flex-col gap-3 text-center lg:text-left min-w-[110px]">
                  <p className="text-sm">Total Supply</p>
                  <p className="text-2xl font-semibold">100 USDT</p>
                </div>
                <div className="flex flex-col gap-3 text-center lg:text-left">
                  <p className="text-sm">Intro</p>
                  <p className="text-2xl font-semibold">10</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#111937] to-[#0F2835] rounded-xl p-6 text-left">
                <p className="text-2xl font-medium lg:text-3xl">Checkout</p>
                <p className="mt-10 text-lg">Enter Your Referral Code</p>
                <input type="text" placeholder="Optional" className="w-full p-3 mt-2 bg-transparent border border-white rounded-xl"></input>
                <p className="mt-2 text-sm text-gray-500">Referral code cannot be changed after purchase</p>
                <p className="mt-10 text-sm">Price</p>  
                <p className="mt-2 text-2xl">USDT</p>
                <p className="mt-10">Number</p>
                <input type="text" placeholder="Number" className="w-full p-3 mt-2 bg-transparent border border-white rounded-xl"></input>
                <p className="mt-10">Estimated Total Amount</p>
                <p className="mt-2 text-xl">0 USDT</p>
                <div className="flex flex-row items-center justify-center gap-3 mt-10">
                  <input type="checkbox"></input><p>I have read and agree that DATADAO are not investments.</p>
                </div>
                <div className="flex justify-center w-full">
                  <div className="bg-gradient-to-r from-[#1A61ED] to-[#11BAE3] py-3 px-20 rounded-xl mt-10 cursor-pointer text-center">BUY NOW</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
