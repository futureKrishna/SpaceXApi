import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react';
import "../styles/launchPads.css"
import { NavLink } from 'react-router-dom'

const LaunchPads = () => {
  const [launchPads, setLaunchPads] = useState([]);

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v4/launchpads')
      .then(res => {
        setLaunchPads(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  
  const launchPadCards = launchPads.map(launchPad => (

    (launchPad.launches.length!==0)?
    <div className='flex-container'>
    <Card key={launchPad.id}>
      <Image className='image' src={launchPad.images.large} />
      <Card.Content>
        <Card.Header className="name"><b>Name :</b>{launchPad.name}</Card.Header>
        <div className='detail-div'><Card.Meta><b>Details :</b>{launchPad.details}</Card.Meta></div>
        <Card.Meta className="status"><b>Status :</b>{launchPad.status}</Card.Meta>
        <Card.Meta className="launch_successes"><b>Launch Success :</b>{launchPad.launch_successes}</Card.Meta>
        <Card.Meta className="status"><p><strong>Top Launches :</strong></p ><NavLink className='launches' to={`/launchdetail/${launchPad.launches[0]}`}>View Launch 1</NavLink></Card.Meta>
        <Card.Meta className="status"><NavLink className='launches' to={`/launchdetail/${launchPad.launches[1]}`}>View Launch 2</NavLink></Card.Meta>
        <Card.Meta className="status"><NavLink className='launches' to={`/launchdetail/${launchPad.launches[2]}`}>View Launch 3</NavLink></Card.Meta>
      </Card.Content>
    </Card>
    </div>
    :
    <div className='flex-container'>
    <Card>
    <Image className='image' src={launchPad.images.large} />
      <Card.Content>
        <Card.Header className="name"><b>Name :</b>{launchPad.name}</Card.Header>
        <div className='detail-div'><Card.Meta><b>Details :</b>{launchPad.details}</Card.Meta></div>
        <Card.Meta className="status"><b>Status :</b>{launchPad.status}</Card.Meta>
        <Card.Meta className="status"><b>Top Launches :</b>No Launch Available</Card.Meta>
      </Card.Content>
    </Card>
    </div>
  ))

  return (
    <Card.Group>
      <div className="random">
      {launchPadCards}
        <br />
      </div>
    </Card.Group>
  );
};

export default LaunchPads;
