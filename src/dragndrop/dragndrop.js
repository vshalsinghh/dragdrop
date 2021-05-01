import React, {useState} from 'react'
import './dragndrop.css'

const DragnDrop = () => {
    const [currentDragged, setDragged] = useState('')
    const [error, setError] = useState('')

    const images = [
        {
            src: 'https://ds055uzetaobb.cloudfront.net/uploads/eREixHfFwc-p1.png',
            name: 'joseph'
        },
        {
            src: 'https://ds055uzetaobb.cloudfront.net/uploads/zIwV9OLFiO-p2.png',
            name: 'kevin'
        },
        {
            src: 'https://ds055uzetaobb.cloudfront.net/uploads/A8r8kNZ762-p3.png',
            name: 'ram'
        },
        {
            src: 'https://ds055uzetaobb.cloudfront.net/uploads/A8r8kNZ762-p3.png',
            name: 'shreyon'
        }
    ]
    const order = ['ram', 'joseph','shreyon', 'kevin']
    // const [name, setName] = useState('')
    const [currentDraggedName, setName] = useState('')
    const [matching, setMatching] =useState(false)
    const [borderStyle, setStyle] = useState({
        border: '2px dashed rgb(187, 187, 187)'
    })
    

    const dragStart = name => e => {
        e.dataTransfer.setData('drag_elem', e.target.id)
        setDragged(e.target.title)
        console.log('current dragged item name',name)
        setName(name)
    }
    const allowDrop = e => {
        console.log('droppping title' , e.target.title)
        if(e.target.title === 'allowDrop' || e.target.title === currentDragged){
            setError('')
            e.preventDefault();
        }
        else{
            setError('OH u got it wrong')
        }
       
    }
    const drop = (dropName) => (e) => {
        e.preventDefault();
        // console.log('droppping to name', dropName)
        const data = e.dataTransfer.getData('drag_elem')
        e.target.appendChild(document.getElementById(data))
        
        //set matching true and false if name matches or not and only for top divs
        if(currentDraggedName === dropName && e.target.title === 'allowDrop')
        {
            console.log('matching', e.target.style.borderColor)
            setMatching(true)
            setStyle({
                border:'2px solid green'
            })
        }
        else if(currentDraggedName === dropName && e.target.title !== 'allowDrop'){
            console.log('not matching')
            setMatching(false)
            setStyle({
                border:'2px dashed rgb(187, 187, 187)'
            })
        }
        else{
            setMatching(false)
            setStyle({
                border:'2px dashed rgb(187, 187, 187)'
            })
        }
    }
    return  (
        <div className='container'>
        {matching ? <p>Matching</p> : <p>Not Matching</p>}
            <div className='div-list'>
                {   //top three divs
                    order.map((name, index) => (
                        <div key={index} className='box dropy' 
                            title='allowDrop' 
                            style={borderStyle}
                            id={`div${index}`} 
                            onDrop={drop(name)} 
                            onDragOver={ allowDrop}>

                            </div>
                    ))
                }
            </div>
            <div className='div-list' >
                {   //bottom three divs
                    images.map((image, index) => (
                        <div key={index} className='box draggy' title={`allowDrop${index}`} id={`div${index}`} onDrop={drop(image.name)} onDragOverCapture={ allowDrop}>
                            <div className='box dragged-item' 
                                id={`drag${index}`}
                                title={`allowDrop${index}`}
                                draggable='true'
                                onDragStart={dragStart(image.name)}>
                                <div className='brother-name'><strong>{image.name}</strong></div>
                                <img className='brother' src={image.src} alt={`drag-images`} draggable='false'/>
                            </div>
                        </div>
                    ))
                }
            </div>
            {error ? <p>{error}</p> :<p>You are doing great</p>}
            
        </div>
    )
}
export default DragnDrop