const express = require('express');
const router = express.Router();

router.get('/:id', async (req, res) => {
  if (req.params.id > 0) {
      let userSqlQuery = 'SELECT firm_id, position_id FROM user_firm_position WHERE user_id = $1';
      let data = await postgres.any(userSqlQuery, req.params.id);
      return res.status(200).send(data);
  } else {
      return res.status(404).send({message: 'User not found'});
  }
});

module.exports = router;