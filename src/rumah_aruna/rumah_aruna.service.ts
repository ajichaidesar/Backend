import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RumahAruna } from './entities/rumah_aruna.entity';
import { Repository } from 'typeorm';
import axios, { AxiosRequestConfig } from 'axios';


@Injectable()
export class RumahArunaService {
  constructor(@InjectRepository(RumahAruna) private readonly rumahArunaRepository: Repository<RumahAruna>) {} 

  async find(): Promise<RumahAruna[]>{
    try {
      return await this.rumahArunaRepository.find()
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
      const response = await axios.get(`${process.env.API_URL_STRAPI}/rumah-aruna?populate=*`, TokenApi);
      const data = response.data.data.map((item: any) => {
        const imgRumahArunaUrl = item.attributes.banner_about.data.attributes.url;
        return {
          id: item.id,
          url: imgRumahArunaUrl,
        };
      });
      return data;
    } catch (error) {
      throw new NotFoundException('Failed to fetch images');
    }
  }

  async findWithImg(): Promise<RumahAruna[]> {
    try {
      const rumahAruna = await this.find(); 
      const images = await this.findImg();
    
      const mergedData = rumahAruna.map((item) => {
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