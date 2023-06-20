/* eslint-disable @typescript-eslint/no-empty-interface */
// import {IUser} from 'user';

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
