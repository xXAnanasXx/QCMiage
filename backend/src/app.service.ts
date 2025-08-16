import { Injectable } from '@nestjs/common';
import {response} from "express";

@Injectable()
export class AppService {

  getProfile() {
    let response = Math.random() <= 0.9 ? 'ma poule' : 'sale batard';
    return { name: response};
  }
}
