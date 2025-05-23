import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Cadnoticia() {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="titulonoticia">
                    <Form.Label>Título Notícia</Form.Label>
                    <Form.Control type="text" placeholder="Informe o Título da Notícia" maxLength={2}/>
                    <Form.Text className="text-muted">
                        Aqui você deve informar o título de sua notícia.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
