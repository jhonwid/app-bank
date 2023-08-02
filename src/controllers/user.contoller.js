const User = require('./../models/user.model');
const randomClue = require('./../utils/clueRandom');

//*  SingUp (Creacion de numero de cuenta para usuario)
exports.singupUser = async (req, res) => {
    try {
        const { name, accountNumber, password, amount } = req.body;

        //* Numero de cuenta aleatorio
        const randomnxc = await User.randomClue({ accountNumber });

        //* Creacion de nombre, contraseña, numero de cuenta, monto 
        const user = await User.create({ name, accountNumber: randomnxc, password, amount });

        return res.status(201).json({
            status: 'success',
            message: 'Bank account created successfully...🥳',
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Internal server error😫',
            error,
        });
    }
};

//*  Login (Inicio de secion, numero de cuenta para usuario)
exports.loginUser = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Internal server error😫',
            error,
        });
    }
};

//* History (Historial de transferencias hechas por el usuario)
exports.historyUser = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Internal server error😫',
            error,
        });
    }
};

        //* Monto de 1.000
        //const diners = await User({
        //where: {
        //amount: '1000',
        //},
        //});
