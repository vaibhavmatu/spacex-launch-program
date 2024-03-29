import React from "react";
import PropTypes from "prop-types";

import "./MissionCard.css";

const MissionCard = ({ launch }) => {
  return (
    <div className="Missioncard">
      <div className="card-body">
        <div className="img">
          <img src={launch.links.mission_patch_small} alt="rocket" />
        </div>
        <label className="label">
          {`${launch.mission_name} #${launch.flight_number}`}
        </label>
        <div className="missions">
          <strong>Mission Id: </strong>
          {launch.mission_id.length ? (
            <ul>
              {launch.mission_id.map((id, i) => (
                <li key={`mid-${i}`}> {id} </li>
              ))}
            </ul>
          ) : (
            <span> No Data</span>
          )}
        </div>
        <div>
          <strong>Launch Year: </strong>
          <span>{launch.launch_year}</span>
        </div>
        <div>
          <strong>Successful Launch:</strong>
          <span>{launch.launch_success ? " true" : " false"}</span>
        </div>
        <div>
          <strong>Successful Landing:</strong>
          <span>
            {launch.rocket.first_stage.cores[0].land_success
              ? " true"
              : " false"}
          </span>
        </div>
      </div>
    </div>
  );
};

MissionCard.propTypes = {
  launch: PropTypes.shape({
    links: PropTypes.object.isRequired,
    mission_name: PropTypes.string.isRequired,
    flight_number: PropTypes.number.isRequired,
    mission_id: PropTypes.array,
    launch_year: PropTypes.string.isRequired,
    launch_success: PropTypes.bool.isRequired,
    rocket: PropTypes.object.isRequired,
  }).isRequired,
};
export default MissionCard;
