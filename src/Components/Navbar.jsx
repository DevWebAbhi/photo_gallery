import React from 'react'
import '../Styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney,faPhotoFilm,faEnvelope,faCircleExclamation,faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BERGER_MENU } from '../redux/actionType';
const Navbar = () => {
    const navigate=useNavigate();
    const selector=useSelector(store=>store.reducer);
    const dispatch=useDispatch();
    function handleNavigate(e){
      navigate(e);
    }

    function handleBurgerMenu(){
      console.log("bgrmenu",selector)
      if(selector.bgrmenu){
        dispatch({type:BERGER_MENU,payload:false});
      }else{
        dispatch({type:BERGER_MENU,payload:true});
      }
    }
  return (
  <div className='navbar' style={{marginTop:selector.bgrmenu?"45px":""}}>
    <div className='navbar-ele'>
      <div onClick={()=>handleNavigate('/home')}><FontAwesomeIcon icon={faHouseChimney} className='navbar-icon' /> Home</div>
      <div onClick={()=>handleNavigate('/')}><FontAwesomeIcon icon={faPhotoFilm} className='navbar-icon' />Gallery</div>
      <div onClick={()=>handleNavigate('/contact')}><FontAwesomeIcon icon={faEnvelope} className='navbar-icon' />Contact</div>
      <div onClick={()=>handleNavigate('/about')}><FontAwesomeIcon icon={faCircleExclamation} className='navbar-icon' />About</div>
    </div>
    
    <div className='small-size-ele' >
      <div onClick={()=>handleNavigate('/home')}><FontAwesomeIcon icon={faHouseChimney} className='navbar-icon' /> Home</div>
      <div onClick={()=>handleNavigate('/')} style={{display:selector.bgrmenu?"block":"none"}}><FontAwesomeIcon icon={faPhotoFilm} className='navbar-icon' />Gallery</div>
      <div onClick={()=>handleNavigate('/contact')} style={{display:selector.bgrmenu?"block":"none"}}><FontAwesomeIcon icon={faEnvelope} className='navbar-icon' />Contact</div>
      <div onClick={()=>handleNavigate('/about')} style={{display:selector.bgrmenu?"block":"none"}}><FontAwesomeIcon icon={faCircleExclamation} className='navbar-icon' />About</div>
    </div>

    <div className='hamburger-icon' onClick={handleBurgerMenu}>
    <FontAwesomeIcon icon={faBars} className='navbar-icon hamberger-icon' />
    </div>
  </div>
  )
}

export default Navbar
