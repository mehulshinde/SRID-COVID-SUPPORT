import '../styles/App.css';
import { useHistory } from 'react-router-dom';

export default function DeliveryRequest(){
    function handleSubmit(event) {
       
        event.preventDefault();
    }

        return (
            <>
                <div className="library-fontello">
                    <i
                        className="icon-left-open back"
                        
                    ></i>
                </div>
                <div className="title">
                    <h2> Mary's Request</h2>
                    <h3>07 Dec 2020 6 PM</h3>
                    
                </div>

                <div className="body">
                    
                            
                        <div class="table"> 
                           
                        <div>
                        <h2>Items List</h2>
                        
                        
                        <table>
                        <thead>
                            <tr> 
                                <th>Item</th>
                                <th>Quantity</th> 
                                <th>Available</th>
                                
                              </tr>
                            </thead>
                         
                            <tr>
                                <td>Organic Milk</td>
                                <td>1 Gallon</td>
                                <td><div>
                            <input type="checkbox" id="milk_available" name="milk" className="input-checkbox" />
                            
                        </div> </td>
                                
                                 
                            </tr>
                            
                            <tr>
                                <td>Organic Yoghurt</td>
                                <td>1 Lbs</td>
                                <td><div>
                            <input type="checkbox" id="yoghurt_available" name="yoghurt" className="input-checkbox" />
                            
                        </div> </td>
                                
                                 
                            </tr>
                            
                            </table>
                            </div>
                           
                           
                          
                        </div>
                            
                        <div align="center">
                        <div align="center">
                            <input type="submit" className="btn-primary btn" value="Process Delivery" id="submit"></input>
                        </div>
                        </div>
                        
                       
                </div>
            </>
        );
}