## Contributing Guidelines

This document intends to establish guidelines which build a transparent, open mechanism for deciding how to evolve the papiNet API standard. The papiNet Central Working Group (CWG) will follow these processes when merging changes from external contributors or from the CWG itself. This guideline document will be adjusted as practicality dictates.

## Tracking Process
* GitHub is the medium of record for all papiNet API standard updates.
* At any given time, there would be *at most* 4 work branches. The branches would exist if work has started on them. Assuming a current version of 1.0.0:
  * master - Current stable version 1.0.0. No PRs would be accepted directly to modify the specification. PRs against supporting files can be accepted.
  * v1.0.1 - The next PATCH version of the standard. This would only include non-breaking changes such as typo fixes and wording clarifications.
  * v1.1.0 - The next MINOR version.
  * v2.0.0 - The next MAJOR version.
* New features should be done in feature branches/forks which, upon approval, are merged into the proper work branch.
* An issue SHOULD be opened for each feature change.
* A PR will be used to describe the *proposed* solution and linked to the original issue.

## Release Process
A release requires a vote by papiNet CWG members within the voting period.
* PATCH-level releases require a majority (>=50%) approval by papiNet CWG members within a voting period of 5 calendar days
* MINOR-level releases requires a super majority (>=66%) approval by papiNet CWG members within a voting period of 10 calendar days
* MAJOR-level releases requires a super majority (>=66%) approval by papiNet CWG members within a voting period of 15 calendar days
