接口初稿 (不要写死，必有改动)


server : htt://47.74.229.172:8668/

### 通用结构
```
所有接口数据返回统一结构为
{
  "result":"ok",        # ok或者error,表示成功或者错误。
  "msg":"",             # 当为error,msg有错误信息。其他为空.
  "data": object...     # 具体的数据，oject结构不固定。
}
```
注意：下面文档只显示data的object样例

--------
### 登录
```
采用微信授权登录
微信授权后，由后端直接跳转到首页，并设置登录状态(set-cookie)
后续都凭这个状态(cookie)获取借口数据
```

### 获取用户信息
```
url: /v1/user/info
method: get

response:
{
  "username": "随风",
  "sex": 1,
  "avatar": "http://wx.qlogo.cn/mmopen/vi_32/oLu3ZaZUfdP0l6vFgDkxG7IOMq9xqUGLG48hNm57ib3lrCdia5SknKqn0l0pkj70AvMJkKCCqztuhDVHzhP0TIVg/0",
  "coin":1024         # 用户金币数量
  “account”:"",
  "passw":"",
  "phone":""
}
```

### 获取选手详情
```
url:  /v1/boxer/info?id=22
method: get

response
{
  "id": 22,
  "name": "熊竞楠",
  "intro": "",
  "sex": "男",
  "country_name": "中国",
  "country_img": "http://xxxxxxxx.jpg"
  "height": 168,
  "weight": 56,
  "birthday": 1511193600,
  "age": 29,
  "win_times": 125,
  "fail_times": 86,
  "ko_times": 51,
  "avatar": "",
  "img": ""
}
```

### 获取选手信息列表（资料库列表）
```
url: /v1/boxer/list
method: get

response:
[
{
  country:
      {
        "country_name": "中国",
        "country_img": "http://xxxxxxxx.jpg"
      }
  boxers:
  {
    "id": 22,
    "name": "熊竞楠",
    "intro": "",
    "sex": "男",
    "country_name": "中国",
    "country_img": "http://xxxxxxxx.jpg"
    "height": 168,
    "weight": 56,
    "birthday": 1511193600,
    "age": 29,
    "win_times": 125,
    "fail_times": 86,
    "ko_times": 51,
    "avatar": "",
    "img": ""
  }
}
]

```

### 获取选手历史赛事（资料库列表）
```
url: /v1/boxer/history?id=1&page=1&limit=1
method: get
```

### 资料库搜索
```
url: /v1/boxer/search?text=ddddd
method: get

response:
[
{
  "info": {
      "id": 1,
      "station_name": "111",
      "kg_level": 111,
      "game_type": "1",
      "bet_begin_time": 1,
      "bet_end_time": 1,
      "game_begin_time": 1,
      "game_end_time": 1,
      "blue_play_id": 1,
      "red_play_id": 1,
      "expect_award_time": 1,
      "winner": "1",
      "status": 1,    // 0未开始投注，1投注中，2投注结束，3未结算,4结算完毕
      "bet_total_people":10
  },
  "red": {
      "id": 1,
      "name": "邹美眉",
      "intro": "",
      "sex": "女",
      "country_name": "中国",
      "country_img": "http://xxxxxxxx.jpg"
      "height": 162,
      "weight": 68,
      "birthday": 1511193600,
      "age": 26,
      "win_times": 105,
      "fail_times": 23,
      "ko_times": 59,
      "avatar": "",
      "img": ""
  },
  "blue": {
      "id": 1,
      "name": "邹美眉",
      "intro": "",
      "sex": "女",
      "country_name": "中国",
      "country_img": "http://xxxxxxxx.jpg"
      "height": 162,
      "weight": 68,
      "birthday": 1511193600,
      "age": 26,
      "win_times": 105,
      "fail_times": 23,
      "ko_times": 59,
      "avatar": "",
      "img": ""
  },
  "bet_infos": [
      {
          "id": 1,
          "game_item_info_id": 1,
          "bet_type": 1,
          "blue_odds": 1.11,
          "red_odds": 1.11,
          "blue_odds_amount": 100,  // 投注总金额
          "red_odds_amount": 100    // 投注总金额
      }
  ]
}
}
]
```

