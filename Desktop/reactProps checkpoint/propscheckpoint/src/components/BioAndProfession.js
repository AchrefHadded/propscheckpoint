const Bio = (props) => {
  return (
    <div>
      <h1>Bio:{props.bio}</h1>
      <img src={props.children} style={{ width: 100, height: 100 }} />
    </div>
  );
};
export default Bio;

export const Profession = (props) => {
  return <h1>works as:{props.profession}</h1>;
};
Bio.defaultProps = {
  children: "https://www.hireseat.com/assets/img/profile-user.png",
};
