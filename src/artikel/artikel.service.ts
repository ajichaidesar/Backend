import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Artikel } from './entities/artikel.entity';
import { Repository } from 'typeorm';
import axios, { AxiosRequestConfig } from 'axios';

@Injectable()
export class ArtikelService {
  constructor(@InjectRepository(Artikel) private readonly artikelRepository: Repository<Artikel>) {}

  async find(): Promise<Artikel[]> {
    try {
      return await this.artikelRepository.find();
    } catch (error) {
      throw new NotFoundException('Not Found');
    }
  }

  async findWithImg(): Promise<Artikel[]> {
    try {
      const artikels = await this.find();
      const images = await this.findImg();

      const mergedData = artikels.map((item) => {
        const image = images.find((img) => img.id === item.id);
        return {
          ...item,
          image: image ? `${process.env.API_URL_STRAPI_2}${image.url}` : '',
        };
      });
      return mergedData;
    } catch (error) {
      throw new NotFoundException('Not found');
    }
  }

  async findImg(): Promise<any[]> {
    try {
      const TokenApi: AxiosRequestConfig = {
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      };
      const response = await axios.get(`${process.env.API_URL_STRAPI}/arunasdc?populate=*`, TokenApi);
      const data = response.data.data.map((item: any) => {
        const imgArunaSdcUrl = item.attributes.banner_about.data.attributes.url;
        return {
          id: item.id,
          url: imgArunaSdcUrl,
        };
      });
      return data;
    } catch (error) {
      throw new NotFoundException('Failed to fetch images');
    }
  }

  async findOne(id: number): Promise<Artikel> {
    try {
      return await this.artikelRepository.findOne({ where: { id } });
    } catch (error) {
      throw new NotFoundException('Artikel not found');
    }
  }
  
}
