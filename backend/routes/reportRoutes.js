import express from 'express';
import { 
    createReport, 
    getAllReports, 
    getReportById, 
    deleteReport,
    archiveReport,
    restoreReport,
    getArchivedReports
} from '../controllers/reportController.js';

const router = express.Router();

router.post('/', createReport);
router.get('/', getAllReports);
router.get('/:id', getReportById);
router.get('/archived', getArchivedReports);
router.patch('/:id/archive', archiveReport);
router.patch('/:id/restore', restoreReport);
router.delete('/:id', deleteReport);

export default router;