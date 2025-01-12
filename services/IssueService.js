const Issue = require("../models/Issue");
const { pool } = require("../config/db");

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
}

module.exports = IssueService;
