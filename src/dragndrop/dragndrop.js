import './dragndrop.css'

const DragnDrop = () => {
    const dragStart = e => {
        e.dataTransfer.setData('drag_elem', e.target.id)
        console.log(e.target.id)
    }
    const allowDrop = e => {
        e.preventDefault();
    }
    const drop = e => {
        e.preventDefault();
        const data = e.dataTransfer.getData('drag_elem')
        e.target.appendChild(document.getElementById(data))
        console.log(e.target)
    }
    return  (
        <div className='container'>
            <div className='div-list'>
                <div className='box dropy' id='div1' onDrop={drop} onDragOver={ allowDrop}></div>
                <div className='box dropy' id='div2' onDrop={drop} onDragOver={ allowDrop}></div>
                <div className='box dropy' id='div3' onDrop={drop} onDragOver={ allowDrop}></div>
            </div>
            <div className='div-list' >
                <div className='box draggy' id='div4' onDrop={drop} onDragOver={ allowDrop}>
                    <img src='https://us.123rf.com/450wm/blueringmedia/blueringmedia1511/blueringmedia151100226/48324008-two-balls-one-big-and-one-small-illustration.jpg?ver=6' alt='img1' 
                        id='drag1'
                        draggable='true'
                        onDragStart={dragStart}
                    />
                </div>
                <div className='box draggy' id='div5' onDrop={drop} onDragOver={ allowDrop}>
                    <img src='https://3.bp.blogspot.com/-jSvjl2IO7DQ/WvrFtD93VVI/AAAAAAAAAxE/ytIg-rCz7XIAbEmgyHKv9ZFdolWTEwgTgCLcBGAs/s1600/Big-Small.png' alt='img1' 
                        id='drag2'
                        draggable='true'
                        onDragStart={dragStart}
                    />
                </div>
                <div className='box draggy' id='div1' onDrop={drop} onDragOver={ allowDrop}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5cXGi6zm5Pb3DAjHgQAFbd80tV3BaWbhKIg&usqp=CAU' alt='img1' 
                        id='drag3'
                        draggable='true'
                        onDragStart={dragStart}

                    />
                </div>
            </div>
            
        </div>
    )
}
export default DragnDrop