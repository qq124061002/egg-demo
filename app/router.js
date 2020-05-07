'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);

  router.get('/news', controller.news.index);
  router.get('/news/detail/:id', controller.news.detail);

  router.get('/admin', controller.admin.index);
  router.get('/admin/add/', controller.admin.add);
  router.post('/admin/addAction/', controller.admin.addAction);
  router.get('/admin/edit/:id', controller.admin.edit);
  router.post('/admin/editAction/:id', controller.admin.editAction);
  router.get('/admin/delete/:id', controller.admin.delete);
};
