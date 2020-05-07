'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const { ctx } = this;

    let data = {};
    data.listArr = await ctx.service.news.getAllNews();
  
    await ctx.render('list.html', data);
  }
  async detail() {
    const { ctx } = this;
    
    let data = await ctx.service.news.getNew(ctx.params.id);

    if(!data) {
      ctx.body = '该新闻不存在，请返回新闻列表页。'
    } else {
      await ctx.render('detail.html', data);
    }
  }
}

module.exports = NewsController;
