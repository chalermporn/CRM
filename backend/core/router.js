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
    //潜在客户
    '/potential': {
      '/all': {
        get: 'chance.all',
      },

      '/save': {
        post: 'chance.save'
      },

      '/delete': {
        post: 'chance.delete'
      },

      '/transformation': {
        post: 'chance.transformation'
      }
    }

     //统计
    //'/statistics': {
    //  put: 'statistics'
    //}
  }
};