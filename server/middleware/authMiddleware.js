const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt} = require('passport-jwt');
const jwt = require('jsonwebtoken');
const  Drivers = require('../models/Driver');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'IHIW42_CaseStudy'
}

passport.use(new JwtStrategy(opts,(jwt_payload, done) => {
  Drivers.findOne({ driverId : jwt_payload.driverId }, (err, driver) => {
    if (err) return done(err, false);

    if (driver) return done(null, driver);

    return done(null, false);
  });
}));

const authJwt = (req,res,next) => {
  passport.authenticate('jwt',{ session: false }, (err, user, info) => {
    if (err) return next(err);

    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ message : 'Unauthorized' });
    }
  })(req,res,next);
}

const generateJWT = (driver) => {
  const payload = { driverId : driver.driverId };
  return jwt.sign(payload, opts.secretOrKey, { expiresIn: '24h'});
}

module.exports = {
  authJwt,
  generateJWT
}