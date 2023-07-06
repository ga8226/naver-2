import React from 'react'
import  Licom from '../component/Licomponent'
import prolist from '../db/Bo'

const Portfolio = (props)=> {
    
    return (

        <section>
        
          <Licom dbnm={prolist.sellerdb}></Licom>
          <Licom dbnm={prolist.sellerdb2}></Licom>


         
        </section>
    )
}
export default Portfolio