import Head from 'next/head'
import Web3 from "web3";
import { useState, useEffect } from 'react';

import {MOVIEADDRESS, MOVIEABI} from "../config.js"

export default function Mint() {

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  // FOR MINTING
  const [how_many_bananas, set_how_many_bananas] = useState(1)

  const [bananaContract, setBananaContract] = useState(null)

  // INFO FROM SMART Contract

  const [totalSupply, setTotalSupply] = useState(0)

  const [saleStarted, setSaleStarted] = useState(false)

  const [bananaPrice, setBananaPrice] = useState(0)
  
  // FOR DISPLAYING
  
  const [bananaWisdom, setBananaWisdom] = useState(1)

  useEffect( async() => { 

    signIn()

  }, [])

  async function signIn() {
    if (typeof window.web3 !== 'undefined') {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);
     
    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
    }

    window.ethereum.enable()
      .then(function (accounts) {
        window.web3.eth.net.getNetworkType()
        // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
        .then((network) => {console.log(network);if(network != "main"){alert("You are on " + network+ " network. Change network to mainnet or you won't be able to do anything here")} });  
        let wallet = accounts[0]
        setWalletAddress(wallet)
        setSignedIn(true)
        callContractData(wallet)

  })
  .catch(function (error) {
  // Handle error. Likely the user rejected the login
  console.error(error)
  })
  }

