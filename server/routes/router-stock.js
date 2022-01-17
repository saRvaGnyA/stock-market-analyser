const express = require('express');

const router = express.Router();
const {
  getStockQuote,
  getStockChart,
  getStockLength,
  getWSB,
  getAutosuggestions,
  getStockDetails,
  getSocialSentiments,
  getRating,
  getIndexQuote,
  getIndexChart,
  getPredSuggestion,
  getNewAutoSuggestions,
  isOpen,
  indianAutoSuggest,
  isIndianOpen,
  getChartIndia,
} = require('../controllers/controller-stock');

router.route('/quote/:symbol').get(getStockQuote);
router.route('/chart/:symbol').get(getStockChart);
router.route('/autosuggest/:name').get(getAutosuggestions);
router.route('/length').get(getStockLength);
router.route('/wsb').get(getWSB);
router.route('/details/:symbol').get(getStockDetails);
router.route('/social/:symbol').get(getSocialSentiments);
router.route('/rating/:symbol').get(getRating);
router.route('/index/quote/:symbol').get(getIndexQuote);
router.route('/index/chart/:symbol/:start/:end').get(getIndexChart);
// cut down on the response size
router.route('/predautosuggest/:name').get(getPredSuggestion);
router.route('/newautosuggest/:name').get(getNewAutoSuggestions);
router.route('/isopen').get(isOpen);
router.route('/indian/autosuggest/:name').get(indianAutoSuggest);
router.route('/indian/isopen').get(isIndianOpen);
router.route('/indian/index/:symbol').get(getChartIndia);

module.exports = router;
