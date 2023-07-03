const Licom = ()=>{
    const sellerdb = 
        [
            {
                imgsrc : "../srcimg/newb.png" ,
                brandnm : "뉴트리코어",
                proprice : 462000,
                saleprice : 33000,
                pronm : "유기농비오틴 1박스"
            },
            {
                imgsrc : "../srcimg/ptw.png" ,
                brandnm : "파이토웨이",
                proprice : 474000,
                saleprice : 79000,
                pronm : "판토모나 비오틴 플러스맥스 여성용 1박스"
            },
            {
                imgsrc : "../srcimg/ptns.png" ,
                brandnm : "파이토웨이",
                proprice : 79000,
                saleprice : 79000,
                pronm : "할인안해"
            },
            {
                imgsrc : "../srcimg/ptm.png" ,
                brandnm : "파이토웨이",
                proprice : 474000,
                saleprice : 79000,
                pronm : "판토모나 비오틴 플러스맥스 남성용 1박스"
            },
    
        ]
        
    
   
    
    return( 
        <>
        <div>
        

        </div>
    
        <ul className="d-flex flex-wrap container" id="product" >
            {
                  sellerdb.map((v,i)=>{
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