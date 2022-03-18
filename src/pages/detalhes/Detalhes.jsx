import React from "react";
import { useParams } from "react-router-dom";

export default function Detalhes() {
    const { id } = useParams();
    return (
        <div>detalhe {id}</div>
    );
}