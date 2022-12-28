import './App.css';

function App() {
  function navM() {
    let nav = document.getElementById('nav');
    nav.style.transition = 'all .3s'
    nav.classList.toggle('close')
  }
  return (
    <div className="App">
      <header className="App-header sm:h-[10v] sm:px-[20px]">
        
        <a
          className="App-link text-3xl hover:text-green-400 font-bold"
          href="/"
          /*
          target="_blank"
          rel="noopener noreferrer"
          */
        >
          E Verse
        </a>
        <i class='bx bx-menu-alt-right white-400 text-4xl hover:cursor-pointer' onClick={navM}></i>
      </header>
      <div className='hero'>
        <div id='nav' className='h-[20vh] w-fit p-5 rounded-l-md flex flex-col items-end justify-center bg-white/10 shadow-sm backdrop-blur-sm absolute top-0 open'>
              <a href='/' className='text-white hover:text-green-400'>About</a>
              <a href='/' className='text-white hover:text-green-400'>Blog</a>
              <a href='/' className='text-white hover:text-green-400'>Careers</a>
              <a href='/' className='text-white hover:text-green-400'>Contact</a>
        </div>
        <div className='circle h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]'>
        </div>
        <h3 className='text-white text-xl sm:text-2xl uppercase tracking-widest z-10'>Reality meet's Fiction</h3>
        <h1 className='sm:text-[120px] text-[70px] text-center'>E - VERSE</h1>
        <div className='flex absolute bottom-0 left-1/2 -translate-x-2/4 items-center'>
          <h4 className='text-base font-bold text-white mx-10'>Follow us:</h4>
          <i class='bx bxl-facebook bg-green-400 text-white rounded p-2 cursor-pointer'></i>
          <i class='bx bxl-twitter bg-green-400 text-white rounded p-2 mx-5 cursor-pointer'></i>
          <i class='bx bxl-whatsapp bg-green-400 text-white rounded p-2 cursor-pointer'></i>
        </div>
      </div>

      <div className='sm:flex w-screen min-h-[60vh] justify-center items-center'>
        <div className='w-screen sm:w-2/5 h-2/5 sm:h-full p-20 flex items-center justify-center'>
          <img src='/img/everse1.png' alt='game play' className=' h-auto rounded-md'/>
        </div>
        <div 
        className='w-screen sm:w-3/5 p-10 sm:p-20 flex flex-col justify-center items-start'
        >
          <h3 
          className='text-green-400 font-bold text-base'
          >GAME</h3>
          <h1 
          className='my-5 text-4xl capitalize font-extrabold text-white'
          >We're Changing Game play</h1>
          <p 
          className='text-slate-200 text-sm py-5'
          >this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text</p>
          <button type="submit" 
          className='bg-green-400 text-white px-10 py-4 rounded-md hover:bg-green-300'
          >Earn</button>
        </div>
        
      </div>


      <div className='sm:px-10 px-5 py-20 min-h-screen overflow-hidden'>
        <div className='sm:flex sm:items-center'>
          <div className='w-screen sm:w-4/5 mb-3 sm:mb-0'>
            <h2 className='text-green-400 font-bold text-base uppercase pb-5'>play to earn</h2>
            <h1 className='text-white font-extrabold text-2xl sm:text-4xl capitalize'>From play to win to play to earn</h1>
          </div>
          <div className='sm:px-10'>
            <p className='text-slate-200 text-base'>PlayToEarn is the best source to find Play-To-Earn Crypto & NFT Blockchain Games. Earn Cryptocurrency & NFTs playing Ethereum & Bitcoin Games.</p>
          </div>
        </div>
        

        <div className='sm:flex pt-5 sm:p-10 w-screen h-fit'>
          <div className='flex justify-center items-start flex-col w-full sm:w-2/4'>
            <div className='flex p-2 justify-between'>
              <div className='flex items-center justify-center'>
                <h1 className='text-base text-white rounded bg-white/10 p-3 shadow-sm backdrop-blur-sm'>01</h1>
              </div>
              <div className='p-5'>
                <h2 className='uppercase text-2xl text-green-400 font-bold'>Total gamers</h2>
                <span className='text-white flex my-3'><hr className='h-1 w-3 m-2 bg-white border-none' />5000</span>
                <h3 className='text-sm text-slate-200'>this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text</h3>
              </div>
            </div>

            <div className='flex p-5 justify-between'>
              <div className='flex items-center justify-center'>
                <h1 className='text-base text-white rounded bg-white/10 p-3 shadow-sm backdrop-blur-sm'>02</h1>
              </div>
              <div className='p-5'>
                <h2 className='uppercase text-2xl text-green-400 font-bold'>Live Games</h2>
                <span className='text-white flex my-3'><hr className='h-1 w-3 m-2 bg-white border-none' />200</span>
                <h3 className='text-sm text-slate-200'>this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text</h3>
              </div>
            </div>

            <div className='flex p-5 justify-between'>
              <div className='flex items-center justify-center'>
                <h1 className='text-base text-white rounded bg-white/10 p-3 shadow-sm backdrop-blur-sm'>03</h1>
              </div>
              <div className='p-5'>
                <h2 className='uppercase text-2xl text-green-400 font-bold'>Assets won</h2>
                <span className='text-white flex my-3'><hr className='h-1 w-3 m-2 bg-white border-none' />9000</span>
                <h3 className='text-sm text-slate-200'>this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text</h3>
              </div>
            </div>

              <button type="submit" 
            className='bg-green-400 text-white px-10 py-4 rounded-md mx-5 hover:bg-green-300'
            >Join our Games</button>
          </div>

          <div className='grid place-items-center w-screen mt-10 sm:mt-0 sm:w-2/4'>
            <img src='/img/everse2.png' alt='game play' className='w-[300px] sm:w-[450px] h-auto rounded-md'/>
          </div>
        </div>


      </div>


      <div className='flex flex-col-reverse sm:flex-row p-10 justify-between items-center w-screen min-h-[70vh]'>
        <div className='relative w-full sm:w-2/4 flex justify-center items-center h-fit mb-20 sm:mb-0 sm:h-full'>
          <img src='/img/everse3.png' alt='game play' className='w-[150px] sm:w-[250px] h-auto rounded-md'/>
          <img src='/img/everse3.png' alt='game play' className='w-[150px] sm:w-[250px] h-auto rounded-md translate-y-20 m-3'/>
        </div>
        <div className='w-full sm:w-2/4 p-0 pt-5 sm:pt-0'>
          <span className='text-3xl sm:text-6xl font-extrabold text-green-400 flex'><h4 className='tracking-widest text-sm sm:text-xl m-3 text-green-300 -rotate-90 font-bold'>GAMING</h4>GAMES WE'VE RELEASED</span>
          <p className='text-sm text-slate-300 m-0 mt-5 sm:mt-0 sm:m-5'>this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text</p>
          <button type="submit" 
            className='bg-green-400 text-white px-10 py-4 rounded-md m-5 hover:bg-green-300'
            >See All Games</button>
        </div>
      </div>


      <div className='p-5 sm:p-10 sm:flex items-center justify-between min-h-[70vh]'>
        <div className='sm:p-5 w-full sm:w-2/4'>
        <span className='text-3xl sm:text-5xl font-extrabold text-green-400 flex'><h4 className='tracking-widest text-sm sm:text-xl sm:m-3 text-green-300 -rotate-90 font-bold'>GAMING</h4>MOST PLAYED GAMES</span>
        <span className='text-sm text-slate-300 m-5 flex p-1'><hr className='h-1 w-20 m-2 bg-green-400 border-none' /> this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text</span>
          <hr className='h-[.5px] w-[90vw] sm:w-full my-10 bg-white/20 border-none'/>
          <div className='w-[90vw] sm:w-full flex flex-col items-end justify-center'>
            <h5 className='text-base text-green-400 hover:cursor-pointer'>ACTION</h5>
            <h5 className='text-base text-green-400 hover:cursor-pointer'>SPORTS</h5>
            <h5 className='text-base text-green-400 hover:cursor-pointer'>ADVENTURE</h5>
          </div>
        </div>
        <div className='relative w-full mt-10 sm:mt-0 sm:w-2/4 flex justify-center items-center h-fit sm:h-full'>
          <img src='/img/everse4.png' alt='game play' className='w-[300px] sm:w-[450px] h-auto rounded-md'/>
        </div>
      </div>


      <div className='flex items-center justify-center w-screen min-h-[60vh]'>
        <div className=' w-[80vw] sm:w-[70vw] h-fit sm:h-[50vh] rounded-xl bg-white/10 p-3 shadow-sm backdrop-blur-sm border border-green-400 sm:flex overflow-hidden'>
          <div className='flex flex-col justify-center items-center w-full sm:w-[50%] p-5'>
            <i class='bx bxl-discord-alt text-green-400 text-6xl'></i>
            <h1 className='text-green-400 text-xl sm:text-3xl text-center'>JOIN OUR COMMUNITY ON DISCORD</h1>
            <a href="/" className='text-white text-2xl mt-10 font-bold flex items-center justify-center'>Join us <i class='bx bx-right-arrow-alt'></i></a>
          </div>
          <div className='w-full sm:w-[50%] flex items-center justify-center'>
          <img src='/img/phone.png' alt='game play' className='w-[200px] sm:w-[400px] filter-invert-100 h-auto'/>
          </div>
        </div>
      </div>


      <footer className='w-screen h-[120vh] sm:h-[80vh]'>
      <div className='w-screen h-[30%]'>
          
        </div>
        <div className='w-screen h-[70%] bg-[#191c21] relative'>
          <div className='h-[40vh] -top-[20vh] left-[50%] -translate-x-[50%] absolute w-[80vw] rounded-md bg-[#191c21] sm:flex'>
            <div className='w-full sm:w-[50%] flex flex-col justify-end items-center p-10'>
              <h1 className='text-green-400 text-3xl sm:text-5xl font-bold text-center'>Subscribe to our Newslatter</h1>
              <div className='w-[80%] h-[50px] border-b-2 border-white/40 flex justify-between items-center'>
                <input type="text" name="newslatter" placeholder='Email' className='w-[90%] h-full border-none bg-transparent text-white outline-none' /><i class='bx bx-right-arrow-alt text-white text-2xl cursor-pointer'></i>
              </div>
              
            </div>
            <div className='w-full sm:w-[50%] flex flex-col justify-end items-center sm:items-end p-10'>
              <a href='/' className='text-white'>About</a>
              <a href='/' className='text-white'>Blog</a>
              <a href='/' className='text-white'>Careers</a>
              <a href='/' className='text-white'>Contact</a>
              <a href='/' className='text-white'>Support/Feedback</a>
              <a href='/' className='text-white mt-5'>Privacy & Policy</a>
              <a href='/' className='text-white'>Terms & Condition</a>
            </div>
          </div>

          <div className='h-fit w-full sm:w-screen absolute bottom-0 left-0 flex flex-col sm:flex-row items-center justify-center sm:justify-between px-5 sm:px-10 sm:pb-3'>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-white'>Powered by:</h3>
              <div className='flex w-full sm:w-fit p-2 items-center justify-around'>
                <img src='/img/btc.png' alt='game play' className='w-[50px] h-auto'/>
                <img src='/img/eth.png' alt='game play' className='w-[50px] h-auto'/>
                <img src='/img/bnb.png' alt='game play' className='w-[50px] h-auto'/>
                <img src='/img/tw.png' alt='game play' className='w-[50px] h-auto'/>
              </div>
            </div>
            <div className='w-full sm:w-fit flex justify-center items-center m-5 sm:m-0'>
              <h4 className='text-base font-bold text-white mx-10'>Follow us:</h4>
              <i class='bx bxl-facebook bg-green-400 text-white rounded p-2 cursor-pointer'></i>
              <i class='bx bxl-twitter bg-green-400 text-white rounded p-2 mx-5 cursor-pointer'></i>
              <i class='bx bxl-whatsapp bg-green-400 text-white rounded p-2 cursor-pointer'></i>
            </div>

            <h3 className='text-white'>2022 EcodeJR</h3>
          </div>

        </div>
      </footer>


    </div>
  );
}

export default App;