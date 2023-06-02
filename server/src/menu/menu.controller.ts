import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor, UseGuards} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';
import { AuthGuard } from 'src/student/Guards/auth.guard';
import { RestauAuthGuard } from 'src/restaurant/Guards/restau.auth.guard';

@Controller('menu')
@UseInterceptors(ClassSerializerInterceptor)
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post(":restaurantId")
  create(@Param('restaurantId') restaurantId: string, @Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(restaurantId, createMenuDto);
  }

  @Get()
  @UseGuards(RestauAuthGuard||AuthGuard)
  findAll(): Promise<Menu[]> {
    return this.menuService.findAll();
  }

  @Get(':id')
  @UseGuards(RestauAuthGuard||AuthGuard)

  findOne(@Param('id') id: string ) {
    return this.menuService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(RestauAuthGuard)

  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(id, updateMenuDto);
  }

  @Delete(':id')
  @UseGuards(RestauAuthGuard)

  remove(@Param('id') id: string) {
    return this.menuService.remove(id);
  }
}
