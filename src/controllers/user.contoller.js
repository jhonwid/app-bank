const User = require('./../models/user.model');
const bcrypt = require('bcryptjs');
const generateJWT = require('./../utils/jwt');
const randomClue = require('./../utils/clueRandom');

//* Exportacion de una signup
exports.signUp = async (req, res) => {
    try {
        const { name, password } = req.body;

        //* Sintaxis de numeros aleatorios
        const accountNumber = randomClue(); //? Constante para el numero de cuenta aleatorio

        //* Sintaxis para encriptar contraseña
        const salt = await bcrypt.genSalt(10)
        const cluePassword = await bcrypt.hash(password, salt);

        //* Sintaxis para crear usuario
        const user = await User.create({ name, password: cluePassword, accountNumber });

        //* Sintaxis para generar token
        const token = await generateJWT(user.id);

        //* Retornar una respuestas de estado 201
        return res.status(201).json({
            status: 'sucess',
            message: 'User created successfully...🥳',
            token,
            user,
        });
        //* Captura de error  
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Internal server error...😫',
            error,
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { user } = req.body;

        if (!(await bcrypt.compare(password, user.password))) {
            return message("Incorrect accountNumber or password");
        }

        const token = generate.JWT(user.di);

        res.status(200).json({
            status: 'success',
            token,
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Internal server error...😫',
            error,
        });
    }
};