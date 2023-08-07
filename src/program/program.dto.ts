export class ProgramDTO {
    id: number;
    judul: string;
    deskripsi: string;
    created_at: Date;
    updated_at: Date;
    published_at: Date;
    created_by_id: number;
    updated_by_id: number;
  
    constructor(
      id: number,
      judul: string,
      deskripsi: string,
      created_at: Date,
      updated_at: Date,
      published_at: Date,
      created_by_id: number,
      updated_by_id: number,
    ) {
      this.id = id;
      this.judul = judul;
      this.deskripsi = deskripsi;
      this.created_at = created_at;
      this.updated_at = updated_at;
      this.published_at = published_at;
      this.created_by_id = created_by_id;
      this.updated_by_id = updated_by_id;
    }
  }
  