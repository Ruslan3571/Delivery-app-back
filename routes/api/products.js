const express = require("express");
const { products: ctrl } = require("../../controllers");
const { validation, ctrlWrapper } = require("../../middlewares");
const { updateSchema } = require("../../models");

const router = express.Router();
router.get("/", ctrlWrapper(ctrl.allProducts));
router.get("/:id", ctrlWrapper(ctrl.getById));
router.post("/", ctrlWrapper(ctrl.addProduct));
router.delete("/:id", ctrlWrapper(ctrl.removeProduct));
router.put("/:id", validation(updateSchema), ctrlWrapper(ctrl.updateProduct));

module.exports = router;
