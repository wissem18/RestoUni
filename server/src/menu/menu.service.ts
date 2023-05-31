import { Inject, Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';
import { RestaurantService } from 'src/restaurant/restaurant.service';


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
          throw new Error("Restaurant not found");
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



    findOne(id: string): Promise<Menu> {
    return this.MenuRepository.findOne({
      where: {
        id: id
      }
    }).then(Menu => {
      if(!Menu){
        throw new Error("Menu not found");
      }
      return Menu;
    });
  }

  
  update(id: string, updateMenuDto: UpdateMenuDto) {
    return this.MenuRepository.update(id, updateMenuDto);
  }


  remove(id: string) {
    return this.MenuRepository.delete(id);
  }
}




