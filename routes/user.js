// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// 기본주소: localhost:PORT/user

// GET / => localhost:PORT/user
router.get('/', controller.main);

// GET / => localhost:PORT/user/signup
router.get('/signup', controller.signup);

// POST /=> localhost:PORT/user/signup
router.post('/signup', controller.signupBtn); // 하나 추가

// POST /=> localhost:PORT/user/overlap
router.post('/overlap', controller.overlap); // id 중복검사

router.get('/allProfile', controller.allProfile)

// GET / => localhost:PORT/user/signin
router.get('/signin', controller.signin);

// GET / => localhost:PORT/user/signin
router.post('/signin', controller.signinBtn);

// POST / => localhost:PORT/user/profile
router.post('/profile', controller.profile);

// POST / => localhost:PORT/user/profile/edit
router.post('/profile/edit', controller.editProfile);

// POST / => localhost:PORT/user/profile/edit
router.post('/profile/delete', controller.deleteProfile);


module.exports = router;