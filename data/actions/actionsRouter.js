const express = require('express');
const Actions = require('../helpers/actionModel');

const router = express.Router();

router.use(express.json());

router.get('/', async (req, res) => {
  try {
    const actions = await Actions.get();
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({ error: 'Uh-oh! There was an error retrieving your actions'})
  }
});

router.get('/:id', async (req, res) => {
  try {
    const action = await Actions.getById(req.params.id);
    if(post) {
      res.status(200).json(action)
    } else {
      res.status(404).json({ message: 'Your action is not accounted for!' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Uh-oh! There was an error retrieving your actions' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await Actions.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: 'The action has been removed...you have a clean slate!' })
    } else {
      res.status(404).json({ message: 'Uh-oh! Action could not found.' })
    }
  } catch (error) {
    res.status(500).json({
      message: 'You wish you could take away some actions! Unfortunately, there was an error this time.',
    });
  }
})

router.post('/', async (req, res) => {
  try {
    const action = await Actions.insert(req.body);
    res.status(200).json(action);
  } catch (error) {
    res.status(500).json({
      message: 'Bummer. Error adding the action',
    });
  }
})

router.put('/:id', async (req, res) => {
  try {
    const action = await Actions.update(req.params.id, req.body);
    if (action) {
      res.status(200).json(action);
    } else {
      res.status(404).json({ message: 'Uh-oh! Action could not found' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Bummer. Error updating the actions' })
  }
})

module.exports = router;
