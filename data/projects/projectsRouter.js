const express = require('express');
const Projects = require('../helpers/projectModel');

const router = express.Router();

router.use(express.json());

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.get(req.query);
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Uh-oh! There was an error retrieving your projects' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await Projects.findById(req.params.id);

    if(project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: 'Cannot find the project. Try another one.'})
    }
  } catch (error) {
    res.status(500).json({ error: 'Uh-oh! There was an error retrieving your projects'});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await Projects.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: 'Success! The project has been removed' })
    } else {
      res.status(404).json({ message: 'Uh-oh! Project could not found' })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Bummer. Error removing the project',
    });
  }
});

router.post('/id/projects', async (req, res) => {
  const projectInfo = { ...req.body, project_id: req.params.id };

  try {
    const project = await Projects.addProject(messageInfo);
    res.status(210).json(project)
  } catch (error) {
    res.status(500).json({
      message: 'Bummer. Error adding the project'
    });
  }
})

router.put('/:id', async (req, res) => {
  try {
    const project = await Projects.update(req.params.id, req.body);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: 'Uh-oh! The project could not found' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Bummer. Error updating the project' })
  }
})

module.exports = router;