### 获取竞猜详情
```
url: /v1/match/info?id=.....
method: get

response
{
  "info": {
      "id": 1,
      "station_name": "111",
      "kg_level": 111,
      "game_type": "1",
      "bet_begin_time": 1,
      "bet_end_time": 1,
      "game_begin_time": 1,
      "game_end_time": 1,
      "blue_play_id": 1,
      "red_play_id": 1,
      "expect_award_time": 1,
      "winner": "1",
      "status": 1    // 0未开始投注，1投注中，2投注结束，3未结算,4结算完毕
  },
  "red": {
      "id": 1,
      "name": "邹美眉",
      "intro": "",
      "sex": "女",
      "country_name": "中国",
      "country_img": "http://xxxxxxxx.jpg"
      "height": 162,
      "weight": 68,
      "birthday": 1511193600,
      "age": 26,
      "win_times": 105,
      "fail_times": 23,
      "ko_times": 59,
      "avatar": "",
      "img": ""
  },
  "blue": {
      "id": 1,
      "name": "邹美眉",
      "intro": "",
      "sex": "女",
      "country_name": "中国",
      "country_img": "http://xxxxxxxx.jpg"
      "height": 162,
      "weight": 68,
      "birthday": 1511193600,
      "age": 26,
      "win_times": 105,
      "fail_times": 23,
      "ko_times": 59,
      "avatar": "",
      "img": ""
  },
  "bet_infos": [
      {
          "id": 1,
          "game_item_info_id": 1,
          "bet_type": 1,
          "blue_odds": 1.11,
          "red_odds": 1.11,
          "blue_odds_amount": 100,  // 投注总金额
          "red_odds_amount": 100    // 投注总金额
      }
  ]
}
}
```


### 获取竞猜列表,    
```
url:  /v1/match/list?page=1&limit=3&type=1
method: get
params:
        type :  预告用 type=0 这个数据， 正在竞猜用type=1的数据，赛果用type=2的数据(里面status有2投注结束，3比赛结束，4结算)


response:
[
    {
        "info": {
            "id": 1,
            "station_name": "111",
            "kg_level": 111,
            "game_type": "1",
            "bet_begin_time": 1,
            "bet_end_time": 1,
            "game_begin_time": 1,
            "game_end_time": 1,
            "blue_play_id": 1,
            "red_play_id": 1,
            "expect_award_time": 1,
            "winner": "1",
            "status": 1    // 0未开始投注，1投注中，2投注结束，3结束，未结算，4结算完毕
        },
        "red": {
            "id": 1,
            "name": "邹美眉",
            "intro": "",
            "sex": "女",
            "country_name": "中国",
            "country_img": "http://xxxxxxxx.jpg"
            "height": 162,
            "weight": 68,
            "birthday": 1511193600,
            "age": 26,
            "win_times": 105,
            "fail_times": 23,
            "ko_times": 59,
            "avatar": "",
            "img": ""
        },
        "blue": {
            "id": 1,
            "name": "邹美眉",
            "intro": "",
            "sex": "女",
            "country_name": "中国",
            "country_img": "http://xxxxxxxx.jpg"
            "height": 162,
            "weight": 68,
            "birthday": 1511193600,
            "age": 26,
            "win_times": 105,
            "fail_times": 23,
            "ko_times": 59,
            "avatar": "",
            "img": ""
        },
        "bet_infos": [
            {
                "id": 1,
                "game_item_info_id": 1,
                "bet_type": 1,
                "blue_odds": 1.11,
                "red_odds": 1.11,
                "blue_odds_amount": 100,  // 投注总金额
                "red_odds_amount": 100    // 投注总金额
            }
        ]
    }
]

```




### 投注
```
url:  /v1/bet/game
method: post
param:
        game_id         # 比赛id
        guess           # red/blue
        coin            # 金币
        bet_type        # 投注类型，目前为1

response:

```

### 投注记录(时间倒序)
```
url: /v1/bet/my?page=1&limit=5&flag=1
method: get

response
[
{
          "bet_record_id": 1,
          "game_item_info_id": 1, // 赛事id
          "bet_amout": 1,
          "bet_odds": 1.68,
          "bet_option": "red",    // 投注选择
          "bet_time": 0,
          "winner_flag": 1,       // 中奖标志 // 1未开奖，2中奖了，3未中奖
          "award_amout": 168
},.....
]
```

### 金币明细(时间倒序)
```
url:  /v1/coin/my?page=1&limit=5
method: get

response:
[
{
          "id": 2,
          "coin": 111,
          "opr_type": 3,      // 1充值，2提取，3投注，4赢取
          "create_time": 1515763152,
          "bet_id": 4,
          "order_id": 0
}
]
```

