const InvitationService = require("../services/InvitationService");

exports.createInvitation = async (req, res) => {
  try {
    const { owner_id, tenant_id, property_id } = req.body;
    const invoice = await InvitationService.create(
      owner_id,
      tenant_id,
      property_id
    );
    res.status(201).json(invoice);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.getInvitationByUserId = async (req, res) => {
  //TODO
};

exports.getInvitationById = async (req, res) => {
  //TODO
};
