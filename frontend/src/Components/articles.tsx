import { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
import "./articles.scss";

function Articles() {
    // We need image url so we pass it through props (here ou directly in parenthesis of the function)

    // const navigate = useNavigate();
    // const onNavigateHandler = () => navigate(route);

    const [fetchPost, setFetchPost] = useState<any>("");

    useEffect( () => {

        fetch('http://localhost:1320', {
            method: "GET",
            mode: "cors",
            credentials: "include"
        } )
            .then((response) =>  response.json())
            .then((data) => {
                setFetchPost(data);
            }).catch(error => console.log("Erreur dans la requête fetch : " + error))
    }, [])

    return (
            <>
            {fetchPost.post?.map( (item: any, key: any) => (
                    <div className="main-category-container"  key={key}>

                            <div
                                className="background-text"
                            />
                        <div className="body">
                            <h1>{item['title']}</h1>
                            <p>{item['post']}</p>
                        </div>
                    </div>
            ))}
        </>
    );
};

export default Articles;