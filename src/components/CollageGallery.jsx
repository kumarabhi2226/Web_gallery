import img1 from '../assets/img1.avif'
import img2 from '../assets/img2.avif'
import img3 from '../assets/img3.avif'
import './gallery.css'
import img4 from '../assets/img4.avif'
import { useState } from 'react'
import { IoClose } from "react-icons/io5";
function CollageGallery(){
    let data = [
        {
            id:1,
            imgSrc: img1,
        },
        {
            id:2,
            imgSrc: img2
        },
        {
            id:3,
            imgSrc: img3
        },
        {
            id:4,
            imgSrc: img4
        }
    ]
        const [model, setModel] = useState(false);
        const [tempImg, setTempImg] = useState('');
    const getImg = (imgSrc) => {
        setTempImg(imgSrc);
        setModel(true);
    }
    return(
        <div style={{backgroundColor: 'lightblue'}}>
        <div className={model?"model open":"model"}>
            <img src={tempImg} alt="" />
            <IoClose className='absolute top-0 right-0 h-8 w-8 cursor-pointer text-white ' onClick={()=>setModel(false)}/>
        </div>
        <h1 className="text-center text-3xl mb-4 pt-2 font-bold font-mono text-red">Gallery Application</h1>
        <div className='gallery'>
            {data.map((item, index)=>{
                return(
                    <div className='pics' key={index} onClick={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt="" style={{width: '100%'}}/>

                    </div>
                )
            })}
        </div>
</div>
    );
}
export default CollageGallery;