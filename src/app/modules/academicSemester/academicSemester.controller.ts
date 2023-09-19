import { NextFunction, Request, Response } from 'express';
import { academicSemesterService } from './academicSemester.service';
import sendResponse from '../../../shared/response';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicSemesterService.insertIntoDB(req);
    // console.log(result,'result');
    // console.log(req,'req');
    sendResponse(res, result);
  } catch (error) {}
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicSemesterService.getAllFromDB(req);
    // console.log(result,'result');
    // console.log(req,'req');
    sendResponse(res, result);
  } catch (error) {}
};

const updateOneIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicSemesterService.updateOneIntoDB(req);
    // console.log(result,'result');
    // console.log(req,'req');
    sendResponse(res, result);
  } catch (error) {}
};
const deleteOneFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicSemesterService.deleteOneFromDB(req);
    // console.log(result,'result');
    // console.log(req,'req');
    sendResponse(res, result);
  } catch (error) {}
};

export const academicSemesterController = {
  insertIntoDB,
  getAllFromDB,
  updateOneIntoDB,
  deleteOneFromDB
};
