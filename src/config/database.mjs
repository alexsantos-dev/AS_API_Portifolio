import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.set('debug', true)

const connectDatabase = async () => {
    console.log("Aguardando conexão...")
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB conectado!');
    }

    catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
};

export default connectDatabase;