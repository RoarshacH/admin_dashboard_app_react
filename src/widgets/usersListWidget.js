import React, { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function UsersListWidget() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState();
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    setLoading(true);
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);

      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
      //   console.log(users);
    };

    getUsers();
  }, []);

  return (
    <>
      <div className="col-md-3 mx-3 card mt-2  " style={{}}>
        <h4 className="font-weight-bold header-animated mt-2" style={{ marginBottom: "0rem" }}>
          User List
        </h4>
        <div className="align-items-center justify-content-center">
          {loading ? (
            ""
          ) : (
            <>
              <div class="table-responsive">
                <table class="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">User Name</th>
                      <th scope="col">Email</th>
                    </tr>
                  </thead>

                  <tbody>
                    {users?.map((value, i) => {
                      return (
                        <tr key={value.id}>
                          <td>{value.name}</td>
                          <td>{value.email}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
