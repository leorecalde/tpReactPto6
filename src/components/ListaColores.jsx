import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ListaColores = ({ arrayColores, borrarColor }) => {
  return (
    <div className="containar mt-3">
    <div className="d-flex flex-column align-items-center flex-md-row">
      {arrayColores.map((color, indice) => (
        <Card className="col-md mx-3" key={indice} style={{ width: "18rem" }}>
          <Card.Body className="d-flex flex-column">
            <Card.Title>{color}</Card.Title>
            <div
              className="border border-success col-3 p-5 my-3"
              style={{ backgroundColor: color }}
            ></div>
            <Button variant="danger" onClick={() => borrarColor(color)}>Borrar</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default ListaColores;
