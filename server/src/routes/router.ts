import s3Router from './s3/s3.router'
import userRouter from './users/users.router';
import photoRouter from './photo/photo.router';
import express from 'express';


const router = express.Router();

router.use('/s3', s3Router);
router.use('/users', userRouter);
router.use('/photos', photoRouter);

router.get('/lens', (req, res) => {
    res.send('lens');
    });

export default router;
