import { NextFunction, Request, Response } from 'express';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { userService } from './user.service';
import sendResponse from '../../../shared/response';

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.createStudent(req)
  sendResponse(res, result)
  } catch (error) {
    
  }
};

export const userController = {
  createStudent
};
