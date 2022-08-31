export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wxe8b45c16707e6e49",

    // 公众号APP_SECRET
    APP_SECRET: "e16a65aaf0e6088ea460c6189656f66e",

    // 模板消息id
    TEMPLATE_ID: "gHyVlp8dF_IgHHpMHzRnfaYovGi_TR4vmw11LPEIzKc",

    // 回调消息模板id, 用来看自己有没有发送成功的那个模板
    CALLBACK_TEMPLATE_ID: "xxxxxxxxxxxxx-y你懂的,填错狗头打烂VRMpu",

    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
    // [{
    //   name: "张三",
    //   id: "wxafasdasdd-zxfvsdfd"
    // },
    // {
    //   name: "李四",
    //   id: "wxafasdasdd-zxfvsdfd"
    // }]
    USERS: [
      {name: '老婆0', id: "o1Fqd59KpHqctHc0pygTMcgVU9f0"}, 
    ],
    // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
    CALLBACK_USERS: [
      {name: '自己',id: "5hxOO6VskYv你懂的,填错狗头打烂-ywIZVRMpuXhk"}, 
    ],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "湖南",
    // 所在城市
    CITY: "长沙",

    /** 重要节日相关 */

    // 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    // tpye必须填！ 只能 “生日” 和 “节日” 二选一!
    // 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
    // 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
    FESTIVALS: [
      {"type": "生日", "name": "纪念日", "year": "2020", "date": "12-01"},
    ],
    // 限制重要节日的展示条目, 需要填写数字; 
    // 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
    // 如果为0, 则默认展示全部
    FESTIVALS_LIMIT: 3,

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2020-12-01",



    /** 每日一言 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: "星座"


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

// 共推送 {{need_post_num.DATA}}  人
// 成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
// 成功用户: {{success_post_ids.DATA}}
// 失败用户: {{fail_post_ids.DATA}}
