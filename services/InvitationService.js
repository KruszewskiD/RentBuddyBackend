const { Op } = require("sequelize");
const Invitation = require("../models/Invitation");
const PropertyService = require("./PropertyService");

class InvitationService {
  static async create(owner_id, tenant_id, property_id) {
    const invitation = await Invitation.create({
      owner_id: owner_id,
      tenant_id: tenant_id,
      property_id: property_id,
    });
    return invitation;
  }

  static async updateInvitationStatus(tenant_id, invitation_id, status) {
    if (!["accepted", "rejected"].includes(status)) {
      throw new Error('Invalid status. Use "accepted" or "rejected".');
    }
    const invitation = await Invitation.findByPk(invitation_id);

    if (invitation.tenant_id !== tenant_id) {
      throw new Error("You are not authorized to update this invitation.");
    }

    if (!invitation) {
      throw new Error("Invitation not found.");
    }

    if (invitation.status !== "pending") {
      throw new Error(
        'Cannot update invitation. Only "pending" invitations can be updated.'
      );
    }

    await PropertyService.rentProperty(
      invitation.property_id,
      tenant_id,
      invitation.owner_id
    );

    invitation.status = status;
    invitation.save();
    return invitation;
  }

  static async getInvitationsByUserId(user_id) {
    if (!user_id) {
      throw new Error("Missing user_id.");
    }
    const userInvitations = await Invitation.findAll({
      where: {
        [Op.or]: [{ owner_id: user_id }, { tenant_id: user_id }],
      },
    });

    return userInvitations;
  }
}

module.exports = InvitationService;
