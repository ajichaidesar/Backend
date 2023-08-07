// pesan.dto.ts

export class CreatePesanDto {
  // Tambahkan properti id dan beri tanda opsional (?)
  id?: number;
  namaLengkap: string;
  email: string;
  telp: string;
  pesan: string;
}

export class UpdatePesanDto {
  // Tambahkan properti id dan beri tanda opsional (?)
  id?: number;
  namaLengkap?: string;
  email?: string;
  telp?: string;
  pesan?: string;
}
