import { Usuario } from "./Usuario";

export interface Oferta {
    id: number;
    status: boolean;
    tempoAtual: string;
    prazo: number;
    texto: string;
    preco: number;
    titulo: string;
    usuario: Usuario;
    imagem: string;
  }