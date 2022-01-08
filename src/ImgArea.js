import React, { useState } from 'react';
import styled from 'styled-components';
import ImgBox from './ImgBox';

const ImgGroup = styled.div`
    position:relative;
    width:100%;
    height:100%;
    display:flex;
`


const ImgArea = () => {
    const [width,setWidth] = useState()
    const [pos,setPos] = useState()
    const onDragEnd = (e) => {
        setPos(e.clientX);
    }
    
    const Handler = styled.div`
        position:absolute;
        left:${pos+"px"};
        top:0;
        background:#fff;
        z-index:10;
    `
    return (
        <ImgGroup>
            <ImgBox width={pos}/>
            <Handler className='handler' onDragEnd={onDragEnd}  draggable><span>handle</span></Handler>
            <ImgBox/>
        </ImgGroup>
    );
};

export default ImgArea;