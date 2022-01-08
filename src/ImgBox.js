import React,{useState} from 'react';
import styled from 'styled-components';


const ImgBox = (props) => {
    const [imgSrc,setImgSrc] = useState({name:null,src:null});
    const WrapBox = styled.div `
        &:last-of-type{
            flex:1;
        }
        border-right:1px solid #000;
        width:50%;
        position:relative;
        img{width:100%;height:100%;}
    `
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
            <WrapBox>
                {
                    imgSrc.name === null ? 
                    <input type="file" onChange={onChange} accept='image/*'/> : 
                    <img src={imgSrc.src} alt={imgSrc.name}/>
                }
            </WrapBox>
        </>
    );
};

export default ImgBox;