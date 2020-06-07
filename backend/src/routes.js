const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const ProfileController = require('./controllers/ProfileController');
const BookingController = require('./controllers/BookingController');


routes.post('/sessions' , SessionController.store);

routes.get('/spots' , SpotController.index);
routes.post('/spots' ,upload.single('thumbnail'), SpotController.store);

routes.get('/profile' , ProfileController.show);
routes.post('/spots/:spot_id/bookings' , BookingController.store);

module.exports =  routes;
