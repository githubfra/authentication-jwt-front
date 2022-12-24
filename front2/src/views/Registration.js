import React, { useContext,  useState } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/Context";


const Registration = () => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()
  const [info, setInfo] = useState()

  const [checked, setChecked] = useState()


  const onChange = (e) => { setInfo({ ...info, [e.target.name]: e.target.value }) }

  const submitRegistration = (ev) => {

    ev.preventDefault();

    actions.postRegistration(info, navigate)

  }




  return (

     <div className="container-margin"> 

          <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={submitRegistration}>
              <div className="Auth-form-content">
                <div className="form-group mt-3">
                <label>Ingresa tus datos</label>
                  <input
                    type="text"
                    onChange={onChange}
                    className="form-control mt-1"
                    placeholder="Nombre"
                    name="name"
                  />
                </div>

                <div className="form-group mt-3">
                  <input
                    type="email"
                    onChange={onChange}
                    className="form-control mt-1"
                    placeholder="Correo"
                    name="email"
                  />
                </div>

                <div className="form-group mt-3">
                  <input
                    name="password"
                    onChange={onChange}
                    type="password"
                    className="form-control mt-1"
                    placeholder="Contraseña"
                  />
                </div>

                <div className="d-grid gap-2 mt-3">

                  <button type="submit" className="button-history">
                    Registrate
                  </button>
                </div>

              </div>
            </form>
          </div>
      
          </div> 



  );
}

export default Registration;