import mongoose from 'mongoose';

export async function dbConnect() {
    try {
        const db = 'mongodb+srv://rineesh:Yamuna@1998@realmcluster.i8cet.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Mongo Db Atlas connected successfully');
    } catch (error) {
        console.log(error.message);
    }
}