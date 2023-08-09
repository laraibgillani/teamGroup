import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import Footer from "./footer";
import Employees from "./Employees";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroupedTeamMember from "./GroupedTeamMember";

function App() {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
  );
  const [employees, setemployees] = useState(
    JSON.parse(localStorage.getItem("employeesList")) || [
      {
        id: 1,
        fullname: "Bob jones",
        desiganation: "javascript Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullname: "jill baily",
        desiganation: "node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullname: "Gail shaperd",
        desiganation: "java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullname: "San Renolds",
        desiganation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullname: "David henery",
        desiganation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullname: "Sarah blake",
        desiganation: "SQL server Develper",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullname: "lita stones",
        desiganation: "c++ Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullname: "Harry jones",
        desiganation: "vue Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullname: "Danial",
        desiganation: "python Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullname: "Adrien",
        desiganation: "jango Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullname: "Devin",
        desiganation: "Graphics Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullname: "jassica fey",
        desiganation: "Api Developer",
        gender: "female",
        teamName: "TeamD",
      },
    ]
  );
  useEffect(() => {
    localStorage.setItem("employeesList", JSON.stringify(employees));
  }, [employees]);
  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelection(event) {
    setTeam(event.target.value);
  }
  function handleEmployeeCard(event) {
    const transformEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setemployees(transformEmployees);
  }

  // useEffect(() => {
  //   console.log( );
  // }, []);

  return (
    <>
      <Router>
        <Nav />
        <Header
          selectedTeam={selectedTeam}
          teamMemberCount={
            employees.filter((employee) => employee.teamName === selectedTeam)
              .length
          }
        />
        <Routes>
          <Route
            path="/"
            element={
              <Employees
                selectedTeam={selectedTeam}
                employees={employees}
                handleEmployeeCard={handleEmployeeCard}
                handleTeamSelection={handleTeamSelection}
              />
            }
          ></Route>
          <Route
            path="/GroupedTeamMember"
            element={
              <GroupedTeamMember
                employees={employees}
                selectedTeam={selectedTeam}
                setTeam={setTeam}
              />
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
