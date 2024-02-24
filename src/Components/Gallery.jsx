import React, { useEffect } from 'react'
import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator';
import {data} from '../imgLinks'
import { useSelector,useDispatch } from 'react-redux';
import { SET_DATA } from '../redux/actionType';
import ImageCard from './ImageCard';
import '../Styles/Gallery.css';
const Gallery = () => {
  const selector=useSelector(store=>store.reducer);
  const dispatch=useDispatch();
  function randonGenerator(){
    const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); // big_red_donkey

const shortName = uniqueNamesGenerator({
  dictionaries: [adjectives,  colors], 
  length: 2
});
const Name= shortName.split("_");
Name[0]=Name[0].charAt(0).toLocaleUpperCase()+Name[0].substring(1);
Name[1]=Name[1].charAt(0).toLocaleUpperCase()+Name[1].substring(1);
const realName=Name[0]+" "+Name[1];
const randomPrice=Math.round(Math.random() * (5001 - 501)) + 501;
return {name:realName,price:randomPrice};
  }

 

  useEffect(()=>{
    const obj=data.map((e)=>{
      const namePrice=randonGenerator();
      return {img:e,name:namePrice.name,price:namePrice.price};
    })

   dispatch({type:SET_DATA,payload:obj});
  },[])
  return (
    <div className='grid-div'>
     {
      selector!=null && selector.data!=undefined?selector.data.map((e,idx)=>(
        <ImageCard key={idx} data={e.img}  name={e.name} price={e.price}/>
      )):<></>
     }
    </div>
  )
}

export default Gallery
