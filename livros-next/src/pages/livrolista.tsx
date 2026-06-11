import { useEffect, useState } from "react";
import { ControleLivros } from "../controle/ControleLivros";
import { Livro } from "../model/Livro";

export default function LivroLista() {

    const [livros, setLivros] = useState<Livro[]>([]);
    const [carregado, setCarregado] = useState(false);

    const controleLivros = new ControleLivros();

    useEffect(() => {

        controleLivros
            .obterLivros()
            .then(resultado => {
                setLivros(resultado);
                setCarregado(true);
            });

    }, [carregado]);

    const excluir = (codigo: string) => {

        controleLivros
            .excluir(codigo)
            .then(() => {
                setCarregado(false);
            });
    };

    return (
        <div
            style={{
                maxWidth: "1000px",
                margin: "40px auto",
                padding: "20px",
                fontFamily: "Arial, sans-serif"
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    color: "#2563eb",
                    marginBottom: "30px"
                }}
            >
                📚 Sistema de Livraria
            </h1>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                    borderRadius: "8px",
                    overflow: "hidden"
                }}
            >
                <thead>
                    <tr
                        style={{
                            backgroundColor: "#2563eb",
                            color: "white"
                        }}
                    >
                        <th style={{ padding: "15px" }}>Título</th>
                        <th style={{ padding: "15px" }}>Autores</th>
                        <th style={{ padding: "15px" }}>Ações</th>
                    </tr>
                </thead>

                <tbody>

                    {livros.map((livro, index) => (

                        <tr
                            key={index}
                            style={{
                                textAlign: "center",
                                borderBottom: "1px solid #ddd"
                            }}
                        >
                            <td
                                style={{
                                    padding: "12px",
                                    color: "#000",
                                    fontWeight: "bold"
                                }}
                            >
                                {livro.titulo}
                            </td>

                            <td
                                style={{
                                    padding: "12px",
                                    color: "#000"
                                }}
                            >
                                {livro.autores
                                    ? livro.autores.join(", ")
                                    : "Sem autores"}
                            </td>

                            <td style={{ padding: "12px" }}>
                                <button
                                    onClick={() =>
                                        excluir(livro.codigo)
                                    }
                                    style={{
                                        backgroundColor: "#dc2626",
                                        color: "white",
                                        border: "none",
                                        padding: "8px 15px",
                                        borderRadius: "5px",
                                        cursor: "pointer"
                                    }}
                                >
                                    Excluir
                                </button>
                            </td>
                        </tr>

                    ))}

                </tbody>
            </table>

            <div
                style={{
                    textAlign: "center",
                    marginTop: "25px"
                }}
            >
                <a href="/livrodados">
                    <button
                        style={{
                            backgroundColor: "#16a34a",
                            color: "white",
                            border: "none",
                            padding: "12px 20px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontSize: "16px"
                        }}
                    >
                        ➕ Novo Livro
                    </button>
                </a>
            </div>

        </div>
    );
}