import {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from "react";

export interface IFormData {
    username: string,
    password: string
}

export default function Login() {

        const [formData, setFormData] = useState<IFormData>({password: "", username: ""})
        const [username, setUsername] = useState<string>("")

    useEffect( () => {

        fetch('http://localhost:1320', {
            method: "POST",
            mode: "cors",
            credentials: "include",
        } )
            .then((response) =>  response.json())
            .then((data) => {
                setFormData(data);
            }).catch(error => console.log("Erreur dans la requête fetch : " + error))
    }, [])

        const handleChange = (e: ChangeEvent) => {
            setFormData(prevState => {
                return {
                    ...prevState,
                    // @ts-ignore
                    [e.target.name]: e.target.value
                }
            })
        }

        const handleSubmit = (e: any) => {
            e.preventDefault()
            setUsername(formData.username)
        }

        console.log(formData);

        return (
            <form onSubmit={handleSubmit}>
                <input type="text" name='username' onChange={handleChange}/><br/>
                <input type="password" name="password" onChange={handleChange}/><br/>
                <button type="submit">Gooooo</button>
            </form>
        )
}
