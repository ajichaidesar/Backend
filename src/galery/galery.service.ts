import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Galery } from './entities/galery.entity';
import { Repository } from 'typeorm';
import axios, { AxiosRequestConfig } from 'axios';

@Injectable()
export class GaleryService {
  constructor(@InjectRepository(Galery) private readonly galeryRepository: Repository<Galery>){}

  async findAll(): Promise<Galery[]>{
    return this.galeryRepository.find()
  }

  async findImgGalery(): Promise<any[]> {
    const TokenApi: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      }
    }
      const res = await axios.get(`${process.env.API_URL_STRAPI}/galery?populate=*`, TokenApi)
      const data= res.data.data.map((item: any) => {
        const imgGaleryUrl = item.attributes.image.data.attributes.url
        return {
          id: item.id,
          url: imgGaleryUrl,
        };
      });
      return data;
  }

  async findWithImg(): Promise<Galery[]>{
    try {
      const galeries = await this.findAll();
      const images = await this.findImgGalery();
  
      const mergedData = galeries.map((galery) => {  
        const image = images.find((img: any) => img.id === galery.id);
        return {
          ...galery,
          image: image ? `${process.env.API_URL_STRAPI_2}${image.url}` : '',
        };
      });
      return mergedData; 
    } catch (error) {
      throw new NotFoundException('Not found');
    }
  }
}