import  useState  from "react"

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")

  const handleSumit = (e) => {
    e.preventDefault()

    if (!email || !password || !confirm) {
      alert("Campos Vacíos")
      return 
    }

    if (password.length < 6) {
      alert("El password debe tener al menos 6 caracteres")
      return 
    }

    if (password !== confirm) {
      alert("Las contraseñas deben ser iguales")
      return 
    }

    alert("Registro Exitoso")
    console.log(email, password, confirm)

    setEmail("")
    setPassword("")
    setConfirm("")
  }

  return (
    <>
      <div className="container my-5 validador-form">
        <form onSubmit={handleSumit}>
        <h2>Registro</h2>
        
        <div className="form-group mb-3">
          <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          placeholder="Ingresa tu Correo"
          onChange={(e) => setEmail(e.target.value)}
        /></div>

        <div className="form-group mb-3">
          <label className="form-label">Contraseña</label>
        <input
          type="password"
          className="form-control"
          value={password}
          placeholder="Ingresa tu Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        /></div>

        <div className="form-group mb-3">
        <label className="form-label">Confirmar Contraseña</label>
        <input
          type="password" 
          className="form-control"
          value={confirm}
          placeholder="Confirma tu Contraseña"
          onChange={(e) => setConfirm(e.target.value)}
        /></div>

        <div style={{ marginTop: "10px" }}>
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
      </div>
    </>
  )
}

export default Register