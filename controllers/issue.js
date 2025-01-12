const IssueService = require("../services/IssueService");

exports.createIssue = async (req, res) => {
  try {
    const { property_id, tenant_id, owner_id, description, title, date } =
      req.body;
    const issue = await IssueService.createIssue(
      property_id,
      tenant_id,
      owner_id,
      description,
      title,
      date
    );
    res.status(201).json(issue);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.updateIssueStatus = async (req, res) => {
  try {
    const { issue_id } = req.params;
    const { owner_id, resolve_status } = req.body;
    const issue = await IssueService.updateIssueStatus(
      owner_id,
      issue_id,
      resolve_status
    );
    res.status(201).json(issue);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
