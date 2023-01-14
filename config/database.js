module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'housethat.in'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'u901480788_cms'),
      user: env('DATABASE_USERNAME', 'u901480788_cmsbackend'),
      password: env('DATABASE_PASSWORD', 'Sairam@b34'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
