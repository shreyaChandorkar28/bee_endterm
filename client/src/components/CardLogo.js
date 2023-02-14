import Card from 'react-bootstrap/Card';
import './CardStyles.css'
function BodyOnlyExample() {
  return (
    <div className='ca'>
    <Card>
      <Card.Body>Company Name</Card.Body>
    </Card>
    </div>
  );
}

export default BodyOnlyExample;