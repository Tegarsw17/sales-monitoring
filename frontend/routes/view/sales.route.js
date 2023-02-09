const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('sales/catalog', {
    title: 'Catalog',
  })
})

router.get('/login', function (req, res) {
  res.render('sales/login', {
    title: 'Log In',
  })
})

router.get('/:id', function (req, res) {
  res.render('sales/detail', {
    title: 'Detail',
    param: req.params.id,
  })
})

router.get('/cart', function (req, res) {
  res.render('sales/cart', {
    title: 'Cart',
    param: req.params.id,
  })
})

router.get('/form', function (req, res) {
  res.render('sales/form', {
    title: 'Report Form',
  })
})

router.get('/report', function (req, res) {
  res.render('sales/report', {
    title: 'Report',
  })
})

router.get('/report/:id', function (req, res) {
  res.render('sales/reportDetail', {
    title: 'Report',
    param: req.params.id,
  })
})

module.exports = router
