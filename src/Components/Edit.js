import React,{useState, useEffect} from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'

function Edit(){
        const [email, setemail] = useState('');
        const [last_name, setlast_name] = useState('');
        const [first_name, setfirst_name] = useState('');
        const [ip, setip] = useState('');
        const [latitude, setlatitude] = useState('');
        const [longitude, setlongitude] = useState('');
        
        const [id, setid] = useState(null);

        useEffect(() => {
        setid(localStorage.getItem('id'))
        setemail(localStorage.getItem('email'));
        setfirst_name(localStorage.getItem('first_name'));
        setlast_name(localStorage.getItem('last_name'));
        setip(localStorage.getItem('ip'))
        setlatitude(localStorage.getItem('latitude'));
        setlongitude(localStorage.getItem('longitude'));
        }, []);
        return (
            <div>
                <Form className="create-form">
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='email' onChange={(e) => setemail(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='first_name' onChange={(e) => setfirst_name(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='last_name' onChange={(e) => setlast_name(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>ip</label>
                        <input placeholder='ip' onChange={(e) => setip(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>latitude</label>
                        <input placeholder='latitude' onChange={(e) => setlatitude(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>longitude</label>
                        <input placeholder='longitude' onChange={(e) => setlongitude(e.target.value)}/>
                    </Form.Field>
                    <Button type='submit'>Update</Button>
                </Form>
            </div>

            
        )
    }
export default Edit

