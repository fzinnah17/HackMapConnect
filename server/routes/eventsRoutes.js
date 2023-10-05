import express from 'express';
import { getAllEvents, getEventsByLocation } from '../controllers/events.js';

const router = express.Router();

router.get('/', getAllEvents);
router.get('/location/:id', getEventsByLocation);

export default router;
