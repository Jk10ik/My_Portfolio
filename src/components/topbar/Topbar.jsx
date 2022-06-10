import './topbar.scss'
// import {Mail,Person }from '@mui/icons-material';


export default function Topbar({ openMenue, setOpenMenue }) {
  return (

    <div className={'topbar ' + (openMenue && 'active')} id='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>genius.</a>
          <div className="itemContainer ms-5">
            <i class="fas fa-user"></i>
            <span>+92 335 7758 992</span>
          </div>
          <div className="itemContainer  ms-5 ">
            <i class="fas fa-envelope me-0"></i>
            <span  >junaidkhan10ik@gamil.com</span>
          </div>


        </div>

        <div className="right">

          <div className="hamburger" onClick={() => setOpenMenue(!openMenue)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>

          </div>
        </div>
      </div>
    </div>
  )
}
