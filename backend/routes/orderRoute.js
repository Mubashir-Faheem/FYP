const express = require("express");
const {
  addOrderItem,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,getOrders,updateOrderToDelivered
} = require("../controllers/orderController");

const { protect,admin } = require("../middlewares/authMiddleware");
const router = express.Router();
router.route('/').post(protect,addOrderItem).get(protect,admin,getOrders)
//getUserOrder
router.route("/myorders").get(protect, getMyOrders);
//get order by id
router.route("/:id").get(protect, getOrderById);
//create new order
// router.route("/").post(protect, addOrderItem);
//update order
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect,admin,updateOrderToDelivered)
module.exports = router;
