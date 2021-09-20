import Head from 'next/head'

export default function Home() {

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
			  <a href="/mintMovieMovr" className="text-4xl text-white hover:text-black m-6">Mint a Movie Star!</a>
              <a href="/#traits" className="text-4xl text-white hover:text-black m-6">Wisdom traits</a>
              <a href="/#team" className="text-4xl text-white hover:text-black m-6">Team</a>
              <a href="https://t.me/wisemovrs" className="text-4xl  hover:text-white m-6 text-blau">TELEGRAM</a>
            </nav>
             
          </div>
          
        </div>

        <div className="md:w-2/3 w-4/5 " id="about">
       
        
          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-1/2 w-3/4">
                    <h1 className="text-7xl Poppitandfinchsans text-white ">It's time to become a <br/><span className="text-blau">WiseMovr</span></h1>
                    <p className="text-2xl text-white my-6  montserrat">The <span className="text-5xl Poppitandfinch ">WiseMovrs</span> collection is a collection with millions of combinations, but only <span className="text-span-2 font-bold">1024</span> available tokens.<br />‍<br />Will you become a <br/>‍<span className="text-blau text-5xl Poppitandfinchsans">WiseMovr</span>?<br/>
                    </p>
                    <p className="text-2xl text-white my-6  montserrat">
                    <strong>LAUNCH DATE:</strong> 17 September 2021. 2pm EST. <br />‍
                    <span className="text-white text-2xl montserrat"><strong>TOTAL SUPPLY: 128</strong> Tokens.<br/><strong>PRICE: 0.035 MOVR </strong>each.</span></p>
                    <iframe src="https://free.timeanddate.com/countdown/i7vcex5b/n107/cf11/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw448/szh189/iso2021-09-17T21:00:00" allowtransparency="true" frameBorder="0" width="425" height="25"></iframe>

                  </div>
                  <img className="lg:w-1/2 w-3/4" src="images/Wisdom.png" width="500px" />
            </div>
            <div className="flex flex-col items-center">

            <a href="/mint" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">GO TO MINTING PAGE!</a>
                
                
            </div> 
            </div>



    

                <div id="traits" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className="border-4 border-blue-300 p-4"><img src="images/Wisdom.png" alt="" width="400px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau Poppitandfinchsans text-6xl text-center">Wisdom Traits</h2>
                    <p className="text-xl text-white my-6  montserrat"> There are <span className="font-bold">8</span> different sayings, mad-lib'd together using <span className="font-bold">hundreds</span> of different words. Each token only provides a single saying, and each saying is only visible to <span className="font-bold">the owner. </span>   
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> This is an experimental project that builds on top of the methods utilized in Loot NFT. There are no guarantees of future development. 
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> <span className="font-bold"> Come get wiser with WiseMovrs. </span>
                    </p>
                  </div>
                </div>

              <div id="roadmap" className="">
              <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">OUR MISSION STATEMENT</h2>
              <p className="text-xl text-white text-center my-6  montserrat"> To provide a novel concept to the MoonRiver community.
              </p>
			  <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">HOW DO I SEE MY WISDOM?</h2>
              <p className="text-xl text-white text-center my-6  montserrat"> Please <a href="https://blockscout.moonriver.moonbeam.network/address/0x5A55AF6482BD21fFf6cDb86dc40117932499d3c0/read-contract">Click Here</a> to be taken to the contract "Read" page. Scroll down to "viewToken" and input the token number of the token you received!
              </p>

              </div>
              
              <div id="team" className="mx-12 my-16 ">
                <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">WISEMOVR RESEARCH TEAM</h2>
                <div className="flex justify-around flex-wrap">
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/WiseMovr.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">Loki</h3>
                  </div>
					<p className="text-xl text-white my-6  montserrat"> WiseMovrs is a research project released as an experimental concept by a solo Solidity developer as a method of expanding personal solidity skills. Any and all profits generated from WiseMovrs directly fuels continued education.
					</p>
                </div>
       


              </div>   
              <div id="contact" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className=" p-4"><img src="images/Wisdom.png" alt="" width="400px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau Poppitandfinchsans text-6xl text-center">CONTACT WISEMOVRS</h2>
                    <p className="text-xl text-white my-6  montserrat"> We'd love to hear from you! 
                    </p>
                    Join our <a className="text-black underline font-bold" target="_blank" href="https://t.me/wisemovrs">Telegram Server</a>.
                  </div>
       


              </div>   
          </div>  
    </div>  
    )
  }