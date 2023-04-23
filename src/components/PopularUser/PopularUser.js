import React ,{useEffect, useState}from 'react'
import axios from 'axios'
import {PopularUsersConatiner} from './styles'
import UserCard from './UserCard/UserCard'
const rootUrl='http:///api.github.com'

const arr=[1,2, 3]
function PopularUser() {
    const [users, setUsers] =useState([])
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get(
              "https://api.github.com/search/users?q=created:2023-03-01..2023-03-31&sort=followers&order=desc&per_page=3"
            );
            const userLogins = response.data.items.map((item) => item.login);
            const userPromises = userLogins.map((login) =>
              axios.get(`https://api.github.com/users/${login}`)
            );
            const userResponses = await Promise.all(userPromises);
            const fetchedUsers = userResponses.map((response) => ({
              login: response.data.login,
              followers: response.data.followers,
              created_at: response.data.created_at,
              starred_url:response.data.starred_url


            }));
            setUsers(fetchedUsers);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchUsers();
      }, []);

      console.log(users)
      return (

        <PopularUsersConatiner>
{arr.map((a)=>{
    return <UserCard key={a}/>
})}
        </PopularUsersConatiner>
       
      )
    
}

export default PopularUser



//  //    .then((res)=>{
//     //     setUsers(res.data.items)
//     //     return res
//     //    })
//     if(userslist){
//         {userslist.map((user)=>{
//          const y= axios(`${rootUrl}/users/${user.login}`)
       
//           console.log(y)

//         })}
//        }


// const getUsers=async()=>{
//     const u= await axios(`${rootUrl}/search/users?q=followers&sort=followers&order=desc&per_page=3`)
//  setUserslist(u.data.items)

     
//     }
 
//     useEffect(() => {
//         getUsers()
//     }, [])
// //console.log(userslist)


 // if (userslist.length > 0) {
    //getUsersInfo();
    // }



    
    // const accessToken = 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
    // const config = {
    //     headers: {
    //       Authorization: `Bearer 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`
    //     }
    //   };


    // const [userslist, setUserslist] = useState([])
    // const [usersInfo, setUsersInfo]= useState([])


    // // https://api.github.com/search/users?q=${WHAT_WHOULD_GO_HERE}&sort=followers&order=desc
    // useEffect(() => {
    //     const getUsers = async () => {
    //       try {
    //         const res = await axios.get(`${rootUrl}/search/users?q=created:<2011-01-01&sort=followers&order=desc&per_page=100`,);
    //         setUserslist(res.data.items);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };
    //    getUsers();
    //   }, []);

    //   console.log(userslist)
    //   useEffect(() => {
    //     const getUsersInfo = async () => {
    //       const userPromises = userslist.map((user) => axios.get(`${rootUrl}/users/${user.login}`,));
    //       const usersInfo = await Promise.all(userPromises);
    //     //   console.log(usersInfo)
    //       setUsersInfo(usersInfo)
    //      //console.log(usersInfo)
    //     //   const sortedUsers = usersInfo.sort(
    //     //      (a, b) => new Date(b.data.created_at) - new Date(a.data.created_at)
    //     //    );
    //     //    setUsersInfo(sortedUsers);
    //     };
    
    //     getUsersInfo();
    //   }, [userslist]);

 
        