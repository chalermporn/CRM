/**
 * 路由表
 */
module.exports = {

  /**
   * API
   */
  '/api': {
    /**
     * 公用部分
     */
    // 安装
    '/install': {
      get: 'install.status',
      post: 'install.install',

      '/themes': {
        get: 'install.themes',
      },

      '/test-database': {
        put: 'install.testDatabase'
      }
    },


    //

    // 模板
    //'/views': {
    //  get: [110100, 110201, 'views']
    //},

     //统计
    '/statistics': {
      put: 'statistics'
    }
  }
};