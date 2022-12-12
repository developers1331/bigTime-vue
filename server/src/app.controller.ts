import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/users')
  getUsers(): any {
    return this.appService.getUsers();
  }

  @Get('/api/achiv')
  getAchiv(): any {
    return this.appService.getAchiv();
  }

  @Get('/api/users/:id')
  getUserById(@Param('id', ValidationPipe) id: string): any {
    return this.appService.getUserById(id);
  }

  @Get('/api/achiv/top/:amount')
  getTopAchivs(@Param('amount', ParseIntPipe) amount: number): any {
    return this.appService.getTopAchivs(amount);
  }

  @Post('/api/achiv/add')
  addNewAchiv(@Body() body: any): any {
    return this.appService.addNewAchiv(body);
  }
}
