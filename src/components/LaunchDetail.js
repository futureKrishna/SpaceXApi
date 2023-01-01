import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Card} from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import "../styles/launchDetails.css"

const LaunchDetail = () => {
    const [launchDetail, setLaunchDetail] = useState({});
  
    let {id}=useParams()

    useEffect(() => {
      axios.get(`https://api.spacexdata.com/v4/launches/${id}`)
        .then(res => {
            setLaunchDetail(res.data);
        })
        .catch(err => {
          console.error(err);
        });
    }, [id]);

    // if(Object.keys(launchDetail).length>0)
    // {launchDetail.cores.map(item=>(
    //     console.log(item.reused)
    // ))}
    
    return (
    <div className='random1'> 
      {Object.keys(launchDetail).length>0?<Card key={launchDetail.id}>
        <img className='image1' alt='imagehai' src={launchDetail.links.patch.large} />
        <Card.Content>
          <Card.Header className="name1"><b>Name:</b>{launchDetail.name}</Card.Header>
          {launchDetail.details!==null?
          <div className='detail-div1'><Card.Meta><b>Details:</b>{launchDetail.details}</Card.Meta></div>
          :
          <div className='detail-div1'><Card.Meta><b>Details:</b>No Details Available</Card.Meta></div>
          }
          <Card.Meta className="launch_successes1"><b>Date UTC:</b>{launchDetail.date_utc}</Card.Meta>
          {launchDetail.fairings.reused!==null?
          <Card.Meta className="status1"><b>Reused:</b>True</Card.Meta>
          :
          <Card.Meta className="status1"><b>Reused:</b>False</Card.Meta>
        }
        </Card.Content>
      </Card>: null}
    </div>
    );
  };
  
  export default LaunchDetail;