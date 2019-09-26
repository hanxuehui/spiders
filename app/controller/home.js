'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const result=await ctx.service.home.index()
    // ctx.body = {
    //   code:1,
    //   result
    // };
  
    await ctx.render('index.html',{result})
  }

}

module.exports = HomeController;
