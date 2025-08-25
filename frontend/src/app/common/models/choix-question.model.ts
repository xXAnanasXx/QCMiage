export class ChoixQuestion {
  id_choixquestion: number;
  contenu: string;
  estcorrecte: boolean;
  id_question: number;

  constructor(
    id_choixquestion: number,
    contenu: string,
    estcorrecte: boolean,
    id_question: number
  ) {
    this.id_choixquestion = id_choixquestion;
    this.contenu = contenu;
    this.estcorrecte = estcorrecte;
    this.id_question = id_question;
  }
}
