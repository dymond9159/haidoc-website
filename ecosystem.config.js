// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "haidoc-website",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      instances: 1,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      autorestart: true,
      watch: false,
      max_memory_restart: "2024M", // Restart if memory exceeds this
      error_file: "/var/log/pm2/nextjs-error.log",
      out_file: "/var/log/pm2/nextjs-out.log",
      log_date_format: "YYYY-MM-DD HH:mm Z",
    },
  ],
}
