var consultModel = require('../models/consultModel.js');

/**
 * consultController.js
 *
 * @description :: Server-side logic for managing consults.
 */
module.exports = {

    /**
     * consultController.list()
     */
    list: function (req, res) {
        consultModel.find(function (err, consults) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting consult.',
                    error: err
                });
            }
            return res.json(consults);
        });
    },

    /**
     * consultController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        consultModel.findOne({_id: id}, function (err, consult) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting consult.',
                    error: err
                });
            }
            if (!consult) {
                return res.status(404).json({
                    message: 'No such consult'
                });
            }
            return res.json(consult);
        });
    },

    /**
     * consultController.create()
     */
    create: function (req, res) {
        var consult = new consultModel({
            nameDoctors : req.body.nameDoctors,
            nameUsers : req.body.nameUsers

        });

        consult.save(function (err, consult) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating consult',
                    error: err
                });
            }
            return res.status(201).json(consult) ;
        });
    },

    /**
     * consultController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        consultModel.findOne({_id: id}, function (err, consult) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting consult',
                    error: err
                });
            }
            if (!consult) {
                return res.status(404).json({
                    message: 'No such consult'
                });
            }

            consult.nameDoctors = req.body.nameDoctors ? req.body.nameDoctors : consult.nameDoctors;
            consult.nameUsers = req.body.nameUsers ? req.body.nameUsers : consult.nameUsers;
            consult.dateDebut = req.body.dateDebut ? req.body.dateDebut : consult.dateDebut;
            consult.dateFin = req.body.dateFin ? req.body.dateFin : consult.dateFin;
            consult.save(function (err, consult) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating consult.',
                        error: err
                    });
                }

                return res.json(consult);
            });
        });
    },

    /**
     * consultController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        consultModel.findByIdAndRemove(id, function (err, consult) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the consult.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
