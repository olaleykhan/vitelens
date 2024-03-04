import { type Response, type Request, type NextFunction } from 'express';

export function checkLoggedIn(req:Request, res:Response, next:NextFunction) {
    console.log('Current user is:', req.user);
    const isLoggedIn = req.isAuthenticated() && req.user;
    if (!isLoggedIn) {
      return res.status(401).json({
        error: 'User not authenticated',
      });
    }
    next();
  }