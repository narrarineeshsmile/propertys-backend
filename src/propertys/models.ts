import mongoose from 'mongoose';
export interface Amenities {
    name: string,
}
export interface Property {
    PropertyID: number,
    Location: string,
    PropertyType: string,
    Status: string,
    Area: string,
    Beds: string,
    Baths: number,
    Garage: string
    Amenities: Amenities[]

}
const PropertysSchema = new mongoose.Schema({
    PropertyID: Number,
    Location: String,
    PropertyType: String,
    Status: String,
    Area: String,
    Beds: String,
    Baths: Number,
    Garage: String,
    Amenities: [{
        name: String
    }],

}, { timestamps: true });
export const Propertys = mongoose.model<Property & mongoose.Document>('propertys', PropertysSchema);