var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Proyecto QUIZ' });
});

/*GET Author page*/
router.get('/author', function(req, res) {
   res.render('author', { autor: 'Fatima García' });
});

/*GET PREGUNTAS / RESPUESTAS*/
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

module.exports = router;