//

  async function signOut() {
    setSignedIn(false)
  }
  
  async function callContractData(wallet) {
    // let balance = await web3.eth.getBalance(wallet);
    // setWalletBalance(balance)
    const bananaContract = new window.web3.eth.Contract(MOVIEABI, MOVIEADDRESS)
    setBananaContract(bananaContract)

    const salebool = await bananaContract.methods.saleIsActive().call() 
    // console.log("saleisActive" , salebool)
    setSaleStarted(salebool)

    const totalSupply = await bananaContract.methods.totalSupply().call() 
    setTotalSupply(totalSupply)

    const bananaPrice = await bananaContract.methods.price().call() 
    setBananaPrice(bananaPrice)
   
  }
  
  async function claimToken(how_many_bananas) {
    if (bananaContract) {
 
      const price = Number(bananaPrice)  * how_many_bananas 

      const gasAmount = await bananaContract.methods.claim(how_many_bananas).estimateGas({from: walletAddress, value: price})
      console.log("estimated gas",gasAmount)

      console.log({from: walletAddress, value: price})

      bananaContract.methods
            .claim(how_many_bananas)
            .send({from: walletAddress, value: price, gas: String(gasAmount)})
            .on('transactionHash', function(hash){
              console.log("transactionHash", hash)
            })
          
    } else {
        console.log("Wallet not connected")
    }
    
  };
  
  async function claimWiseToken(how_many_bananas) {
    if (bananaContract) {
 
      const price = Number(0)  * how_many_bananas 

      const gasAmount = await bananaContract.methods.wiseClaim(how_many_bananas).estimateGas({from: walletAddress, value: price})
      console.log("estimated gas",gasAmount)

      console.log({from: walletAddress, value: price})

      bananaContract.methods
            .wiseClaim(how_many_bananas)
            .send({from: walletAddress, value: 0, gas: String(gasAmount)})
            .on('transactionHash', function(hash){
              console.log("transactionHash", hash)
            })
          
    } else {
        console.log("Wallet not connected")
    }
    
  };
  
  async function reroll(bananaWisdom) {
    if (bananaContract) {
 
      const price = Number(bananaPrice)

      const gasAmount = await bananaContract.methods.rerollSeed(bananaWisdom).estimateGas({from: walletAddress, value: price})
      console.log("estimated gas",gasAmount)

      console.log({from: walletAddress, value: price})

      bananaContract.methods
            .rerollSeed(how_many_bananas)
            .send({from: walletAddress, value: 0, gas: String(gasAmount)})
            .on('transactionHash', function(hash){
              console.log("transactionHash", hash)
            })
          
    } else {
        console.log("Wallet not connected")
    }
    
  };
  
  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>WiseMovrs</title>
        <link rel="icon" href="/images/favicon.jpg" />

        <meta property="og:title" content="WiseMovrs" key="ogtitle" />
        <meta property="og:description" content="WiseMovrs - Providing verifiable and provable wise advice." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://wisemovrs./" key="ogurl"/>
        <meta property="og:image" content="https://wisemovr.com/images/WiseMovr.png" key="ogimage"/>
        <meta property="og:site_name" content="https://wisemovrs.com/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="wisemovrs.com" key="twdomain" />
        <meta property="twitter:url" content="https://wisemovrs.com/" key="twurl" />
        <meta name="twitter:title" content="WiseMovrs" key="twtitle" />
        <meta name="twitter:description" content="WiseMovrs - Providing verifiable and provable wise advise." key="twdesc" />
        <meta name="twitter:image" content="https://wisemovr.com/images/WiseMovr.png" key="twimage" />
      </Head>


      <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/" className=""><img src="images/WiseMovr.png" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="/#about" className="text-4xl text-white hover:text-black m-6">About</a>
              <a href="/mint" className="text-4xl text-white hover:text-black m-6">Mint!</a>
              <a href="/#traits" className="text-4xl text-white hover:text-black m-6">Wisdom traits</a>
              <a href="/#team" className="text-4xl text-white hover:text-black m-6">Team</a>
              <a href="https://t.me/wisemovrs" className="text-4xl  hover:text-white m-6 text-blau">TELEGRAM</a>
            </nav>
             
          </div>
          <div className="flex auth my-8 font-bold  justify-center items-center vw2">
            {!signedIn ? <button onClick={signIn} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Connect Wallet with Metamask</button>
            :
            <button onClick={signOut} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Wallet Connected: {walletAddress}</button>}
          </div>
        </div>

        <div className="md:w-2/3 w-4/5">
       
        
          <div className="mt-6 border-b-2 py-6">

            <div className="flex flex-col items-center">

                <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">TOTAL MOVIE STARS DISPENSED:  <span className="text-blau text-6xl"> {!signedIn ?  <>-</>  :  <>{totalSupply}</> } / 256</span></span>

                <div id="mint" className="flex justify-around  mt-8 mx-6">
                  <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">GIMME</span>
                  
                  <input 
                                      type="number" 
                                      min="1"
                                      max="20"
                                      value={how_many_bananas}
                                      onChange={ e => set_how_many_bananas(e.target.value) }
                                      name="" 
                                      className="Poppitandfinchsans pl-4 text-4xl  inline bg-grey-lighter  py-2 font-normal rounded text-grey-darkest  font-bold"
                                  />
                  
                  <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">MOVIE STARS!</span>
    
                </div>
                {saleStarted ? 
                <button onClick={() => claimToken(how_many_bananas)} className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">MINT {how_many_bananas} stars for {(bananaPrice * how_many_bananas) / (10 ** 18)} MOVR + GAS</button>        
                  : <button className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">SALE IS NOT ACTIVE OR NO WALLET IS CONNECTED</button>        
              }
				{saleStarted ? 
                <button onClick={() => claimWiseToken(how_many_bananas)} className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">Claim token for just GAS</button>        
                  : <button className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">SALE IS NOT ACTIVE OR NO WALLET IS CONNECTED</button>  
				}
                
            </div> 
            </div>
			<div className="flex flex-col items-center">
				
				<div id="mint" className="flex justify-around  mt-8 mx-6">
				<span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">
				{saleStarted ?
                <button onClick={() => viewToken(bananaWisdom)} className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">View Movie Quote for Token Number</button>        
                  : <button className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">SALE IS NOT ACTIVE OR NO WALLET IS CONNECTED</button>        
                }
				{saleStarted ?
				<button onClick={() => reroll(bananaWisdom)} className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">Reroll Movie Quote for {bananaPrice / (10 ** 18)}</button>        
                  : <button className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">SALE IS NOT ACTIVE OR NO WALLET IS CONNECTED</button>        
			    }
				</span>
                  <input 
                                      type="number" 
                                      min="1"
                                      max="1024"
                                      value={bananaWisdom}
                                      onChange={ e => setBananaWisdom(e.target.value) }
                                      name="" 
                                      className="Poppitandfinchsans pl-4 text-4xl  inline bg-grey-lighter  py-2 font-normal rounded text-grey-darkest  font-bold"
                                  />
				
                <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4" id="status">Loading...</span>
    
                </div>
				</div>
                
            </div> 
			
				
				<br/>
				
  
    </div>  
    )
	
	async function viewToken(bananaWisdom) {
    updateStatus('fetching wisdom...');
    const wisdom = await bananaContract.methods.viewToken(bananaWisdom).call();
    updateStatus(`Wisdom: ${wisdom}`);
	}
	
	function updateStatus(status) {
    const statusEl = document.getElementById('status');
    statusEl.innerHTML = status;
    console.log(status);
	}
  }
