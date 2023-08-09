export class RegistrasisDTO {
  id: number;
  Nama_lengkap: string;
  Email: string;
  Telp: string;

  constructor(
    id: number,
    Nama_lengkap: string,
    Email: string,
    Telp: string,
  ) {
    this.id = id;
    this.Nama_lengkap = Nama_lengkap;
    this.Email = Email;
    this.Telp = Telp;
  }
}
