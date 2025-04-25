import "./App.css";
import CardUser from "./components/CardUser";

function App() {
  const Users = [
    {
      avatar: "https://randomuser.me/api/portraits/men/1.jpg ",
      name : "Nguyen Van A",
      age : 21,
      
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/2.jpg ",
      name : "Tran Thi B",
      age : 22,
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/3.jpg ",
      name : "Le Van C",
      age : 23,
    },
    ]
    return (
    <div>
      <h1>Danh sach nguoi dung</h1>
      {Users.map((user, index) => (
        <CardUser
        key={index}
        avatar = {user.avatar}
        name= {user.name}
        age={user.age}
        />
      ))}
    </div>
    );
}

export default App;
