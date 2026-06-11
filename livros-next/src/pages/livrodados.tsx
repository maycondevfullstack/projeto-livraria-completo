import { useState } from "react";
import { useRouter } from "next/router";

import { Livro } from "../model/Livro";
import { ControleLivros } from "../controle/ControleLivros";

export default function LivroDados() {

    const router = useRouter();

    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");

    const controleLivros = new ControleLivros();

    const incluir = () => {

        const livro = new Livro(
            "",
            1,
            titulo,
            resumo,
            autores.split(",")
        );

        controleLivros
            .incluir(livro)
            .then(() => {
                router.push("/livrolista");
            });
    };

    return (
        <div
            style={{
                maxWidth: "700px",
                margin: "50px auto",
                padding: "30px",
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
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
                📚 Cadastro de Livros
            </h1>

            <p>
                <input
                    type="text"
                    placeholder="Título do Livro"
                    value={titulo}
                    onChange={(e) =>
                        setTitulo(e.target.value)
                    }
                    style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                        color: "#000"
                    }}
                />
            </p>

            <p>
                <textarea
                    placeholder="Resumo do Livro"
                    value={resumo}
                    onChange={(e) =>
                        setResumo(e.target.value)
                    }
                    rows={5}
                    style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                        resize: "vertical",
                        color: "#000"
                    }}
                />
            </p>

            <p>
                <input
                    type="text"
                    placeholder="Autores separados por vírgula"
                    value={autores}
                    onChange={(e) =>
                        setAutores(e.target.value)
                    }
                    style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                        color: "#000"
                    }}
                />
            </p>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    marginTop: "20px"
                }}
            >
                <button
                    onClick={incluir}
                    style={{
                        backgroundColor: "#16a34a",
                        color: "white",
                        border: "none",
                        padding: "12px 20px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "16px"
                    }}
                >
                    ➕ Incluir Livro
                </button>

                <button
                    onClick={() =>
                        router.push("/livrolista")
                    }
                    style={{
                        backgroundColor: "#2563eb",
                        color: "white",
                        border: "none",
                        padding: "12px 20px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "16px"
                    }}
                >
                    📖 Ver Livros
                </button>
            </div>
        </div>
    );
}