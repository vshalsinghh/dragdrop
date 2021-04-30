import React, {useState} from 'react'
import './dragndrop.css'

const DragnDrop = () => {
    const [currentDragged, setDragged] = useState('')
    const [error, setError] = useState('')

    const images = [
        'https://ds055uzetaobb.cloudfront.net/uploads/eREixHfFwc-p1.png',
        'https://ds055uzetaobb.cloudfront.net/uploads/zIwV9OLFiO-p2.png',
        'https://ds055uzetaobb.cloudfront.net/uploads/A8r8kNZ762-p3.png',

    ]
    const dragStart = e => {
        e.dataTransfer.setData('drag_elem', e.target.id)
        setDragged(e.target.title)
        console.log(currentDragged)
    }
    const allowDrop = e => {
        console.log('droppping title' , e.target.title)
        // const data = e.dataTransfer.getData('drag_elem')
        // console.log('data')
        if(e.target.title === 'allowDrop' || e.target.title === currentDragged){
            setError('')
            e.preventDefault();
        }
        else{
            setError('OH u got it wrong')
        }
       
    }
    const drop = e => {
        e.preventDefault();
        const data = e.dataTransfer.getData('drag_elem')
        e.target.appendChild(document.getElementById(data))
    }
    return  (
        <div className='container'>
            <div className='div-list'>
                <div className='box dropy' title='allowDrop' id='div1' onDrop={drop} onDragOver={ allowDrop}></div>
                <div className='box dropy' title='allowDrop' id='div2' onDrop={drop} onDragOver={ allowDrop}></div>
                <div className='box dropy' title='allowDrop' id='div3' onDrop={drop} onDragOver={ allowDrop}></div>
            </div>
            <div className='div-list' >
                <div className='box draggy' title='allowDrop1' id='div4' onDrop={drop} onDragOverCapture={ allowDrop}>
                    <div className='box dragged-item' 
                        id='drag1'
                        title='allowDrop1'
                        draggable='true'
                        onDragStart={dragStart}>
                        <div className='brother-name'><strong>Joseph</strong></div>
                        <img className='brother' src={images[0]} alt='img1' draggable='false'/>
                    </div>
                    
                </div>
                <div className='box draggy' title='allowDrop2' id='div5' onDrop={drop} onDragOverCapture={ allowDrop}>
                    <div className='box dragged-item' 
                        id='drag2'
                        title='allowDrop2'
                        draggable='true'
                        onDragStart={dragStart}>
                        <div className='brother-name'><strong>Kevin</strong></div>
                        <img className='brother' src={images[1]} alt='img2' draggable='false'/>
                    </div>
                    
                </div>
                <div className='box draggy' title='allowDrop3' id='div6' onDrop={drop} onDragOverCapture={ allowDrop}>
                    <div className='box dragged-item' 
                        id='drag3'
                        title='allowDrop3'
                        draggable='true'
                        onDragStart={dragStart}>
                        <div className='brother-name'><strong>Nicholas</strong></div>
                        <img className='brother' src={images[2]} alt='img3' draggable='false'/>
                    </div>
                    
                </div>
            </div>
            {error ? <p>{error}</p> :<p>You are doing great</p>}
            
        </div>
    )
}
export default DragnDrop