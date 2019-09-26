const {Service}=require('egg')
const superagent = require('superagent');
const cheerio = require('cheerio')
class HomeService extends Service{
    async index(){
        try {
            const res = await superagent.get('https://club.autohome.com.cn/jingxuan');
            // console.log(res);
            const $=cheerio.load(res.text)
            let arr=[]
            //   console.log( $('ul.content li').length)
            $('ul.content li').each((index,item)=>{
                // 获取你想要的标签
                let obj={
                    imgUrl:$(item).find('.pic-box a img').attr('data-original'),
                    title:$(item).find('.pic_txt a').html(),
                    link:$(item).find('.pic_txt p a').attr('href')
                }
                arr.push(obj)
            })
            return arr
           
          } catch (err) {
            console.error(err);
          }
    }
   
}
module.exports=HomeService