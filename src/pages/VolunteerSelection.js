import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function VolunteerSelection() {
  const [volunteers, setVolunteers] = useState();
  const [selected, setSelected] = useState();

  useEffect(() => {
    setVolunteers([
      { name: 'Caleb Jones' },
      { name: 'Bertram Gilfoyle' },
      { name: 'Walter White' },
      { name: 'John Watson' },
    ]);
  }, []);

  function onClick(e) {
    const target = e.target;
    // console.log(e.target.textContent);
    setSelected(target.textContent);
	}


  return (
    <>
      <h2 className="mt-4">Volunteer Selection</h2>
      <div>Select a Nearby Volunteer</div>
      {volunteers &&
        volunteers.map((volunteer) => {
          return (
            <div
              onClick={onClick}
              key={volunteer.name}
              style={{
                backgroundColor: selected === volunteer.name ? 'gray' : 'white',
              }}
            >
              {/* <span style={{ width: '20px' }}>Hello</span> */}
              <span>{volunteer.name}</span>
            </div>
          );
        })}
				<Link to="/user-home">
      <Button>Request</Button>
			</Link>
    </>
  );

}
