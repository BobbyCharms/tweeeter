import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Twit.css';
import { HandThumbsUp, HandThumbsDown, Chat } from 'react-bootstrap-icons';

const containerStyles = {
    margin: '30px'
}

const cardStyles = {
  width: '36rem',
};

function Twit(props) {
  return (
    <div className="twit">
        <Container className="d-flex justify-content-center mb-5">
      <Card style={cardStyles}>
        <Card.Header as="h5">
          <b>@{props.username}:</b>
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.twit}</Card.Title>
          <Card.Text>{props.createdOn}</Card.Text>
          <Container className="d-flex justify-content-start">
            <Chat className="mx-3"/>
            <HandThumbsUp className="mx-3"/>
            <HandThumbsDown className="mx-3"/>
          </Container>
        </Card.Body>
      </Card>
      <div>
      </div>
      
    </ Container>
    </div>
  );
}

export default Twit;
