var doctorModels = require('../models/doctorModel.js');

/**
 * doctorsController.js
 *
 * @description :: Server-side logic for managing doctors.
 */
module.exports = {

    /**
     * doctorsController.list()
     */
    list: function (req, res) {
     doctorModels.find(function (err, doctors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting doctors.',
                    error: err
                });
            }
            return res.json(doctors);
        });
    },

    /**
     * doctorsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
     doctorModels.findOne({_id: id}, function (err, doctors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting doctors.',
                    error: err
                });
            }
            if (!doctors) {
                return res.status(404).json({
                    message: 'No such doctors'
                });
            }
            return res.json(doctors);
        });
    },

    /**
     * doctorsController.create()
     */
    create: function (req, res) {
        var doctors = new doctorModels({
			name : req.body.name,
			nickname : req.body.nickname,
            speciality:req.body.speciality
        });

        doctors.save(function (err, doctors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating doctors',
                    error: err
                });
            }
            return res.status(201).json(doctors) ;
        });
    },

    /**
     * doctorsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
     doctorModels.findOne({_id: id}, function (err, doctors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting doctors',
                    error: err
                });
            }
            if (!doctors) {
                return res.status(404).json({
                    message: 'No such doctors'
                });
            }

            doctors.name = req.body.name ? req.body.name : doctors.name;
			doctors.nickname = req.body.nickname ? req.body.nickname : doctors.nickname;
			doctors.speciality= req.body.speciality ? req.body.speciality:doctors.speciality;
            doctors.save(function (err, doctors) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating doctors.',
                        error: err
                    });
                }

                return res.json(doctors);
            });
        });
    },

    /**
     * doctorsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
     doctorModels.findByIdAndRemove(id, function (err, doctors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the doctors.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
