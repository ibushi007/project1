import express from 'express';
import { body } from 'express-validator';
import { requestErrorHandler } from "../helpers/helper.mjs";
import { getBookById, getAllBooks, deleteBook, registBook, updateBook } from '../controllers/books.mjs';

const router = express.Router();

router.get('/', requestErrorHandler(getAllBooks));

router.get('/:id', requestErrorHandler(getBookById));

router.post(
    '/', 
    body('title').notEmpty(), 
    body('description').notEmpty(), 
    body('comment').notEmpty(), 
    body('rating').notEmpty().isInt({ min: 1, max: 5 }), 
    requestErrorHandler(registBook)
);

// validator.js
// https://github.com/validatorjs/validator.js
router.patch(
    '/:id', 
    body('title').optional().notEmpty(), 
    body('description').optional().notEmpty(), 
    body('comment').optional().notEmpty(), 
    body('rating').optional().notEmpty().isInt({ min: 1,max: 5 }), 
    requestErrorHandler(updateBook)
);

router.delete('/:id', requestErrorHandler(deleteBook));

export default router;
