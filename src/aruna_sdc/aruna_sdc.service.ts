import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArunaSdc } from './entities/aruna_sdc.entity';
import { Repository } from 'typeorm';
import axios, { AxiosRequestConfig } from 'axios';


@Injectable()
export class ArunaSdcService {
  constructor(@InjectRepository(ArunaSdc) private readonly arunaSdcRepository: Repository<ArunaSdc>) {} 

  async find(): Promise<ArunaSdc[]>{
    try {
      return await this.arunaSdcRepository.find()
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

  async findWithImg(): Promise<ArunaSdc[]> {
    try {
      const arunaSdc = await this.find(); 
      const images = await this.findImg(); 
    
      const mergedData = arunaSdc.map((item) => {
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