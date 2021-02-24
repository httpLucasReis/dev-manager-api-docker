const knex = require('../database/index');

module.exports = {
  async index (req, res, next) {
    try {
      const { user_id, name , page = 1} = req.query;

      const query = knex('projects')
          .limit(4)
          .offset((page - 1) * 4) // growthing 4 by 4
          .select('projects.*', 'users.username')
          .join('users', 'users.id', 'projects.user_id')
          .where('projects.deleted_at', null)

      const countObject = knex('projects').count();

      // if user_id exits
      if(user_id) {
        query.where({ user_id })
        query.where('users.deleted_at', null)
        query.where('projects.deleted_at', null)
        
        countObject.where({ user_id })
      }

      if(name) {
        query.where('projects.title', 'like', `%${name}%`)
      } 

      const [count] =  await countObject;
      res.header('X-Total-Count', count['count']);

      const results = await query;

      return res.json(results);
    } catch(error) {
      next(error);
    }
  }, 

  async create(req, res, next) {
    try {
      const { title, user_id } = req.body;
      await knex('projects').insert({
        title,
        user_id
      }) 

      return res.status(201).send();

    } catch(error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { title } = req.body;
      const { id } = req.params;

      await knex('projects')
        .update({ title })
        .where({ id })

      return res.send();
    } catch(error){
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex('projects')
        .update({ deleted_at: new Date() })
        .where({ id })

      return res.send()

    } catch(error){
      next(error)
    }
  }
}