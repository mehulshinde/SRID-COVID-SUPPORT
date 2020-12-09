import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function VolunteerSelection(props) {
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

  function setVolunteer(e) {
    e.preventDefault();
    //console.log(startDate + streetAddress + city + state + zipCode + frequency);
    props.setRequests(
      props.requests.map((request, ind) => {
        if (ind === props.requests.length - 1) {
          return { ...request, volunteer: selected };
        } else {
          return request;
        }
      })
    );

    alert('Your on-demand request has been submitted');
    props.history.push('/user-home');
  }

  return (
    <>
      <div className="title">Volunteer Selection</div>
      <div className="body">
        <h2>Select a Nearby Volunteer</h2>
        {volunteers &&
          volunteers.map((volunteer) => {
            return (
              <div
                onClick={onClick}
                key={volunteer.name}
                className="py-3"
                style={{
                  backgroundColor:
                    selected === volunteer.name ? 'white' : '#d6d5d8',
                }}
              >
                <span style={{fontSize: '20px'}}>{volunteer.name}</span>
              </div>
            );
          })}
        <Button
          type="submit"
          onClick={setVolunteer}
          style={{ float: 'right', marginTop: '20px' }}
        >
          Request
        </Button>
      </div>
    </>
  );
}
