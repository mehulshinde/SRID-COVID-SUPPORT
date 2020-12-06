import '../styles/App.css';
import '../styles/VolunteerDashboard.css';
import { useHistory } from 'react-router-dom';

export default function VolunteerDashboard(){
    const history = useHistory();
        return (
            <>
                <div className="back">
                    <div className="library-fontello">
                        <i className="icon-torso"></i>
                    </div>
                    <a onClick={() => {
                        history.push('/');
                        //    TODO: Add path to home page(default I assume)
                    }}>Logout</a>
                </div>
                <div className="title">
                    <h2>Volunteer Dashboard</h2>
                </div>
                <div className="body">
                    <div align="center" className="library-fontello">
                        <i
                            className="icon-clipboard body-icons"
                            onClick={() => {
                                history.push('/edit-volunteer-data');
                            }}
                        ></i>
                        <p onClick={() => {
                            history.push('/edit-volunteer-data');
                        }}>Edit Availability and Health Status</p>
                    </div>
                    <br/>
                    <br/>
                    <div align="center" className="library-fontello">
                        <i
                            className="icon-basket body-icons"
                            onClick={() => {
                                history.push('/');
                            }}
                        ></i>
                        <p onClick={() => {
                            history.push('/');
                        //    TODO Add your reroute path here
                        }}>View Requests</p>
                    </div>
                </div>
            </>
        );
}