### 我的订单
```
url:  /v1/order/my?page=1&limit=1&opr_type=1
method: get

response:
{
            "id": 1,
            "amount": 100.5,
            "coin_num": 500,
            "opr_type": 1,    // 1充值，2提取
            "opr_time": 1515223500,
            "status": 1,    // 1确认中，2已确认，并结算，3已取消
            "confirm_time": 0
}
```

### 提取/充值
```
url: /v1/order/new
method: post
params:
      coin        金币/金额
      opr_type    1充值 2提现
      phone       手机号

response:

```

### 消息接口
```
url: /v1/msg/list?page=1&limit=1&msg_type=1
method: get
params:
      msg_type 消息类型（1.全局消息2.轮播消息3.个人中奖消息）

response:
{
    "id": 1,
    "msg_type": 1,
    "msg_content": "xxxx中奖了.",
    "create_time": 15111111
}
```

### 赛程接口
```
url:  /v1/match/all?page=1&limit=3
method: get


response:
[
    {
        "info": {
            "id": 1,
            "station_name": "111",
            "kg_level": 111,
            "game_type": "1",
            "bet_begin_time": 1,
            "bet_end_time": 1,
            "game_begin_time": 1,
            "game_end_time": 1,
            "blue_play_id": 1,
            "red_play_id": 1,
            "expect_award_time": 1,
            "winner": "1",
            "status": 1    // 0未开始投注，1投注中，2投注结束，3结算完毕
        },
        "red": {
            "id": 1,
            "name": "邹美眉",
            "intro": "",
            "sex": "女",
            "country_name": "中国",
            "country_img": "http://xxxxxxxx.jpg"
            "height": 162,
            "weight": 68,
            "birthday": 1511193600,
            "age": 26,
            "win_times": 105,
            "fail_times": 23,
            "ko_times": 59,
            "avatar": "",
            "img": ""
        },
        "blue": {
            "id": 1,
            "name": "邹美眉",
            "intro": "",
            "sex": "女",
            "country_name": "中国",
            "country_img": "http://xxxxxxxx.jpg"
            "height": 162,
            "weight": 68,
            "birthday": 1511193600,
            "age": 26,
            "win_times": 105,
            "fail_times": 23,
            "ko_times": 59,
            "avatar": "",
            "img": ""
        },
        "bet_infos": [
            {
                "id": 1,
                "game_item_info_id": 1,
                "bet_type": 1,
                "blue_odds": 1.11,
                "red_odds": 1.11,
                "blue_odds_amount": 100,  // 投注总金额
                "red_odds_amount": 100    // 投注总金额
            }
        ]
    }
]

```
### 点赞
```
url:  /v1/like/this?portal_id=3
method: get

response
```
### 点赞列表
```
url:  /v1/like/list?portal_id=3
method: get

response:
[
  {
    "username": "随风",
    "sex": 1,
    "avatar": "http://wx.qlogo.cn/mmopen/vi_32/oLu3ZaZUfdP0l6vFgDkxG7IOMq9xqUGLG48hNm57ib3lrCdia5SknKqn0l0pkj70AvMJkKCCqztuhDVHzhP0TIVg/0",
    "coin":1024         # 用户金币数量
  },
  {
    "username": "随风",
    "sex": 1,
    "avatar": "http://wx.qlogo.cn/mmopen/vi_32/oLu3ZaZUfdP0l6vFgDkxG7IOMq9xqUGLG48hNm57ib3lrCdia5SknKqn0l0pkj70AvMJkKCCqztuhDVHzhP0TIVg/0",
    "coin":1024         # 用户金币数量
  }
]
```
### 首页banner
```
url:  /v1/portal/banner
method: get

response
[
  {
    "id"
    "published_time" 发布时间
    "post_title" 标题
    "post_keywords" 关键词
    "post_excerpt" 摘要
    "post_source" 来源
    "post_content" 文章内容
    "cover_pic"      首页轮播
  },
]
```


### 首页头条
```
url:  /v1/portal/top?page=1&limit=10
method: get

response
[
  {
    "id"
    "published_time" 发布时间
    "post_title" 标题
    "post_keywords" 关键词
    "post_excerpt" 摘要
    "post_source" 来源
    "post_content" 文章内容
    "cover_pic"      首页轮播
  },
]
```

