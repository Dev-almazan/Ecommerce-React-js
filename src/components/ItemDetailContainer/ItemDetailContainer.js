
import Form from 'react-bootstrap/Form';
import { BsArrow90DegLeft , BsFillBagPlusFill} from "react-icons/bs";


import './ItemDetailContainer.css';

import Items from '../ItemListContainer/data.json';
import { useParams ,useNavigate} from 'react-router-dom';
import { useState , useEffect } from 'react'; 


        const ItemDetailContainer = () =>
        {

            const {id} = useParams();

            const [item, setitems] = useState([]);

            const navigate = useNavigate();

            const handleRegresar = () =>
            {
                navigate(-1)
            }

            const pedirData = () =>
            {
                            return new Promise( (res)=>
                            {
                                res(Items);            
                                    
                            })
            };

            useEffect(() => {
                pedirData()
                        .then((result) => {

                                if(id)
                                {
                                    setitems(result.filter(item  => item.id == id));
                                    
                                }
                                        
                        }).catch((err) => {
                                        console.log(err);
                        });
            },[id]);

                        
            return(
                <div className='content' key={id}>
                       
                                       {
                                                       item.map((data=>
                                                       (
                                                        
                                                        <div className="item card " >
                                                            <div className='row col-md-12 '>
                                        
                                                                    <div className='col-md-6'>
                                        
                                                                            <img  className='img-principal'  src={require(`../../img/media/${data.img}`)} ></img>

                                                                      
                                                                    </div>
                                        
                                                                    <div className='col-md-6' >

                                        
                                                                        <h1 className='text-center'>{data.name} {data.model}  </h1>
                                                                  
                                                                                
                                                                        <div className='row col-md-10 carrito '>

                                                                                        <div className='col-md-3 pt-1  mt-2'>
                                                                                                
                                                                                        <Form.Select aria-label="Default select ">
                                                                                                
                                                                                                <option value="1">1</option>
                                                                                                <option value="2">2</option>
                                                                                                <option value="3">3</option>
                                                                                                <option value="4">4</option>
                                                                                        </Form.Select>

                                                                                        </div>
                                                                                        <div className="col-md-7 mt-2">
                                                                                                <div id="buy-now" className="btn btn-lg buy-now-button btn-primary"><BsFillBagPlusFill /> Añadir al carrito</div>
                                                                                      </div>          
                                                                                
                                                                        </div>    

                                                                                <div classNameName='text-left'>
                                                                                        <h4>Precio </h4> 
                                                                                        <h2 className='text-primary'><b>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(data.price)}</b></h2>
                                                                                </div>   
                                                                                <div classNameName='text-left'>
                                                                                        <h4>Modelo</h4> 
                                                                                        <p>{data.model} </p>
                                                                                </div>
                                                                                <div classNameName='text-left'>
                                                                                        <h4>Descripción</h4> 
                                                                                        <p>{data.description} </p>
                                                                                </div>
                                                                                <div classNameName='text-left' >
                                                                                        <h4>Dimensiones</h4> 
                                                                                        <p>{data.size} </p>
                                                                                </div>
                                                                                
                                                                                <button className='btn btn-outline-primary' onClick={handleRegresar}>Regresar <BsArrow90DegLeft /></button>          

                                                                                        
                                                                </div>       

                                        
                                                        </div>                        
                                        
                                                        </div>
                                        
                                                       )))
                                                       
                                       }
                                    
               </div>
               
               );
        
}

 export default ItemDetailContainer;