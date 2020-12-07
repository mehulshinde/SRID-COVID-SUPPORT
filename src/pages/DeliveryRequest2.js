import '../styles/App.css';

import { useHistory } from 'react-router-dom';
export default function  DeliveryRequest2(){
    const history = useHistory();

    function handleSubmit(event) {
     
            if (!event.target.elements.milk_available.checked ||
                !event.target.elements.yoghurt_available.checked ) {
                alert("You have not checked all the items. Are you sure you want to mark the Request as Done?")
                // TODO: Disable volunteer and Redirect to Dashboard
                history.push('/viewRequests2');
            } else if  (event.target.elements.milk_available.checked &&
                event.target.elements.yoghurt_available.checked ) {
                alert(" Are you sure you want to mark the Request as Done?")
                // TODO: Disable volunteer and Redirect to Dashboard
                history.push('/viewRequests2');
            }
            event.preventDefault();
        
    }

        return (
            <>
                <div className="library-fontello">
                    <i
                        className="icon-left-open back"
                        // onClick={() => {
                        //     history.push('/item-list');
                        // }}
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
                            <input type="submit" className="btn-primary btn" value="Edit Items" id="submit"></input>
                        </div>
                           
                        </div>
                        <div class="table"> 
                        <table>
                        <thead>
                            <tr> 
                                
                                <th><div className="library-fontello">
                        <i class="icon-comment-alt"></i> Chat </div></th> 
                        <th><div className="library-fontello">
                        <i class="icon-phone"></i> Call </div></th> 
                        <th><div className="library-fontello">
                        <i class="icon-basket"></i> Done </div></th> 
                                
                              </tr>
                            </thead>
                           


                    </table>
                    </div>
                </div>
            </>
        );
}