import React, { useState } from "react";
// import { useGetAlbumsQuery } from "../../services/jsonServerApi";

export const Login = () => {
  const [userData, setUserData] = useState({login:"", password:""})
//   const { data: albums } = useGetAlbumsQuery(1);

  
  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    setUserData({...userData, [name]:value});
  }


  const handleLogin = async () => {
    await addProduct({...userData}).unwrap();
  }


  const handleDelete = async (id) => {
    // await deleteProduct(id).unwrap();
  }



  return (
    <div class="bg-blue-400 h-screen w-screen">
        <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
            <div class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style={{height: "500px"}}>
                <div class="flex flex-col w-full md:w-1/2 p-4">
                    <div class="flex flex-col flex-1 justify-center mb-8">
                        <h1 class="text-4xl text-center font-thin">Welcome Back</h1>
                        <div class="w-full mt-4">
                            <form class="form-horizontal w-3/4 mx-auto" method="POST" action="#">
                                <div class="flex flex-col mt-4">
                                    <input onChange={handleChange} id="login" type="text" name="login" value={userData?.login} required placeholder="Email" class="flex-grow h-8 px-2 border rounded border-grey-400" />
                                </div>
                                <div class="flex flex-col mt-4">
                                    <input onChange={handleChange} id="password" type="password" name="password" value={userData?.password} required placeholder="Password" class="flex-grow h-8 px-2 rounded border border-grey-400" />
                                </div>
                                <div class="flex flex-col mt-8">
                                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block md:w-1/2 rounded-r-lg" style={{background:"url(https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80)", backgroundSize: "cover", backgroundPosition: "center center"}}></div>
            </div>
        </div>
    </div>
  );
};

export default Login;