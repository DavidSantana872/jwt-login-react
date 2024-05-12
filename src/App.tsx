import "./App.css";
import InputText from "./components/inputBox/InputText";
function App() {
  return (
    <>
      <div className="sectionForm">
      <section
        className="formContent"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "24px",
        }}
      >
        <form action="" style={{ width: "100%" }}>
          <h1 style={{color : "rgb(1, 197, 1)", borderRadius : "8px"}}>Inserta Credenciales</h1>
          <hr style={{color : "rgb(1, 197, 1)", marginBottom: "32px"}} />
          <div style={{ width: "100%" }}>
            <InputText
              typeInput="E-mail"
              placeholderInput="name@example.com"
              nameInput="Correo Electronico"
            ></InputText>
            <InputText
              typeInput="password"
              placeholderInput="contraseña"
              nameInput="Contraseña"
            ></InputText>
          </div>
          <div>
            <a href="" style={{color : "rgb(1, 197, 1)"}}>Olvide mi contraseña</a>
            <br />
            <div className="btnsBox">
              <div>
                <button className="btnForm crearCuenta">Crear Cuenta</button>
                <button className="btnForm Acceder" type="submit">
                  Acceder
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
      </div>
    </>
  );
}

export default App;
