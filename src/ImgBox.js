import React,{useState} from 'react';

const ImgBox = (props) => {
    const [imgSrc,setImgSrc] = useState({name:null,src:null});
    const [winSize,setWinSize] = useState();
    
    window.addEventListener("resize", function(){
        setWinSize(window.outerWidth);
    });
    document.addEventListener("DOMContentLoaded", function(){
        setWinSize(window.outerWidth);

    });
        
        


    const onChange = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = (e) => {
            setImgSrc({...imgSrc,name:file.name,src:reader.result})
        }
        reader.readAsDataURL(file);
    }
    return (
        <>
            <div className='divBox' style={{width:props.width}}>
                {
                    imgSrc.name === null ? 
                    <input type="file" onChange={onChange} accept='image/*'/> : 
                    <img src={imgSrc.src} alt={imgSrc.name} style={{width:winSize}}/>
                }
            </div>
        </>
    );
};

export default ImgBox;