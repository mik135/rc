import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


// eslint-disable-next-line react/prop-types
function CardContainer({ src, title, description }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={src} style={{height: "100%"}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Meet Up</Button>
      </Card.Body>
    </Card>
  );
}

export default CardContainer;