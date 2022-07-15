import { Body, Controller, Get, Post, Render, Param, Redirect } from '@nestjs/common';
import { get } from 'http';

import { TelefonoServicio } from 'src/services/telefono.service';

@Controller('telefono')
export class TelefonoController {
    constructor(
        public telefonoService: TelefonoServicio,
    ){}
    
}