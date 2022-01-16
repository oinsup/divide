import React,{useState} from 'react';

const App2 = () => {
  const data = [];
  const [newData,setNewData] = useState(data);
  const [imgSrc,setImgSrc] = useState('');
  const [tag, setTag] = useState('');
  const [pos,setPos] = useState({posX:null,posY:null});

  const onChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = (e) => {
        setImgSrc({...imgSrc,name:file.name,src:reader.result})
    }
    reader.readAsDataURL(file);
 }

  const onClick = (e) => {
    setPos({posX:e.clientX,posY:e.clientY})
  }

  const onSubmit = () => {
    setNewData([...newData,{pos,desc:tag}])
  }

  return (
    <div>
      <div className='imgWrap' style={{"position":"relative"}}>
        {
          imgSrc.name == null ? 
          <input type="file" onChange={onChange}/> :
          <img src={imgSrc.src} alt={imgSrc.name} onClick={onClick}/>
        }
        <div className='tagBox'>
          <input type="text" placeholder='내용입력' onChange={(e) => {
            setTag(e.target.value)
            console.log(tag)
            
            }}/>
          <button type="button" onClick={onSubmit}>입력</button>
          {newData.map(i=>{
            return(
              <p className='tag' style={{"background":"#fff","position":"absolute","left":i.pos.posX,"top":i.pos.posY}}>{i.desc}</p>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default App2;