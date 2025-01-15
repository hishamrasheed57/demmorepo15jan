import { useEffect,useState } from "react";

function Users()
{
    const [users,setUsers]=useState([])
    useEffect(()=>{fetch("https://jsonplaceholder.typicode.com/users")
     .then(res=>res.json())
     .then(data=>setUsers(data))
    },[])
    return(
        <>
        <h2> user list</h2>
        <ul>
            {users.map((user)=><li>{user.name}</li>)}

            <table border='1'>
        <tr><th>Name</th><th>Email</th><th>Phone</th></tr>
        {users.map((user)=><tr><td>{user.name}</td><td>{user.email}</td><td>{user.phone}</td></tr>)}
        </table>

        </ul>
        </>
    )
}
export default Users;