import { createServer, Model, Factory } from 'miragejs'
import faker from '@faker-js/faker'



type User = {
  name: string;
  email: string;
  createdAt: string;
}

export function makeServer(){
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name(index) {
          return `User ${index + 1}`
        },

        email() {
          return faker.internet.email().toLowerCase()
        },
        createdAt() {
          return faker.date.recent(10)
        }
      })
    },

    seeds(server){
      server.createList('user', 11)
    },

    routes(){
  /*     this.get('/users', (schema: any) => {
        return schema.users.all()
      })     */
      this.namespace = 'api'
      this.timing = 1000

      this.get('/users');
      this.post('/users');

      //voltar pro valor em branco para não prejudicar as rotas que tem detro do next
      this.namespace = ''
      this.passthrough()
    }
  })

  return server
}
