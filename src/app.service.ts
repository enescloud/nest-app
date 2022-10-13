import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
  ){}

  //Creating a User
  async createUser(user : User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  //Reading User Colletion
  async readUser(){
    return this.userModel.find({})
    .then((user) =>{
      return user;
    })
    .catch((error) =>{
      console.log("Read User Error:", error);
    })
  }

  // Updating the database
  async updateUser(id, data): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, data, {new: true});
  }

    // deleting the data 
    async deleteUser(id){
      return this.userModel.findByIdAndRemove(id)
    }
  }
