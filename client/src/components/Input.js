import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "./Input.css"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import { useState } from 'react';
import axios from "axios"

function Input() {

    const API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOGExZjE1NjAtYmYwMi00MGIzLWIzMjMtNGJkOWQ0MDM0ZGFlIiwidHlwZSI6ImFwaV90b2tlbiJ9.6_ZmntXEh659RQdtJYV-2jnn6DosbRv5fdN1DufzK2g"

    const [prompt, setPrompt] = useState("");
    const [image_url, setImageUrl] = useState("")

    function onChange(e) {
        setPrompt(e.target.value);
        console.log(prompt)
    }

    async function onClick(e) {
        e.preventDefault()

        const options = {

            method: 'POST',
            url: 'https://api.edenai.run/v2/image/generation',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'Bearer '+API_KEY
            },
            data: {
                response_as_dict: true,
                attributes_as_list: false,
                show_original_response: false,
                num_images: 1,
                providers: 'openai',
                text:prompt,
                resolution:'256x256'
            }
        };

        await axios.request(options).then(function (response) {
                console.log(response.data.openai.items[0].image_resource_url);
                setImageUrl(response.data.openai.items[0].image_resource_url)
            })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                  } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                  } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                  }
                  console.log(error.config);
            });

        // setImageUrl("https://a.ltrbxd.com/resized/sm/upload/n5/5n/kx/9f/r4crDJeIpT2ZDLmptpA27Q67NZG-1200-1200-675-675-crop-000000.jpg?k=037be4c709")
     
    }
    return (
        <div>
            <div className='input-form' style={styles}>
                <h2 style={{ styles }}>Image Generator</h2>
                <br></br>
                <Form action='/' method='post'>
                    <Form.Group as={Row} className="mb-3" controlId="login-email">
                        <Form.Label column sm="2">Enter Prompt</Form.Label>
                        <Col sm="3">
                            <Form.Control onChange={onChange} type="text" placeholder="Prompt" name="prompt" value={prompt} />
                        </Col>
                    </Form.Group>
                    <Button onClick={onClick} variant="dark">Generate Image</Button>
                </Form>
                <br></br>
                <br></br>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={image_url} alt="<h2>Click on Generate to Get an Image</h2>" thumbnail />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Input;