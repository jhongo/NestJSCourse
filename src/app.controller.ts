import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola John';
  }

  @Get('new')
  newEndpoint(): string {
    return 'Yo soy Robot';
  }

  @Get('/other/')
  new(){
    return 'Hello other endpoint';
  }

}
