import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers.authorization);
    const { authorization } = req.headers;
    if (!authorization)
      throw new HttpException('No Authorization Token', HttpStatus.FORBIDDEN);
    console.log('Example middleware');
    if (authorization === 'asdafasklfdjasdflasjf') next();
    else throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }
}
