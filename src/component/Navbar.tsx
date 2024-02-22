import React from "react";
// import { NavLink } from 'react-router-dom'
import { Box, List } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const cssClass = "sub-header-box-NavLink";
  return (
    <Box className="sub-header-box">
      <NavLink
        to="/updated-job-and-msr"
        style={({ isActive }) => ({
          color: isActive ? "rgb(7, 7, 124" : "",
          borderBottom: isActive ? "3px solid rgb(7, 7, 124)" : "none",
        })}
        className={cssClass}
      >
        Updated Job and MSR
      </NavLink>
      <NavLink
        to="/dropdown-list-edition"
        style={({ isActive }) => ({
          color: isActive ? "rgb(7, 7, 124" : "",
          borderBottom: isActive ? "3px solid rgb(7, 7, 124)" : "none",
        })}
        className={cssClass}
      >
        Dropdwon List Edition
      </NavLink>
      <NavLink
        to="/edit-tooltip"
        style={({ isActive }) => ({
          color: isActive ? "rgb(7, 7, 124" : "",
          borderBottom: isActive ? "3px solid rgb(7, 7, 124)" : "none",
        })}
        className={cssClass}
      >
        Edit Tooltip
      </NavLink>
      <NavLink
        to="/timeline"
        style={({ isActive }) => ({
          color: isActive ? "rgb(7, 7, 124" : "",
          borderBottom: isActive ? "3px solid rgb(7, 7, 124)" : "none",
        })}
        className={cssClass}
      >
        Timeline
      </NavLink>
      <NavLink
        to="/manage-user-roles"
        style={({ isActive }) => ({
          color: isActive ? "rgb(7, 7, 124" : "",
          borderBottom: isActive ? "3px solid rgb(7, 7, 124)" : "none",
        })}
        className={cssClass}
      >
        Manage User Roles
      </NavLink>
      <NavLink
        to="/manage-px"
        style={({ isActive }) => ({
          color: isActive ? "rgb(7, 7, 124" : "",
          borderBottom: isActive ? "3px solid rgb(7, 7, 124)" : "none",
        })}
        className={cssClass}
      >
        Manage PX
      </NavLink>
      <NavLink
        to="/assignment"
        style={({ isActive }) => ({
          color: isActive ? "rgb(7, 7, 124" : "",
          borderBottom: isActive ? "3px solid rgb(7, 7, 124)" : "none",
        })}
        className={cssClass}
      >
        Assignment
      </NavLink>
      <NavLink
        to="/manage-attachment"
        style={({ isActive }) => ({
          color: isActive ? "rgb(7, 7, 124" : "",
          borderBottom: isActive ? "3px solid rgb(7, 7, 124)" : "none",
        })}
        className={cssClass}
      >
        Manage Attachment
      </NavLink>
    </Box>
  );
};

export default Navbar;
