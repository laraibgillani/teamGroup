import React from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";
export default function TeamMemberCard({
  employee,
  handleEmployeeCard,
  selectedTeam,
}) {
  return (
    <div
      key={employee.id}
      id={employee.id}
      className={
        employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
      }
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCard}
    >
      {employee.gender === "male" ? (
        <img src={maleProfile} className="card-img-top" />
      ) : (
        <img src={femaleProfile} className="card-img-top" />
      )}
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullname}</h5>
        <p className="card-text">
          <b> Desiganation: </b>
          {employee.desiganation}
        </p>
      </div>
    </div>
  );
}
