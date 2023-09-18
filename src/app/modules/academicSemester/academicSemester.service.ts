import { CoreService as HttpService } from '../../../shared/axios';

const insertIntoDB = async (req) => {
  console.log(req);
  const response = await HttpService.post('/academic-semesters', req.body, {
    headers: {
      Authorization: req.headers.Authorization
    }
  });

  return response;
};

export const academicSemesterService = {
  insertIntoDB
}