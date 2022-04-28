import { createServer, Model } from 'miragejs'

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer(){
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({

      })
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
