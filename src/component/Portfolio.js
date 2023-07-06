import React from 'react'
import  Licom from '../component/Licomponent'
import prolist from '../db/Bo'

const Portfolio = (props)=> {
    
    return (

        <section>
        
          <Licom dbnm={prolist.sellerdb} titlebd={{ span : "작은글씨타이틀", big : "큰글씨들 ", cls : ""}} ></Licom>
          <Licom dbnm={prolist.sellerdb} titlebd={{ span : "작은글씨타이틀", big : "큰글씨들 ", cls : ""}} ></Licom>
          <Licom dbnm={prolist.sellerdb2}  titlebd={{ span : "작은글씨타이틀2", big : "큰글씨들3 ", cls: "d-none"}} ></Licom>


         
        </section>
    )
}
export default Portfolio