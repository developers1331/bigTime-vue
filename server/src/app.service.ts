/* eslint-disable prettier/prettier */
export interface IAchiv {
  id: string;
  usersId: string[];
  title: string;
  description: string;
  img?: string;
  likes: number;
}

export interface ITopAchiv {
  id: string;
  usersId: string[];
  title: string;
  description: string;
  img?: string;
  likes: number;
  place: number;
}

export interface ITopAchivRequest {
  numbers: number;
}
export interface ITopAchivResponse {
  topAchiv: ITopAchiv[];
}
export interface IUser {
  id: string;
  nickName: string,
  //TODO declarations
  achivs: any,
}


import {Injectable} from '@nestjs/common';
import _filter from 'lodash/filter.js';
import _sortBy from 'lodash/sortBy.js';
@Injectable()
export class AppService {
  private users: IUser[] = [
    {
      id: '0',
      nickName: 'Crone',
      achivs: [],
    },
    {
      id: '1',
      nickName: 'Doken',
      achivs: [],
    },
  ];

  private achiv: IAchiv[] = [
    {
      id: '00',
      usersId: ['0'],
      title: 'Test achiv',
      description: 'Test descr',
      img: 'img.png',
      likes: 10,
    },
    {
      id: '01',
      usersId: ['0'],
      title: 'Second achiv',
      description: 'Second descr',
      img: 'img2.png',
      likes: 5,
    },
  ];

  getUsers(): IUser[] {
    return this.users;
  }

  getAchiv(): IAchiv[] {
    return this.achiv;
  }

  getUserById(userId: string): IUser {
    return _filter(this.users, ['id', userId])[0];
  }

  getTopAchivs(amount: number): ITopAchiv[] {
    // const sort = _sortBy(this.achiv, [(achiv: IAchiv) => {achiv.likes}]).slice(0, amount);
    // sort.map((value, index) => {
    //   value['place'] = index + 1;
    // });
    return [];
  }

  addNewAchiv(achiv: IAchiv): IAchiv {
    this.achiv.push(achiv);
    return achiv;
  }
}
