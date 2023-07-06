

const Licom = (props)=>{
    
    return( 
        <>
        <div className="container pt-5">
        <p>돌고돌아 정착한</p>
        </div>
    
        <ul className="d-flex flex-wrap container" id="product" >
            {
                  props.dbnm.map((v,i)=>{
                    return(
                        <li className="d-flex position-relative col-md-6 pt-5">
                            {  v.proprice != v.saleprice && 
                                 <div className="salered" id="sale">{
                                Math.floor(100 - (v.saleprice / v.proprice) * 100) + '%'} </div>

                            }
                    <img src={v.imgsrc}></img>
                    <div>
                        <p className="brandnm pb-2">{v.brandnm}</p>
                        <h3 className="pronm pb-2">{v.pronm}</h3>
                        <div>
                            <strong className="proprice text-danger">{v.saleprice + "원"}</strong>
                            <span>{v.proprice}</span>
                        </div> 
                    </div>
                </li>
                    )
                })
               
            }
        </ul>
        </>
       
    )

}

        
export default Licom