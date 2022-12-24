export const getState = ({ getActions, getStore, setStore}) => {
    return {
        store: {
           users: [],
           dataUser: [],
          
        },
        actions: {          
     

            getUsers: () => { 
              fetch("https://8080-4geeksacademy-htmlhello-x4krrz717wz.ws-us80.gitpod.io/users")
              .then((response) => response.json())
              .then(data => setStore({
                users: data.data,
              }))
              .catch(error => console.log(error))
            },

            postRegistration: (dataUsers, navigate) => { 
                fetch("https://8080-4geeksacademy-htmlhello-x4krrz717wz.ws-us80.gitpod.io/user", {
  
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(dataUsers) } )
                .then((response) => response.json())
                .then(data => {
                  setStore({
                    dataUsers: data,
                  })
                  navigate("/login")
                } )
                .catch(error => console.log(error))
              },

   
            postLogin: (dataUsers, navigate) => { 
              console.log(dataUsers);
              fetch("https://8080-4geeksacademy-htmlhello-x4krrz717wz.ws-us80.gitpod.io/login",
               {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataUsers) } )
              .then((response) => response.json())
              .then(data => { 
                setStore({ dataUsers: data, })
                navigate("/private")
                localStorage.setItem('infoLogin', JSON.stringify(data));
              })
              .catch(error => console.log(error))  
              },


              logout: (navigate) => {
                localStorage.removeItem("infoLogin");
                navigate("/");
              },



            }
    }
} 