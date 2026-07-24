import {useState, useContext}  from "react"
import {userContext} from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { login } = useContext(UserContext);
    const navigate = useNavigate();
  
    const handleSumit =(e) =>{
      e.preventDefault()
  
      if (!email || !password){
        alert("Campos Vacios")
        return
      }
      console.log(email, password)

    if (password.length < 6) {
      alert("El password debe tener al menos 6 caracteres")
      return 
    }
     alert("Authentication Succesfuly")
    console.log(email, password)

    setEmail("")
    setPassword("")
    }


  return (
    <>
       <div  className="container my-5 validador-form">
        <form onSubmit={handleSumit}>

        <h2>Login</h2>
      <div className="form-group mb-3">
      <label className="form-label">Email</label>
      <input
      
      type="email"
      className="form-control"
      name="email"
      value={email}
      placeholder="Ingresa tu Correo"
      onChange={(e) => setEmail(e.target.value)}
      >
      </input>
      </div>
      
      
      <div className="form-group mb-3">
      <label className="form-label">Contraseña</label>
        <h2>Password</h2>

      <input
      type="password"
      className="form-control"
      name="password"
      value={password}
      placeholder="Ingresa tu Contraseña"
      onChange={(e) => setPassword(e.target.value)}
      >
      </input>
</div>

        <div style={{ marginTop: "10px" }}>
          <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
        </div>

    </form>
    </div>
    </>
  )
}

export default Login