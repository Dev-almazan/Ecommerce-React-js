
import './itemlistcontainer.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../../img/media/rn1.jpg';

import { useState , useEffect} from 'react';    

import Productos from './data.json';
import { Link, useParams } from 'react-router-dom';
import ItemList from "./ItemList"



const ItemListContainer = ({greeting}) =>
{



        const {categoryid} = useParams();

        const [productos, setProductos] = useState([]);

        const pedirDatos = () =>
        {
                        return new Promise( (resuelta,rechazada)=>
                        {
                                        resuelta(Productos);            
                                
                        })
        };
       


        useEffect(() => {
                        pedirDatos()
                                .then((result) => {

                                        if(categoryid)
                                        {
                                                setProductos(result.filter(productos  => productos.category == categoryid));
                                            
                                        }
                                        else
                                        {
                                                setProductos(result);
                                        }

                                                
                                }).catch((err) => {
                                                console.log(err);
                                });
        },[categoryid]);

       
             
            return(
                 <div className="itemlist">
                        
                        <ItemList productos={productos} />
  
                 </div>   
                
                );
}

 export default ItemListContainer;