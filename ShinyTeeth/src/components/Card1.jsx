import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Card1 = ({personajeProp}) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={personajeProp.image} />
      <Card.Body>
        <Card.Title>{personajeProp.name}</Card.Title>
        <Card.Text>
          <p>
            <strong>Description: </strong>{personajeProp.description}
          </p>

        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}
