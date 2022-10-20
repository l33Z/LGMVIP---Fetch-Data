import { useState } from "react";
import "./App.css";

function App() {
  const [DataList, setDataList] = useState([]);
  const [Loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    const res = await fetch("https://reqres.in/api/users?page=1");
    const data = await res.json();
    setLoading(false);
    setDataList(data.data);
  };

  return (
    <>
      <div className="main">
        <div className="navbar">User Data</div>
        <button className="btn" onClick={getUsers}>
          Get User Data
        </button>
        {Loading ? (
          <div className="LoaderMain">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <div className="UserList">
            {DataList.map((user) => {
              return (
                <div className="list" key={user.id}>
                  <img src={user.avatar} alt="img" />
                  <div className="info">
                    <h2>
                      Name : {user.first_name} {user.last_name}
                    </h2>
                    <h2>Email : {user.email}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
