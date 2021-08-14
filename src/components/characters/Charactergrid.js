import React from 'react'
import Characteritem from './Characteritem'

const Charactergrid = ({items, isloading}) => {
    return isloading ? (
    <h1>Loading</h1> 
    ) : (
    <section className="cards">
        {items.map((item) => (
            <Characteritem key={item.char_id} item={item}></Characteritem>
        ))}
    </section>
    )
}

export default Charactergrid
