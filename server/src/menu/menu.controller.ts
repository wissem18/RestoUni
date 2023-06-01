import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';

@Controller('menu')
@UseInterceptors(ClassSerializerInterceptor)
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post(":restaurantId")
  create(@Param('restaurantId') restaurantId: string, @Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(restaurantId, createMenuDto);
  }

  @Get('/restaurant/:restaurantId')
  findAll(@Param("restaurantId") restaurantId: string): Promise<Menu[]> {
    return this.menuService.findAll(restaurantId);
  }

  @Get(':id/restaurant/:restaurantId')
  findOne(@Param('id') id: string, @Param('restaurantId') restaurantId: string) {
    return this.menuService.findOne(id, restaurantId);
  }

  @Patch(':id/restaurant/:restaurantId')
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto, @Param('restaurantId') restaurantId: string) {
    return this.menuService.update(id,restaurantId, updateMenuDto);
  }

  @Delete(':id/restaurant/:restaurantId')
  remove(@Param('id') id: string, @Param('restaurantId') restaurantId: string) {
    return this.menuService.remove(id,restaurantId);
  }
}
