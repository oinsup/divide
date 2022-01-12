import React, { useState } from 'react';
import styled from 'styled-components';
import ImgBox from './ImgBox';

const ImgGroup = styled.div`
    position:relative;
    width:100%;
    height:100%;
    display:flex;
`

const Handler = styled.div`
   position:absolute;
   left:50%;
   top:0;
   z-index:10;
   width:4px;
   height:100%;
   background:#ccc;
   transform:translateX(-50%);
   span{
    position:absolute;
    left:50%;top:50%;
    transform:translate(-50%,-50%);
    width:40px;
    height:40px;
    background:#fff;
    border:2px solid #ccc;
    border-radius:10px;
    font-size:0;
    &:before,&:after{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        width:3px;
        height:30px;
        background:#aaa;
        display:block;
        content:'';
    }
    &:before{left:10px;}
    &:after{right:10px;}
   }
`


const ImgArea = () => {
    const [pos,setPos] = useState()
    const onDragEnd = (e) => {
        setPos(e.clientX);
    }
    const onTouchEnd = (e)=> {
        setPos(e.changedTouches[0].clientX);
    }    
    return (
        <ImgGroup>
            <ImgBox width={(pos / window.innerWidth) * 100 + "%"}/>
            <Handler className='handler' style={{left: (pos / window.innerWidth) * 100 + "%"}}>
                <span onDragEnd={onDragEnd} onTouchEnd={onTouchEnd} onDrag={onDragEnd} onTouchMove={onTouchEnd} draggable>handle</span>
            </Handler>
            <ImgBox/>
        </ImgGroup>
    );
};

export default ImgArea;