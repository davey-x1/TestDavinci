import { Body, Controller, Get, Post, Render, Param, Redirect } from '@nestjs/common';
import { get } from 'http';

import { DireccionServicio } from 'src/services/direccion.service';

@Controller('direccion')
export class DireccionController {
    constructor(
        public direccionService: DireccionServicio,
    ){}
    
}