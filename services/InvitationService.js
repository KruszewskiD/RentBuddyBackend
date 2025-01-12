const Invitation = require("../models/Invitation");

class InvitationService {
  static async create(owner_id, tenant_id, property_id) {
    try {
      const invitation = await Invitation.build({
        owner_id: owner_id,
        tenant_id: tenant_id,
        property_id: property_id,
      });
      return invitation;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = InvitationService;
