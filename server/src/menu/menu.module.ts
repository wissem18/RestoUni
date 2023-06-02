import { Module, Res } from '@nestjs/common';
import { MenuService } from './menu.service';
import { RestaurantService } from 'src/restaurant/restaurant.service';
import { MenuController } from './menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';
import { Menu } from './entities/menu.entity';
import {RestaurantModule} from "../restaurant/restaurant.module";

@Module({
  controllers: [MenuController],
  providers: [MenuService,RestaurantService],
  imports: [TypeOrmModule.forFeature([Menu,Restaurant])],
  exports: [MenuService,TypeOrmModule]
})
export class MenuModule {}
