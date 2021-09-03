import "./App.css";
import Profile from "./components/Profile";

const App = () => {
  const arr = [
    {
      fullname: "akrem",
      bio: "love nature",
      profession: "dentist",
      photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    { fullname: "monji", bio: "basketball fan ", profession: "engineer" },
    {
      fullname: "nour",
      bio: "pets lover ",
      profession: "veterinaire",
      photo:
        "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",
    },
    {
      bio: "painter and love arts",
      profession: "secretary",
    },
  ];

  const handleName = (name, e) => {
    e.preventDefault();
    alert(`hello ${name}`);
  };
  return (
    <div>
      {/* <Profile profile={arr} FNhandleName={handleName}>{handleName}</Profile> */}
      <Profile profile={arr}>{handleName}</Profile>
    </div>
  );
};

export default App;
