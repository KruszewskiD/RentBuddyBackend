const Issue = require("../models/Issue");
const { Op } = require("sequelize");

class IssueService {
  static async createIssue(
    property_id,
    tenant_id,
    owner_id,
    description,
    title,
    date
  ) {
    const issue = await Issue.create({
      property_id,
      tenant_id,
      owner_id,
      description,
      title,
      date,
    });
    return issue;
  }

  static async updateIssueStatus(owner_id, issue_id, resolve_status) {
    if (resolve_status !== "fixed") {
      throw new Error('Invalid status. Use "fixed"');
    }
    const issue = await Issue.findByPk(issue_id);

    if (issue.owner_id !== owner_id) {
      throw new Error("You are not authorized to update this issue.");
    }

    if (!issue) {
      throw new Error("Issue not found.");
    }

    if (issue.resolve_status !== "pending") {
      throw new Error(
        'Cannot update issue. Only "pending" issue can be updated.'
      );
    }
    issue.updated_at = new Date().toISOString();
    issue.resolve_status = resolve_status;
    issue.save();
    return issue;
  }

  static async getIssuesByUserId(user_id) {
    if (!user_id) {
      throw new Error("Missing user_id.");
    }
    const userIssues = await Issue.findAll({
      where: {
        [Op.or]: [{ owner_id: user_id }, { tenant_id: user_id }],
      },
    });

    return userIssues;
  }
}

module.exports = IssueService;
