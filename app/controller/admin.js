'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    const { ctx } = this;

    let data = {}

    data.listArr = await ctx.service.news.getAllNews();

    await ctx.render('admin.html', data);
  }
  async add() {
    const { ctx } = this;

    await ctx.render('add.html');
  }
  async addAction() {
    const { ctx } = this;

    const row = {
      title: ctx.request.body.title,
      content: ctx.request.body.content,
      time: ctx.request.body.time
    };

    const result = await ctx.service.news.addNew(row);

    if(result.affectedRows === 1) {
      ctx.body = '新增成功！'
    } else {
      ctx.body = '新增失败！'
    }
  }
  async edit() {
    const { ctx } = this;
    
    let data = await ctx.service.news.getNew(ctx.params.id);

    await ctx.render('edit.html', data);
  }
  async editAction() {
    const { ctx } = this;

    const row = {
      id: ctx.params.id,
      title: ctx.request.body.title,
      content: ctx.request.body.content,
      time: ctx.request.body.time
    };

    const result = await ctx.service.news.updateNew(row);

    if(result.affectedRows === 1) {
      ctx.body = '修改成功！'
    } else {
      ctx.body = '修改失败！'
    }
  }
  async delete() {
    const { ctx } = this;
  
    const result = await ctx.service.news.deleteNew(ctx.params.id);
  
    if(result.affectedRows === 1) {
      ctx.body = '删除成功！'
    } else {
      ctx.body = '删除失败！'
    }
  }
}

module.exports = AdminController;