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
            <div className='handler' style={{left: (pos / window.innerWidth) * 100 + "%"}}>
                <span onDragEnd={onDragEnd} onTouchEnd={onTouchEnd} onDrag={onDragEnd} onTouchMove={onTouchEnd} draggable>handle</span>
            </div>
            <ImgBox/>
        </ImgGroup>
    );
};

export default ImgArea;