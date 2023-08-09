import React from "react";
import TeamMemberCard from "./TeamMemberCard";
export default function TeamMembers({
  employees,
  handleEmployeeCard,
  selectedTeam,
}) {
  return employees.map((employee) => (
    <TeamMemberCard
      employee={employee}
      selectedTeam={selectedTeam}
      handleEmployeeCard={handleEmployeeCard}
    />
  ));
}
