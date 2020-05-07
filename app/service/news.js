'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getAllNews() {
    const result = await this.app.mysql.select('news');
    return result;
  }
  async getNew(newid) {
    const result = await this.app.mysql.get('news', {id: newid});
    console.log(result)
    return result;
  }
  async addNew(newDate) {
    const result = await this.app.mysql.insert('news', newDate);
    return result;
  }
  async updateNew(newDate) {
    const result = await this.app.mysql.update('news', newDate);
    return result;
  }
  async deleteNew(newid) {
    const result = await this.app.mysql.delete('news', {id: newid});
    return result;
  }
}

module.exports = NewsService;
