//注册接口

import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/api/new', {
  code: 0,
  data: data.news
})

