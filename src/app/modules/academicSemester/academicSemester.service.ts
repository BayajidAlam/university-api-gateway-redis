import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';
import { Request } from 'express';
const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  // console.log(req);
  const response: IGenericResponse = await HttpService.post('/academic-semesters', req.body, {
    headers: {
      Authorization: req.headers.Authorization
    }
  });
  return response;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  // console.log(req);
  const response: IGenericResponse = await HttpService.get('/academic-semesters', {
    params: req.query,
    headers: {
      Authorization: req.headers.Authorization
    }
  });

  return response;
};
const updateOneIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  console.log(req);
  const response: IGenericResponse = await HttpService.patch(
    `/academic-semesters/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.Authorization
      }
    }
  );

  return response;
};
const deleteOneFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  console.log(req);
  const response: IGenericResponse = await HttpService.delete(`/academic-semesters/${id}`, {
    headers: {
      Authorization: req.headers.Authorization
    }
  });

  return response;
};

export const academicSemesterService = {
  insertIntoDB,
  getAllFromDB,
  updateOneIntoDB,
  deleteOneFromDB
};
