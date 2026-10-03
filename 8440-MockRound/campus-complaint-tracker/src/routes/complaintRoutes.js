import express from 'express';
const router = express.Router();
import {
  createComplaint,
  getComplaints,
  getComplaintById,
  updateComplaint,
  updateStatus,
  deleteComplaint
} from '../controllers/complaintController.js';

router.route('/')
  .post(createComplaint)
  .get(getComplaints);

router.route('/:id')
  .get(getComplaintById)
  .put(updateComplaint)
  .delete(deleteComplaint);

router.patch('/:id/status', updateStatus);

export default router;
