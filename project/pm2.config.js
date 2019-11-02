// 名称任意，按照个人习惯来
module.exports = {
  apps: [
    // {
    //   name: 'perfume-top-admin',
    //   script: 'ng serve',
    //   cwd: '/Users/qiansicheng/perfume/babylon-ng-8.0.0', // 当前工作路径
    //   watch: [
    //     // 监控变化的目录，一旦变化，自动重启
    //     // 'src',
    //     // 'build',
    //   ],
    //   ignore_watch: [
    //     // 忽视这些目录的变化
    //     // 'node_modules',
    //     // 'logs',
    //     // 'public',
    //   ],
    //   node_args: '--harmony', // node的启动模式
    //   env: {
    //     NODE_ENV: 'development', // 设置运行环境，此时process.env.NODE_ENV的值就是development
    //     PORT: 4100,
    //     ORIGIN_ADDR: 'http://perfume.top'
    //   },
    //   env_production: {
    //     PORT: 80,
    //     NODE_ENV: 'production',
    //   },
    //   out_file: '../logs/out.log', // 普通日志路径
    //   error_file: '../logs/err.log', // 错误日志路径
    //   merge_logs: false,
    //   log_date_format: 'YYYY-MM-DD HH:mm Z'
    // },
    {
      name: 'perfume-top',
      script: './server.js',
    //   cwd: './', // 当前工作路径
      watch: [
        './server.js'
      ],
    //   exec_mode: "cluster",
    //instances: 'max',
      ignore_watch: [],
      node_args: '--harmony', // node的启动模式
      out_file: '../logs/access.log', // 普通日志路径
      error_file: '../logs/access.error.log', // 错误日志路径
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      time: true
    }
  ],
};

// module.exports = {
//   apps : [{
//     name: 'demoapp',
//     script: 'node_modules/@angular/cli/bin/ng',
//     args: 'serve --host [yourip] --disable-host-check',
//     instances: 1,
//     autorestart: true,
//     watch: false,
//     max_memory_restart: '1G',
//     env: {
//       NODE_ENV: 'development'
//     },
//     env_production: {
//       NODE_ENV: 'production'
//     }
//   }],

//   deploy : {
//   }
// };

// module.exports = {
//   apps: [{
//     name: 'fe',
//     script: 'node_modules/@angular/cli/bin/ng',
//     args: 'serve -o',
//     cwd: 'biblical-hebrew-fe',
//     max_restarts: 5,
//     min_uptime: 3000,
//     exec_mode: 'fork',
//     instances: 1, // default
//     autorestart: true, // default
//     watch: false, // default
//     max_memory_restart: '1G', // default
//     env: {
//       NODE_ENV: 'development'
//     },
//     env_production: {
//       NODE_ENV: 'production'
//     }
//   }],

//   deploy: {
//     production: {
//       user: 'node',
//       host: '212.83.163.1',
//       ref: 'origin/master',
//       repo: 'git@github.com:repo.git',
//       path: '/var/www/production',
//       'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
//     }
//   }
// }