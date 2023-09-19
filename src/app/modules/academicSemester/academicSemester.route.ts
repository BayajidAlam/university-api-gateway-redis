import express from 'express';
import { academicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.get('/', academicSemesterController.getAllFromDB);
router.post(
  '/',
  validateRequest(AcademicSemesterValidation.create),
  academicSemesterController.insertIntoDB
);
router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.update),
  academicSemesterController.updateOneIntoDB
);
router.delete('/:id', academicSemesterController.updateOneIntoDB);
export const academicSemesterRoutes = router;
