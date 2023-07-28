import React, {useEffect, useState} from 'react';
import { RViewerTrigger, RViewer } from 'react-viewerjs';
import { useParams } from "react-router-dom";
import axios from "axios";


function VerPrueba() {

    const { id } = useParams();
    const [archivos, setArchivos] = useState([]);

    const getArchivos = () => {
        axios
            .get("http://localhost:8080/api/v1/archivos/ver")
            .then((response) => {
                setArchivos(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getArchivos();
    }, []);
    console.log(archivos);


    // Reemplaza estos enlaces con las URL de tus imágenes
    let imagenes = [
        "https://www.freecodecamp.org/espanol/news/content/images/2022/02/5f9c9a4c740569d1a4ca24c2.jpg",
        "https://blog.udlap.mx/wp-content/uploads/2015/06/imagen-organizacional.jpg",
        "https://cnnespanol.cnn.com/wp-content/uploads/2023/06/230607151757-greg-girard-kowloon-walled-city-full-169.jpg?quality=100&strip=info&w=414&h=311&crop=1",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjde9mkeS4Hgb9EDlQ0Ek-hAWqqCo3xjAK8A&usqp=CAU",
    ];

    return (
        <div>
            <RViewer imageUrls={imagenes}>
                <div style={{ display: "flex", margin: '40px'}}>
                    {imagenes.map((imagen, index) => {
                        return (
                            <RViewerTrigger index={index} key={index}>
                                <img src={imagen} style={{ width: '150px', height: '150px', marginLeft: '20px', border: '2px solid black' }} />
                            </RViewerTrigger>
                        )
                    })}
                </div>
            </RViewer>
        </div>
    );
}

export default VerPrueba;
