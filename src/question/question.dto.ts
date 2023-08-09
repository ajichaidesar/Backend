export class QuestionsDTO {
  id: number;
  pertanyaan: string;
  jawaban: string;

  constructor(id: number, pertanyaan: string, jawaban: string) {
    this.id = id;
    this.pertanyaan = pertanyaan;
    this.jawaban = jawaban;
  }
}
