module.exports = {
  apps : [{
    name: "express-4x-api-starter",
    script: "./index.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
