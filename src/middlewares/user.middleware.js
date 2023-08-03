const User = require('../models/user.model');

exports.valideUser = async (req, res) => {
    const { accountNumber } = req.body;

    const user = await User.findOne({
        where: {
            accountNumber,
            status: true,
        },
    });

    if (!user) {
        return message(`User with accountNumber: ${accountNumber} no found`)
    };
};