### 推荐
```
url:  /v1/portal/popular
method: get

response
[
  {
    "id"
    "published_time" 发布时间
    "post_title" 标题
    "post_keywords" 关键词
    "post_excerpt" 摘要
    "post_source" 来源
    "post_content" 文章内容
    "cover_pic"      首页轮播
  },
]
```

### 文章详情
```
url:  /v1/portal/info?portal_id=1
method: get

response
{
    "like": false   是否点赞
    "portal":{
      "id"
      "published_time" 发布时间
      "post_title" 标题
      "post_keywords" 关键词
      "post_excerpt" 摘要
      "post_source" 来源
      "post_content" 文章内容
      "cover_pic"      首页轮播
    }
}
```


### 盈利排行榜
```
url:  /v1/rank_list/win
method: get

response
[
  {
    "user_id"
    "username" 昵称
    "avatar" 头像
    "total_amount" 总金额
  },
]
```

### 投注排行榜
```
url:  /v1/rank_list/bet
method: get

response
[
  {
    "user_id"
    "username" 昵称
    "avatar" 头像
    "total_amount" 总金额
  },
]
```


### 财富排行榜
```
url:  /v1/rank_list/coin
method: get

response
[
  {
    "user_id"
    "username" 昵称
    "avatar" 头像
    "total_amount" 总金额
  },
]
```
### 用户反馈
```
url: /v1/feedback/info
method: post
params:
    content string: 内容
    contact string: 联系

response

```

### 关于我们这些
```
url:  /v1/portal/own?type=2 (类型,2:帮助中心；3：联系客服；4：关于我们)
method: get

response
  {
    "id"
    "published_time" 发布时间
    "post_title" 标题
    "post_keywords" 关键词
    "post_excerpt" 摘要
    "post_source" 来源
    "post_content" 文章内容
    "cover_pic"      首页轮播
  }
```



### 游戏规则
```
url:  /v1/portal/rule
method: get

response
  {
    "id"
    "published_time" 发布时间
    "post_title" 标题
    "post_keywords" 关键词
    "post_excerpt" 摘要
    "post_source" 来源
    "post_content" 文章内容
    "cover_pic"      首页轮播
  }
```
### 用户注册
```
url:  /v1/user/register
method: post


params:
    account string: 4-24长度，前端校验一遍
    passw string: 4-24长度，前端校验一遍
    phone string 4-24长度,前端校验一遍

response
{
  "username": "随风",
  "sex": 1,
  "avatar": "http://wx.qlogo.cn/mmopen/vi_32/oLu3ZaZUfdP0l6vFgDkxG7IOMq9xqUGLG48hNm57ib3lrCdia5SknKqn0l0pkj70AvMJkKCCqztuhDVHzhP0TIVg/0",
  "coin":1024         # 用户金币数量
  “account”:"",
  "passw":"",
  "phone":""
}
```

### 用户登录
```
url:  /v1/user/login
method: post


params:
    account string: 4-24长度，前端校验一遍
    passw string: 4-24长度，前端校验一遍

response
{
  "username": "随风",
  "sex": 1,
  "avatar": "http://wx.qlogo.cn/mmopen/vi_32/oLu3ZaZUfdP0l6vFgDkxG7IOMq9xqUGLG48hNm57ib3lrCdia5SknKqn0l0pkj70AvMJkKCCqztuhDVHzhP0TIVg/0",
  "coin":1024         # 用户金币数量
  “account”:"",
  "passw":"",
  "phone":""
}
```
### 用户找回密码
```
url:  /v1/user/update/passw
method: post


params:
    account string: 4-24长度，前端校验一遍
    new_passw string: 4-24长度，前端校验一遍
    phone string 4-24长度,前端校验一遍

response
{
  "username": "随风",
  "sex": 1,
  "avatar": "http://wx.qlogo.cn/mmopen/vi_32/oLu3ZaZUfdP0l6vFgDkxG7IOMq9xqUGLG48hNm57ib3lrCdia5SknKqn0l0pkj70AvMJkKCCqztuhDVHzhP0TIVg/0",
  "coin":1024         # 用户金币数量
  “account”:"",
  "passw":"",
  "phone":""
}
```

### 用户修改密码
```
url:  /v1/user/edit/passw
method: post


params:
    new_passw string: 4-24长度，前端校验一遍
    old_passw string 4-24长度,前端校验一遍

response

```
