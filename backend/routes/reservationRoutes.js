import express from 'express';
import send_Reservations from '../controller/reservations.js'
const router = express.Router();

router.post('/send', send_Reservations);


export default router;