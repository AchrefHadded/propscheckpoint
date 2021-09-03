const Fullname = (props) => {
  return (
    <div>
      <h1>this is your name:{props.name}</h1>
    </div>
  );
};
export default Fullname;

Fullname.defaultProps = {
  name: "guest",
};
