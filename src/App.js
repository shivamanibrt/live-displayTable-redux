import { Col, Container } from 'react-bootstrap';
import './App.css';
import { DisplayContainer } from './Components/DisplayContainer'
import { SearchFormContainer } from './Components/SearchFormContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap'


function App() {
  return (
    <div className="wrapper bg-dark text-warning">
      <Container>
        <Row>
          <Col>
            <h1 className='text-center mt-5'> Search Form</h1>
          </Col>
        </Row>
        <hr />
        <SearchFormContainer />

        <DisplayContainer />
      </Container>

    </div>
  );
}

export default App;
