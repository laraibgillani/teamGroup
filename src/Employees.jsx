import React from "react";
import Teams from "./Teams";
import TeamMembers from "./TeamMembers";
export default function Employees({
  employees,
  selectedTeam,
  handleEmployeeCard,
  handleTeamSelection,
}) {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <Teams
            selectedTeam={selectedTeam}
            handleTeamSelection={handleTeamSelection}
          />
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers
              employees={employees}
              handleEmployeeCard={handleEmployeeCard}
              selectedTeam={selectedTeam}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
