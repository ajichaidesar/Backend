import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CardH2} from './entities/card_h2.entity';
import { Repository } from 'typeorm';
import axios, { AxiosRequestConfig } from 'axios';


@Injectable()
export class CardH2Service {
  constructor(@InjectRepository(CardH2) private readonly cardH2Repository: Repository<CardH2>) {} 

  async find(): Promise<CardH2[]>{
    try {
      return await this.cardH2Repository.find()
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
      const response = await axios.get(`${process.env.API_URL_STRAPI}/card-h2?populate=*`, TokenApi);
      const data = response.data.data.map((item: any) => {
        const imgCardH2Url = item.attributes.banner_about.data.attributes.url;
        return {
          id: item.id,
          url: imgCardH2Url,
        };
      });
      return data;
    } catch (error) {
      throw new NotFoundException('Failed to fetch images');
    }
  }

  async findWithImg(): Promise<CardH2[]> {
    try {
      const cardH2 = await this.find(); 
      const images = await this.findImg();
    
      const mergedData = cardH2.map((item) => {
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