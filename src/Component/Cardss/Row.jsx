import '../Main/Home.scss'
// import img from '../../pic.jpg'
const image_url = "https://image.tmdb.org/t/p/original"
const Card=({image})=>{
    return(<>
     <img className="card" src={image} alt="cover" />
    </>)
   
}
const Row=({title,arr=[]})=>{
   return(
   <>
   <div className="row">
    <h1>{title}</h1>
    <div>
        {
            arr.map((item,index)=>{
                return(
                    <Card key={index} image={`${image_url}/${item.poster_path}`}/>
                    
                )
                
            })
        }
    
    </div>
   
   </div>

   </>
   )
}
export default Row