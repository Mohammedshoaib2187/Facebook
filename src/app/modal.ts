
export interface login{
    email : string,
    password : string
}
export interface register1{
    email : string,
    type : string,
    password : string,
    username : string
}
export interface LoginResponse {
    message : string,
    token : string
}
export interface response {
    message : string,
    token : string,
    userid : number
}
export interface SingleUser {
    email : string
    _id : string,
    username : string,
    userid : number,
    friends : Array<number>
    type:string
    
}

export interface user{
    email : string,
    username : string,
    type : string,
    password : string
}

export interface postData{
    postname : string,
    description : string
}

export interface getData{
    _id : string,
    postname : string,
    description : string,
    userid : number,
    username : string

}