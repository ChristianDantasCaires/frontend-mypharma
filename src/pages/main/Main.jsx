import TabelaProdutos from "./TabelaProdutos";
import "./styles.css";
import { useEffect, useState } from "react";
import { getProdutos } from "../../services/api";

const Main = () => {
    const userId = "62322e6f0b38b9bd90f3240d";

    const [produtos, setProdutos] = useState([]);

    const loadProdutos = async () => {
        const resposta = await getProdutos(userId);
        setProdutos(resposta.data);
    }

    useEffect(() => {
        (async () => loadProdutos())();
    }, [])

    return (
        <div className="container">
            <h1>Produtos</h1>
            <main>
                <TabelaProdutos produtos={produtos} />
            </main>
        </div>
    )
}

export default Main;