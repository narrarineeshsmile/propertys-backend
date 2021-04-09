import express from 'express';
import { createQuestions, findAll, findOne, updateOne } from './controller';
import { debug } from 'console';


export const questionsRouter = express.Router();

try {

    questionsRouter.post('/create', createQuestions);
    questionsRouter.get('/all', findAll);
    questionsRouter.get('/:id', findOne);
    questionsRouter.put('/:id', updateOne);
} catch (error) {
    debug("error in route declaration", error);
}
// check uploaded file is correct type excel sheet and validate the values before inserting

