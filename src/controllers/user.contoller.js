const findAllUsers = async (req, res) => {
    try {

    } catch (error) {

    }
};

const findOneUsers = async (req, res) => {
    try {

    } catch (error) {

    }
};

const createUsers = async (req, res) => {
    try {
        const { name, email, password, role = 'client' } = req.body;

        const user = await User.create({ name, email, password, role });

        return res.status(201).json({
            user,
        });
    } catch (error) {

    }
};

const updateUsers = async (req, res) => {
    try {

    } catch (error) {

    }
};

const deleteUsers = async (req, res) => {
    try {

    } catch (error) {

    }
};