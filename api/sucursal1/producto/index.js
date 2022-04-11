const router = require('./producto.route');
const productoRoute = require('./producto.route');

router.use('/producto', productoRoute)

module.exports = productoRoute;