import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CardH21 } from './entities/Card_h21.entity';
import { Repository } from 'typeorm';
import axios, { AxiosRequestConfig } from 'axios';


@Injectable()
export class  CardH21Service {
  constructor(@InjectRepository( CardH21 ) private readonly  cardH21Repository: Repository< CardH21 >) {} 

  async find(): Promise< CardH21 []>{
    try {
      return await this. cardH21Repository.find()
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
      const response = await axios.get(`${process.env.API_URL_STRAPI}/cardh21?populate=*`, TokenApi);
      const data = response.data.data.map((item: any) => {
        const imgCardH21Url = item.attributes.banner_about.data.attributes.url;
        return {
          id: item.id,
          url: imgCardH21Url,
        };
      });
      return data;
    } catch (error) {
      throw new NotFoundException('Failed to fetch images');
    }
  }

  async findWithImg(): Promise<CardH21[]> {
    try {
      const cardH21 = await this.find(); 
      const images = await this.findImg(); 
    
      const mergedData =  cardH21.map((item) => {
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