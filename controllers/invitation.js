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

exports.changeInvitationStatus = async (req, res) => {
  try {
    const { invitation_id } = req.params;
    const { tenant_id, status } = req.body;
    const invitation = await InvitationService.updateInvitationStatus(
      tenant_id,
      invitation_id,
      status
    );
    res.status(201).json(invitation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getInvitationByUserId = async (req, res) => {
  try {
    const { user_id } = req.body;
    const invitations = await InvitationService.getInvitationsByUserId(user_id);
    res.status(201).json(invitations);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.getInvitationById = async (req, res) => {
  //TODO
};
