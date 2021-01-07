import Rest from './_rest.service'

const url = '/api/v1/Users/'

export default class User extends Rest {
  static get_user(id) {
    return super.get(`${url}${id}`)
  }

  static post_user(body){
    return super.post(url,body)
  }

  static put_user(id, body){
    return super.put(`${url}${id}`,body)
  }
  static delete_user(id) {
    return super.delete(`${url}${id}`)
  }
}
