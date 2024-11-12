// import logo from './logo.svg';
import './App.css';
import Table1 from './deatils/Table1';
import Table2 from './deatils/Table2';
import Form from './deatils/Form';
import State from './State';


function App() {
  let users = [
    { id: 1, firstName: "Praveen", age: 28, gender: "male", email: "praveen.johnson@x.dummyjson.com" },
    { id: 2, firstName: "Michael", age: 35, gender: "male", email: "michael.williams@x.dummyjson.com" },
    { id: 3, firstName: "Sowmiya", age: 42, gender: "female", email: "sowmiya.brown@x.dummyjson.com" },
    { id: 4, firstName: "Ajith", age: 45, gender: "male", email: "ajith.davis@x.dummyjson.com" },
    { id: 5, firstName: "Varshini", age: 30, gender: "female", email: "varshu.ff@x.dummyjson.com" },
    { id: 6, firstName: "Olivia", age: 22, gender: "female", email: "olivia.wilson@x.dummyjson.com" },
    { id: 7, firstName: "Alexander", age: 38, gender: "male", email: "alexander.jones@x.dummyjson.com" },
    { id: 8, firstName: "Ava", age: 27, gender: "female", email: "ava.taylor@x.dummyjson.com" },
    { id: 9, firstName: "Ethan", age: 33, gender: "male", email: "ethan.martinez@x.dummyjson.com" },
    { id: 10, firstName: "Isabella", age: 31, gender: "female", email: "isabella.anderson@x.dummyjson.com" }
  ];

  return (
    <>
    {/* <div className="App">
      <table>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
          {users.map((user) => (
            <tr>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
          </tr>
          ))}
      </table>
    </div> */}
    {/* <Table2/> */}
    {/* <Form/> */}
    <State/>
    </>
  );
}

export default App;
