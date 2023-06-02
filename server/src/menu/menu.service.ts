/* eslint-disable prettier/prettier */
import {Inject, Injectable, NotFoundException} from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {Equal, Repository} from 'typeorm';
import { Menu } from './entities/menu.entity';
import { RestaurantService } from 'src/restaurant/restaurant.service';
import {UpdateStudentDto} from "../student/dto/update-student.dto";


@Injectable()
export class MenuService {

  
  constructor(
    @InjectRepository(Menu)
    private readonly MenuRepository: Repository<Menu>,
    @Inject(RestaurantService)
    private readonly RestaurantService: RestaurantService
    ) {}

    create(restaurantId:string, createMenuDto: CreateMenuDto): Promise<Menu> {
      // check if the restaurant exists
      return this.RestaurantService.findOne(restaurantId).then((restaurant) => {  
        if(!restaurant) { 
          throw new NotFoundException("Restaurant not found");
        }
        // create the menu
        const menu = this.MenuRepository.create(createMenuDto);
        menu.restaurant = restaurant;
        return this.MenuRepository.save(menu);
      });
    }

    findAll(restaurantId: string): Promise<Menu[]> {
      return this.MenuRepository.find({
        where: {
          restaurant: {
            id: restaurantId
          }
        }
      });
    }

  async findOne(id: string, restaurantId: string) {
    const restaurant = await this.RestaurantService.findOne(restaurantId);
   if(!restaurant) {
      throw new NotFoundException("Restaurant not found");
    }
    return await this.MenuRepository.findOne({
      where : {restaurant : {id : restaurantId } , id : id },
    }).then(menu => {
          if(!menu) {
            throw new NotFoundException("Menu not found");
          }
          return menu;
        }
    );
  }



  async  update(restaurantid : string ,  id: string, updateMenuDto: UpdateMenuDto) {

    const menu = await this.findOne(restaurantid , id);

    if(!menu) {
      throw new NotFoundException("Menu not found");
    }
    return this.MenuRepository.update(menu.id,updateMenuDto);
  }


  async  remove(restaurantid : string ,  id: string) {

    const menu = await this.findOne(restaurantid , id);
    if(!menu) {
      throw new NotFoundException("Menu not found");
    }
    return this.MenuRepository.delete(menu.id);
  }
  async softDelete(restaurantid : string ,  id: string) {
      
      const menu = await this.findOne(restaurantid , id);
      if(!menu) {
        throw new NotFoundException("Menu not found");
      }
      return this.MenuRepository.softDelete(menu.id);
    }
}




