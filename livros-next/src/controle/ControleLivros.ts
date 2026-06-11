import { Livro } from "../model/Livro";

const baseURL = "http://localhost:3030/livros";

interface LivroMongo {
    _id?: string;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
}

export class ControleLivros {

    async obterLivros(): Promise<Array<Livro>> {

        const resposta = await fetch(baseURL);
        const dados = await resposta.json();

        console.log(dados);

        return dados.map((livro: LivroMongo) =>
            new Livro(
                livro._id || "",
                livro.codEditora,
                livro.titulo,
                livro.resumo,
                livro.autores
            )
        );
    }

    async incluir(livro: Livro): Promise<boolean> {

        const livroMongo: LivroMongo = {
            codEditora: livro.codEditora,
            titulo: livro.titulo,
            resumo: livro.resumo,
            autores: livro.autores
        };

        console.log("Livro enviado:", livroMongo);

        const resposta = await fetch(baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(livroMongo)
        });

        return resposta.ok;
    }

    async excluir(codigo: string): Promise<boolean> {

        const resposta = await fetch(
            `${baseURL}/${codigo}`,
            {
                method: "DELETE"
            }
        );

        return resposta.ok;
    }
}