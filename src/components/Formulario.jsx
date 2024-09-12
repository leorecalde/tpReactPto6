import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Formulario.css";
import ListaColores from "./ListaColores";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const leerLocalStorage = JSON.parse(localStorage.getItem("coloresKey")) || [];
  const [arrayColores, setArrayColores] = useState(leerLocalStorage);

  useEffect(() =>{
    console.log("se habilita el ciclo de vida de useEffect");
    localStorage.setItem("coloresKey", JSON.stringify(arrayColores));
  }, [arrayColores])

  
  const [color, setColor] = useState(""); // Estado para el color actual

  const onSubmit = (data) => {
    console.log(data.colores);
    setArrayColores([...arrayColores, data.colores]);
    reset();
    setColor(""); // Resetea el estado del color actual
  };

  const borrarColor = (nombreColor) => {
    const arrayFiltrado = arrayColores.filter((color) => color !== nombreColor);
    setArrayColores(arrayFiltrado);
  };

  return (
    <article>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="row bg-celeste p-5">
          <div className="border border-danger bg-danger col-3"></div>
          <Form.Group className="mb-3 mt-5 col-9">
            <Form.Label>Ingresa un color EN INGLES</Form.Label>
            <Form.Control
              {...register("colores", {
                required: "Debes ingresar un color",
                minLength: {
                  value: 3,
                  message: "El mínimo debe ser 4 caracteres",
                },
                maxLength: {
                  value: 20,
                  message: "El máximo de caracteres debe ser 20",
                },
              })}
              type="text"
              placeholder="Red, blue, green, yelow, black, white"
              value={color} 
              onChange={(e) => setColor(e.target.value)}
            />
            <Form.Text className="text-danger mb-3">
              {errors.colores?.message}
            </Form.Text>
          </Form.Group>
        </div>
        <div className="d-flex justify-content-end mt-5">
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </div>
      </Form>
      <ListaColores arrayColores={arrayColores} borrarColor={borrarColor} />
    </article>
  );
};

export default Formulario;
