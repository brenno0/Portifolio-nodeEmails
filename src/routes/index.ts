import { Router } from 'express';
import { emailRoutes } from './email.routes';
import nodemailer from 'nodemailer'


const routes = Router()


routes.use('/email',emailRoutes)

export { routes }