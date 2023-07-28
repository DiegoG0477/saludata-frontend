import React, { useEffect, useState } from 'react';
import "../styles/organisms.css";
import { RViewerTrigger, RViewer } from 'react-viewerjs';
import { useParams } from "react-router-dom";
import axios from "axios";
import Title from "./atoms/Title.jsx";
import ReadInput from "./atoms/ReadInput.jsx";
import SummaryTable from "./molecules/SummaryTable.jsx";


function VerPrueba() {
    const { id } = useParams();
    const [archivos, setArchivos] = useState([]);


    const getArchivos = () => {
        axios
            .get("http://localhost:8080/api/v1/archivos/buscar/" + id)
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
    console.log(archivos)
    let imagenes=[];
    for (let i = 0; i < archivos.length; i++) {
        imagenes[i]=archivos[i]?.[5];
    }
    console.log((imagenes))

    return (
        <>
            <div className="system-content" style={{ width: "89vw"}}>
                    <Title text="Historial de archivos"></Title>

                <div className="tree-inputs-div">
                    <ReadInput label="Nombre" readInfo={archivos[0]?.[1]}  />
                    <ReadInput label="Apellido paterno" readInfo={archivos[0]?.[2]}  />
                    <ReadInput label="Apellido materno" readInfo={archivos[0]?.[3]}  />

                </div>
                <div>
                    <RViewer imageUrls={imagenes}>
                        <div style={{ display: "flex", flexWrap: 'wrap', margin: '40px' }}>
                            {imagenes.map((imagen, index) => {
                                return (
                                    <div key={index} className="col-md-3" style={{ marginBottom: '40px' }}>
                                        <RViewerTrigger index={index}>
                                            <div className="green-border">
                                            <img src={imagen} className="img-zoom" style={{ width: '200px', height: '200px', marginLeft: '20px' }} cl/>
                                            </div>
                                        </RViewerTrigger>
                                    </div>
                                );
                            })}
                        </div>
                    </RViewer>
                </div>
            </div>
        </>
    );
}

export default VerPrueba;
