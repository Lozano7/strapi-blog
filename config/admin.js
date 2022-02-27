module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '17bd237eb7960973005a436cd563ce7c'),
  },
});
