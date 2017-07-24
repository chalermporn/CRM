/**
 * 路由表
 */
module.exports = {

  /**
   * API
   */
  '/api': {
    //潜在客户
    '/potential': {
      '/all': {
        get: 'chance.all',
      },
      '/create': {
        post: 'chance.create'
      },

      '/delete': {
        post: 'chance.delete'
      },

      '/transformation': {
        post: 'chance.transformation'
      }
    }
  }
};