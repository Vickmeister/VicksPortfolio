import React from 'react'
import { Form.Group, Form } from 'react-bootstrap';

export const ContactMe = () => {
    return (
        <Form>;

            <Form.Group controlId="formGroupName">;
                <Form.Control type="fullname" placeholder="Enter Name" />;
            </Form.Group>;

            <Form.Group controlId="formGroupPassword">;
                <Form.Control type="email" placeholder="Email" />;
            </Form.Group>

            <Form.Group controlId="formGroupMessage">;
                <Form.Control type="message" placeholder="Message"
            </Form.Group>;
        </Form>	

// 		<div class="control-group">
// 		<div class="controls">
// 		<textarea rows="10" cols="100" class="form-control" 
// 		placeholder="Message" id="message" required
// 		data-validation-required-message="Please enter your message" minlength="5" 
// 		data-validation-minlength-message="Min 5 characters" 
// 		maxlength="999" style="resize:none"></textarea>
// 		</div>
// 		</div> 		 
// 		<div id="success"> </div>
// 		<button type="submit" class="btn btn-default pull-right">SEND</button><br />
// 		</form>
//     )
// }

