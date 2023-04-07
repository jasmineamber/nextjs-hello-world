/*
 * @Author       : jasmineamber
 * @Date         : 2023-04-07 09:06:52
 * @LastEditors  : jasmineamber
 * @LastEditTime : 2023-04-07 09:08:15
 * @FilePath     : /src/app.service.ts
 * @Description  :
 */
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return process.env.token;
  }
}
