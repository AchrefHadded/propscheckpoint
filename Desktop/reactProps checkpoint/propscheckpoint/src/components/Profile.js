import React from "react";
import Fullname from "./Fullname";
import Bio from "./BioAndProfession";
import { Profession } from "./BioAndProfession";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <>
      {props.profile.map((item, key) => (
        <div>
          <Fullname name={item.fullname} />
          <Bio bio={item.bio}>{item.photo}</Bio>
          <Profession profession={item.profession} />
          <button href="/" onClick={(e) => props.children(item.fullname, e)}>
            Click Me!
          </button>
          <hr />
        </div>
      ))}
    </>
  );
};
export default Profile;

//  export const HandleName = ({ handleName }) => {
//      return (
//         <a href="/" onclick={e => handleName(e)}>
//          Click Me!
//          </a >
//      );
//  };

Profile.propTypes = {
  fullname: PropTypes.string,
  bio: PropTypes.string,
};
