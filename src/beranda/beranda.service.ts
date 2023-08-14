import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Beranda } from './entities/beranda.entity';
import { Repository } from 'typeorm';
import axios, { AxiosRequestConfig } from 'axios';



@Injectable()
export class BerandaService {
  constructor(@InjectRepository(Beranda) private readonly berandaRepository: Repository<Beranda>) {} 

  async find(): Promise<Beranda[]>{
    try {
      return await this.berandaRepository.find()
    } catch (error) {
      throw new NotFoundException('Not Found')
    }
  }

  async findImg(): Promise<any[]> {
    try {
      const TokenApi: AxiosRequestConfig = {
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`
        }
      }
      const response = await axios.get(`${process.env.API_URL_STRAPI}/beranda?populate=*`, TokenApi);
      const data = response.data.data.map((item: any) => {
        const imgBerandaUrl = item.attributes.banner_about.data.attributes.url;
        return {
          id: item.id,
          url: imgBerandaUrl,
        };
      });
      return data;
    } catch (error) {
      throw new NotFoundException('Failed to fetch images');
    }
  }

  async findWithImg(): Promise<Beranda[]> {
    try {
      const beranda = await this.find(); 
      const images = await this.findImg();
    
      const mergedData = beranda.map((item) => {
        const image = images.find((img) => img.id === item.id); 
        return {
          ...item,
          image: image ? `${process.env.API_URL_STRAPI_2}${image.url}` : ''
        }
      });
      return mergedData; 
    } catch (error) {
      throw new NotFoundException('Not found');
    }
  }
}