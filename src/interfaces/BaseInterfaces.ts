export interface IAchiv {
    id: string,
    usersId: string[],
    title: string,
    description: string,
    img?: string,
    likes: number,
}

export interface IUser {
    id: string,
    nickName: string,
    achiv: IAchiv[],
}

export interface ITopAchiv {
    id: string,
    likes: number,
    title: string,
    img?: string,
}
