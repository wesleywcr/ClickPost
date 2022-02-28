import axios from 'axios'

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/wesleywcr/fakeapi/'
})

export default api
//api jsonplaceholder=> 'https://my-json-server.typicode.com/wesleywcr/fakeapi/'
//api Json-Server => 'http://10.0.0.104:3333/'
