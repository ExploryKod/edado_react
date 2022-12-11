import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";


export interface IFormData {
    username: string,
    password: string
}

export default function Login() {

        const [formData, setFormData] = useState<IFormData>({password: "", username: ""})
        const [username, setUsername] = useState<string>("")

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

        return (
            <form onSubmit={handleSubmit}>
                <input type="text" name='username' onChange={handleChange}/><br/>
                <input type="password" name="password" onChange={handleChange}/><br/>
                <button type="submit">Gooooo</button>
            </form>
        )
}
