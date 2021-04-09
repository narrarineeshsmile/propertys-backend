import { Request, Response } from 'express';
import { Propertys } from './models';
import statuscode from 'http-status-codes';


export async function findAll(req: Request, res: Response) {
    const propertyList = await Propertys.find()
    if (propertyList.length === 0)
        res.status(statuscode.OK).json([])
    res.status(statuscode.OK).json(propertyList);
}

export async function findOne(req: Request, res: Response) {
    try {
        const id = req.params.id;
        Propertys.findById(id).then((data) => {
            res.json(data);
        });
    } catch (error) {
        console.log(error.message)
    }
}
export async function updateOne(req: Request, res: Response) {
    const id = req.params.id;
    try {
        if (!req.body) {
            return res.status(400).send({
                message: "Data to update can not be empty!"
            });
        }
        Propertys.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Property with id=${id}. Maybe property was not found!`
                });
            } else res.send({ message: "property was updated successfully." });
        });
    } catch (error) {
        res.status(500).send({
            message: `Error updating property with id="${id}"`
        });
    }
}
export async function createQuestions(req: Request, res: Response) {
    const { PropertyID, Location, PropertyType, Status, Area, Beds, Baths, Garage, Amenities } = req.body;
    try {
        const questions = await Propertys.create({
            PropertyID, Location, PropertyType, Status, Area, Beds, Baths, Garage, Amenities
        })
        return res.json(questions);
    } catch (error) {
        console.log(error.message)
    }
}

