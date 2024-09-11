import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ListaColores = ({ arrayColores }) => {
  return (
    <div>
      {arrayColores.map((color, indice) => (
        <Card key={indice} style={{ width: "18rem" }}>
          <Card.Body className="d-flex flex-column">
            <Card.Title>{color}</Card.Title>
            <div
              className="border border-success col-3 p-5 my-3"
              style={{ backgroundColor: color }}
            ></div>
            <Button variant="danger">Borrar</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ListaColores;
