const express = require ('express');
const ticketController = require('./Controllers/ticketController')

const router = express.Router();

router.route('/').post(ticketController.ticketData)
router.route('/update').patch(ticketController.updateTicket)
router.route('/').get(ticketController.getTicket)

module.exports = router