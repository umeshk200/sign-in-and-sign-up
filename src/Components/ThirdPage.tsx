// export default ThirdPage;
import React from 'react'
import { Link } from 'react-router-dom'

 function ThirdPage() {




  
  
  return (
    <div className='mainProfile' style={{display:'flex',justifyContent:'center'}}>
      <div className='profile' style={{width:'600px',alignItems:'center',textAlign:'center',marginBottom:'80px'}}>
       <h2 style={{color:'#f54952',marginTop:'20px'}}>Welcome To Andrew Adrian </h2>
       <img src='https://rehntitimage.blob.core.windows.net/rehntitimage/UserImage_89d8bc91-101b-465f-bdb4-0e8949177b03' alt='' style={{width:'100px',height:'100px',borderRadius:'50%',marginTop:'10px'}}></img>
       <p style={{marginTop:'10px'}}>Choose location</p>
   <div className="container">    
<div className="row" style={{marginTop:'50px'}}>
<div className="col" style={{border:'',margin:'auto'}}>
 <Link to='/dashboard'> <p className='hover "front-description"' style={{width:'200px',height:'150px',border:'none ',textAlign:'center',margin:'auto',lineHeight:'150px',color:'black',textDecoration:'none'}}>St. Pete Beach</p></Link>
</div>
<div className="col" style={{border:''}}>
<p className='hover' style={{width:'200px',height:'150px',border:'none',textAlign:'center',margin:'auto',lineHeight:'150px'}}>Carlsbad Shop</p>
</div>
</div>
<div className="row" style={{marginTop:'50px'}}>
<div className="col" style={{border:'',margin:'auto'}}>
  <p className='hover' style={{width:'200px',height:'150px',border:'none',textAlign:'center',margin:'auto',lineHeight:'150px'}}>Encinitas Shop</p>
</div>
<div className="col" style={{border:''}}>
<p className='hover' style={{width:'200px',height:'150px',border:'none',textAlign:'center',margin:'auto',lineHeight:'150px'}}>Test location </p>
</div>
</div>
<div className="row" style={{marginTop:'50px'}}>
<div className="col" style={{border:'',margin:'auto'}}>
  <p className='hover' style={{width:'200px',height:'150px',border:'none',textAlign:'center',margin:'auto',lineHeight:'150px'}}>Test location 2</p>
</div>
<div className="col" style={{border:''}}>
<p className='hover' style={{width:'200px',height:'150px',border:'none',textAlign:'center',margin:'auto',lineHeight:'150px'}}>new location</p>
</div>
</div>
<div className="row" style={{marginTop:'50px'}}>
<div className="col" style={{border:'',margin:'auto'}}>
  <p className='hover' style={{width:'200px',height:'150px',border:'none',textAlign:'center',margin:'auto',lineHeight:'150px'}}>Stripe</p>
</div>
<div className="col" style={{border:''}}>
<p className='hover' style={{width:'200px',height:'150px',border:'none',textAlign:'center',margin:'auto',lineHeight:'150px'}}>Stripe 2</p>
</div>
</div>
</div>

      </div>



    </div>
  )
}
export default ThirdPage;
