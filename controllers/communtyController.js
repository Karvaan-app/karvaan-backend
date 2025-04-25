const Community = require('../models/communityModel');

exports.createCommunity = async (req, res) => {
  try {
    const newCommunity = await Community.create(req.body);
    res.status(201).json(newCommunity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllCommunities = async (req, res) => {
  try {
    const communities = await Community.find();
    res.json(communities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCommunity = async (req, res) => {
  try {
    const community = await Community.findById(req.params.id);
    if (!community) {
      return res.status(404).json({ message: 'Community not found' });
    }
    res.json(community);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCommunity = async (req, res) => {
  try {
    const updatedCommunity = await Community.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCommunity) {
      return res.status(404).json({ message: 'Community not found' });
    }
    res.json(updatedCommunity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a community
exports.deleteCommunity = async (req, res) => {
  try {
    const community = await Community.findByIdAndDelete(req.params.id);
    if (!community) {
      return res.status(404).json({ message: 'Community not found' });
    }
    res.json({ message: 'Community deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
