exports['GitHub commentOnIssue can create a comment 1'] = {
  "body": "This is a comment"
}

exports['GitHub commitsSince backfills commit files for pull requests with lots of files 1'] = [
  {
    "sha": "e6daec403626c9987c7af0d97b34f324cd84320a",
    "message": "Merge pull request #7 from chingor13/feature-branch-plain-merge\n\nfeat: feature that will be plain merged",
    "pullRequest": {
      "sha": "e6daec403626c9987c7af0d97b34f324cd84320a",
      "number": 7,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-plain-merge",
      "title": "feat: feature that will be plain merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": [
      "abc"
    ]
  }
]

exports['GitHub commitsSince backfills commit files without pull requests 1'] = [
  {
    "sha": "e6daec403626c9987c7af0d97b34f324cd84320a",
    "message": "Merge pull request #7 from chingor13/feature-branch-plain-merge\n\nfeat: feature that will be plain merged",
    "pullRequest": {
      "sha": "e6daec403626c9987c7af0d97b34f324cd84320a",
      "number": 7,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-plain-merge",
      "title": "feat: feature that will be plain merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  }
]

exports['GitHub commitsSince finds commits up until a condition 1'] = [
  {
    "sha": "e6daec403626c9987c7af0d97b34f324cd84320a",
    "message": "Merge pull request #7 from chingor13/feature-branch-plain-merge\n\nfeat: feature that will be plain merged",
    "pullRequest": {
      "sha": "e6daec403626c9987c7af0d97b34f324cd84320a",
      "number": 7,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-plain-merge",
      "title": "feat: feature that will be plain merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  }
]

exports['GitHub commitsSince finds first commit of a multi-commit merge pull request 1'] = [
  {
    "sha": "e6daec403626c9987c7af0d97b34f324cd84320a",
    "message": "Merge pull request #7 from chingor13/feature-branch-plain-merge\n\nfeat: feature that will be plain merged",
    "pullRequest": {
      "sha": "e6daec403626c9987c7af0d97b34f324cd84320a",
      "number": 7,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-plain-merge",
      "title": "feat: feature that will be plain merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  },
  {
    "sha": "b29149f890e6f76ee31ed128585744d4c598924c",
    "message": "feat: feature-branch-plain-merge commit 2",
    "pullRequest": {
      "sha": "b29149f890e6f76ee31ed128585744d4c598924c",
      "number": 7,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-plain-merge",
      "title": "feat: feature that will be plain merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  },
  {
    "sha": "27d7d7232e2e312d1380e906984f0823f5decf61",
    "message": "feat: feature-branch-plain-merge commit 1",
    "pullRequest": {
      "sha": "27d7d7232e2e312d1380e906984f0823f5decf61",
      "number": 7,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-plain-merge",
      "title": "feat: feature that will be plain merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  }
]

exports['GitHub commitsSince limits pagination 1'] = [
  {
    "sha": "e6daec403626c9987c7af0d97b34f324cd84320a",
    "message": "Merge pull request #7 from chingor13/feature-branch-plain-merge\n\nfeat: feature that will be plain merged",
    "pullRequest": {
      "sha": "e6daec403626c9987c7af0d97b34f324cd84320a",
      "number": 7,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-plain-merge",
      "title": "feat: feature that will be plain merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  },
  {
    "sha": "b29149f890e6f76ee31ed128585744d4c598924c",
    "message": "feat: feature-branch-plain-merge commit 2",
    "pullRequest": {
      "sha": "b29149f890e6f76ee31ed128585744d4c598924c",
      "number": 7,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-plain-merge",
      "title": "feat: feature that will be plain merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  },
  {
    "sha": "27d7d7232e2e312d1380e906984f0823f5decf61",
    "message": "feat: feature-branch-plain-merge commit 1",
    "pullRequest": {
      "sha": "27d7d7232e2e312d1380e906984f0823f5decf61",
      "number": 7,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-plain-merge",
      "title": "feat: feature that will be plain merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  },
  {
    "sha": "2b4e0b3be2e231cd87cc44c411bd8f84b4587ab5",
    "message": "fix: feature-branch-merge fix 1",
    "pullRequest": {
      "sha": "2b4e0b3be2e231cd87cc44c411bd8f84b4587ab5",
      "number": 6,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-merge",
      "title": "feat: feature that will be rebase merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  },
  {
    "sha": "a257514a541d483425118d973674b1ce006a5489",
    "message": "chore: feature-branch-merge lint",
    "pullRequest": {
      "sha": "a257514a541d483425118d973674b1ce006a5489",
      "number": 6,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-merge",
      "title": "feat: feature that will be rebase merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  },
  {
    "sha": "b6a8ab1a50106cfb03f22c2cdaf7abfdcccce088",
    "message": "feat: feature-branch-merge commit 2",
    "pullRequest": {
      "sha": "b6a8ab1a50106cfb03f22c2cdaf7abfdcccce088",
      "number": 6,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-merge",
      "title": "feat: feature that will be rebase merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  },
  {
    "sha": "520b6f42551c86002197d033564a76a3f99b0019",
    "message": "feat: feature-branch-merge commit 1",
    "pullRequest": {
      "sha": "520b6f42551c86002197d033564a76a3f99b0019",
      "number": 6,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-merge",
      "title": "feat: feature that will be rebase merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  },
  {
    "sha": "9dda1a331d311d0a7643015cc9e6802548c8d943",
    "message": "chore(main): release 0.1.1-SNAPSHOT (#3)",
    "pullRequest": {
      "sha": "9dda1a331d311d0a7643015cc9e6802548c8d943",
      "number": 3,
      "baseBranchName": "main",
      "headBranchName": "release-please/branches/main",
      "title": "chore(main): release 0.1.1-SNAPSHOT",
      "body": ":robot: I have created a release \\*beep\\* \\*boop\\* \n---\n### Updating meta-information for bleeding-edge SNAPSHOT release.\n---\n\n\nThis PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).",
      "labels": [
        "type: process"
      ],
      "files": []
    },
    "files": []
  },
  {
    "sha": "e86984fb22ccc5eafb6c3d815851ade3463193da",
    "message": "feat: feature-branch that will be squash merged (#2)\n\n* feat: feature-branch commit 1\r\n\r\n* feat: feature-branch commit 2\r\n\r\n* chore: fix lint\r\n\r\n* fix: feature-branch fix 1",
    "pullRequest": {
      "sha": "e86984fb22ccc5eafb6c3d815851ade3463193da",
      "number": 2,
      "baseBranchName": "main",
      "headBranchName": "feature-branch",
      "title": "feat: feature-branch that will be squash merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  },
  {
    "sha": "0cda26c2e7776748072ba5a24302474947b3ebbd",
    "message": "build: add release-please bot"
  }
]

exports['GitHub commitsSince paginates through commits 1'] = [
  {
    "sha": "e6daec403626c9987c7af0d97b34f324cd84320a",
    "message": "Merge pull request #7 from chingor13/feature-branch-plain-merge\n\nfeat: feature that will be plain merged",
    "pullRequest": {
      "sha": "e6daec403626c9987c7af0d97b34f324cd84320a",
      "number": 7,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-plain-merge",
      "title": "feat: feature that will be plain merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  },
  {
    "sha": "b29149f890e6f76ee31ed128585744d4c598924c",
    "message": "feat: feature-branch-plain-merge commit 2",
    "pullRequest": {
      "sha": "b29149f890e6f76ee31ed128585744d4c598924c",
      "number": 7,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-plain-merge",
      "title": "feat: feature that will be plain merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  },
  {
    "sha": "27d7d7232e2e312d1380e906984f0823f5decf61",
    "message": "feat: feature-branch-plain-merge commit 1",
    "pullRequest": {
      "sha": "27d7d7232e2e312d1380e906984f0823f5decf61",
      "number": 7,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-plain-merge",
      "title": "feat: feature that will be plain merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  },
  {
    "sha": "2b4e0b3be2e231cd87cc44c411bd8f84b4587ab5",
    "message": "fix: feature-branch-merge fix 1",
    "pullRequest": {
      "sha": "2b4e0b3be2e231cd87cc44c411bd8f84b4587ab5",
      "number": 6,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-merge",
      "title": "feat: feature that will be rebase merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  },
  {
    "sha": "a257514a541d483425118d973674b1ce006a5489",
    "message": "chore: feature-branch-merge lint",
    "pullRequest": {
      "sha": "a257514a541d483425118d973674b1ce006a5489",
      "number": 6,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-merge",
      "title": "feat: feature that will be rebase merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  },
  {
    "sha": "b6a8ab1a50106cfb03f22c2cdaf7abfdcccce088",
    "message": "feat: feature-branch-merge commit 2",
    "pullRequest": {
      "sha": "b6a8ab1a50106cfb03f22c2cdaf7abfdcccce088",
      "number": 6,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-merge",
      "title": "feat: feature that will be rebase merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  },
  {
    "sha": "520b6f42551c86002197d033564a76a3f99b0019",
    "message": "feat: feature-branch-merge commit 1",
    "pullRequest": {
      "sha": "520b6f42551c86002197d033564a76a3f99b0019",
      "number": 6,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-merge",
      "title": "feat: feature that will be rebase merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  },
  {
    "sha": "9dda1a331d311d0a7643015cc9e6802548c8d943",
    "message": "chore(main): release 0.1.1-SNAPSHOT (#3)",
    "pullRequest": {
      "sha": "9dda1a331d311d0a7643015cc9e6802548c8d943",
      "number": 3,
      "baseBranchName": "main",
      "headBranchName": "release-please/branches/main",
      "title": "chore(main): release 0.1.1-SNAPSHOT",
      "body": ":robot: I have created a release \\*beep\\* \\*boop\\* \n---\n### Updating meta-information for bleeding-edge SNAPSHOT release.\n---\n\n\nThis PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).",
      "labels": [
        "type: process"
      ],
      "files": []
    },
    "files": []
  },
  {
    "sha": "e86984fb22ccc5eafb6c3d815851ade3463193da",
    "message": "feat: feature-branch that will be squash merged (#2)\n\n* feat: feature-branch commit 1\r\n\r\n* feat: feature-branch commit 2\r\n\r\n* chore: fix lint\r\n\r\n* fix: feature-branch fix 1",
    "pullRequest": {
      "sha": "e86984fb22ccc5eafb6c3d815851ade3463193da",
      "number": 2,
      "baseBranchName": "main",
      "headBranchName": "feature-branch",
      "title": "feat: feature-branch that will be squash merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  },
  {
    "sha": "0cda26c2e7776748072ba5a24302474947b3ebbd",
    "message": "build: add release-please bot"
  },
  {
    "sha": "959ee48c95f254300eb040c46ebdc8248317efe4",
    "message": "Release v0.1.0 (#1)",
    "pullRequest": {
      "sha": "959ee48c95f254300eb040c46ebdc8248317efe4",
      "number": 1,
      "baseBranchName": "main",
      "headBranchName": "release-release-please-test-v0.1.0",
      "title": "Release release-please-test v0.1.0",
      "body": "This pull request was generated using releasetool.\n\n02-03-2021 11:56 PST\n\n### New Features\n- feat: initial commit\n\n### Internal / Testing Changes\n- build: add java structure",
      "labels": [
        "autorelease: tagged"
      ],
      "files": []
    },
    "files": []
  }
]

exports['GitHub createPullRequest handles auto-merge option 1'] = {
  "query": "query pullRequestId($owner: String!, $repo: String!, $pullRequestNumber: Int!) {\n        repository(name: $repo, owner: $owner) {\n          pullRequest(number: $pullRequestNumber) {\n            id\n          }\n        }\n      }",
  "variables": {
    "owner": "fake",
    "repo": "fake",
    "pullRequestNumber": 123
  }
}

exports['GitHub createPullRequest handles auto-merge option 2'] = {
  "query": "mutation mutateEnableAutoMerge($pullRequestId: ID!, $mergeMethod: PullRequestMergeMethod) {\n      enablePullRequestAutoMerge(\n        input: {pullRequestId: $pullRequestId, mergeMethod: $mergeMethod}\n      ) {\n        pullRequest {\n          autoMergeRequest{\n            authorEmail,\n            commitBody,\n            commitHeadline,\n            enabledAt,\n            enabledBy {\n              login\n            },\n            mergeMethod,\n            pullRequest{\n              id\n            }\n          }\n        }\n      }\n    }",
  "variables": {
    "pullRequestId": "someIdForPR123",
    "mergeMethod": "REBASE"
  }
}

exports['GitHub createPullRequest merges release PR directly when an auto-merge given but PR in "clean status" 1'] = {
  "query": "query pullRequestId($owner: String!, $repo: String!, $pullRequestNumber: Int!) {\n        repository(name: $repo, owner: $owner) {\n          pullRequest(number: $pullRequestNumber) {\n            id\n          }\n        }\n      }",
  "variables": {
    "owner": "fake",
    "repo": "fake",
    "pullRequestNumber": 123
  }
}

exports['GitHub createRelease should create a draft release 1'] = {
  "tag_name": "v1.2.3",
  "body": "Some release notes",
  "draft": true,
  "prerelease": false,
  "target_commitish": "abc123"
}

exports['GitHub createRelease should create a prerelease release 1'] = {
  "tag_name": "v1.2.3",
  "body": "Some release notes",
  "draft": false,
  "prerelease": true,
  "target_commitish": "abc123"
}

exports['GitHub createRelease should create a release with a package prefix 1'] = {
  "tag_name": "v1.2.3",
  "body": "Some release notes",
  "draft": false,
  "prerelease": false,
  "target_commitish": "abc123"
}

exports['GitHub createRelease should raise a DuplicateReleaseError if already_exists 1'] = {
  "tag_name": "v1.2.3",
  "body": "Some release notes",
  "draft": false,
  "prerelease": false,
  "target_commitish": "abc123"
}

exports['GitHub createRelease should raise a RequestError for other validation errors 1'] = {
  "tag_name": "v1.2.3",
  "body": "Some release notes",
  "draft": false,
  "prerelease": false,
  "target_commitish": "abc123"
}

exports['GitHub findFilesByExtension returns files matching the requested pattern 1'] = [
  "appengine/pom.xml",
  "bom/pom.xml",
  "credentials/pom.xml",
  "oauth2_http/pom.xml",
  "pom.xml"
]

exports['GitHub findFilesByFilename returns files matching the requested pattern 1'] = [
  "appengine/pom.xml",
  "bom/pom.xml",
  "credentials/pom.xml",
  "oauth2_http/pom.xml",
  "pom.xml"
]

exports['GitHub generateReleaseNotes can generate notes with previous tag 1'] = {
  "tag_name": "v1.2.3",
  "previous_tag_name": "v1.2.2",
  "target_commitish": "main"
}

exports['GitHub generateReleaseNotes can generate notes without previous tag 1'] = {
  "tag_name": "v1.2.3",
  "target_commitish": "main"
}

exports['GitHub getFileContents should support Github Data API in case of a big file 1'] = {
  "sha": "2f3d2c47bf49f81aca0df9ffc49524a213a2dc33",
  "mode": "100644",
}

exports['GitHub mergeCommitIterator handles merged pull requests without files 1'] = [
  {
    "sha": "e6daec403626c9987c7af0d97b34f324cd84320a",
    "message": "Merge pull request #7 from chingor13/feature-branch-plain-merge\n\nfeat: feature that will be plain merged",
    "pullRequest": {
      "sha": "e6daec403626c9987c7af0d97b34f324cd84320a",
      "number": 7,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-plain-merge",
      "title": "feat: feature that will be plain merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  },
  {
    "sha": "b29149f890e6f76ee31ed128585744d4c598924c",
    "message": "feat: feature-branch-plain-merge commit 2",
    "pullRequest": {
      "sha": "b29149f890e6f76ee31ed128585744d4c598924c",
      "number": 7,
      "baseBranchName": "main",
      "headBranchName": "feature-branch-plain-merge",
      "title": "feat: feature that will be plain merged",
      "body": "",
      "labels": [],
      "files": []
    },
    "files": []
  }
]

exports['GitHub pullRequestIterator finds merged pull requests with labels 1'] = [
  {
    "sha": "198808aae0adc62c9ad95452170fd691ac40bd00",
    "number": 2827,
    "baseBranchName": "main",
    "headBranchName": "fix2796",
    "labels": [
      "cla: yes"
    ],
    "title": "fix: owl bot endlessly retried failed owl-bot-lock builds",
    "body": "Fixes https://github.com/googleapis/repo-automation-bots/issues/2796\r\n",
    "files": [
      "packages/owl-bot/src/scan-and-retry-failed-lock-updates.ts",
      "packages/owl-bot/test/scan-and-retry-failed-lock-updates.ts"
    ]
  },
  {
    "sha": "2838dadb5214f5dd3cfa85665428aa4b923a29e8",
    "number": 2824,
    "baseBranchName": "main",
    "headBranchName": "update-deps-trusted-contribution",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update trusted-contribution deps",
    "body": "ran ./scripts/update-dependencies.sh packages/trusted-contribution",
    "files": [
      "packages/trusted-contribution/package-lock.json",
      "packages/trusted-contribution/package.json"
    ]
  },
  {
    "sha": "b689b19c4aa839173d5e1d09fe8e3d271a18ff45",
    "number": 2822,
    "baseBranchName": "main",
    "headBranchName": "update-deps-sync-repo-settings",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update sync-repo-settings deps",
    "body": "ran ./scripts/update-dependencies.sh packages/sync-repo-settings",
    "files": [
      "packages/sync-repo-settings/package-lock.json",
      "packages/sync-repo-settings/package.json"
    ]
  },
  {
    "sha": "d270afdf45d6db550003c00725aea0294d439897",
    "number": 2821,
    "baseBranchName": "main",
    "headBranchName": "update-deps-secret-rotator",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update secret-rotator deps",
    "body": "ran ./scripts/update-dependencies.sh packages/secret-rotator",
    "files": [
      "packages/secret-rotator/package-lock.json",
      "packages/secret-rotator/package.json"
    ]
  },
  {
    "sha": "0b5d2853f75230528c2db9322a8a035219fc3e06",
    "number": 2820,
    "baseBranchName": "main",
    "headBranchName": "update-deps-release-please",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update release-please deps",
    "body": "ran ./scripts/update-dependencies.sh packages/release-please",
    "files": [
      "packages/release-please/package-lock.json",
      "packages/release-please/package.json"
    ]
  },
  {
    "sha": "9faf33d20beb160b257e368a69c425989fae4d1d",
    "number": 2819,
    "baseBranchName": "main",
    "headBranchName": "update-deps-policy",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update policy deps",
    "body": "ran ./scripts/update-dependencies.sh packages/policy",
    "files": [
      "packages/policy/package-lock.json"
    ]
  },
  {
    "sha": "2c8c92d3f154365ca968afa9ac56f0cac3211e18",
    "number": 2818,
    "baseBranchName": "main",
    "headBranchName": "update-deps-release-brancher",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update release-brancher deps",
    "body": "ran ./scripts/update-dependencies.sh packages/release-brancher",
    "files": [
      "packages/release-brancher/package-lock.json",
      "packages/release-brancher/package.json"
    ]
  },
  {
    "sha": "58f88085907b0d54efd9f8499bebddbaba08432f",
    "number": 2817,
    "baseBranchName": "main",
    "headBranchName": "update-deps-object-selector",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update object-selector deps",
    "body": "ran ./scripts/update-dependencies.sh packages/object-selector",
    "files": [
      "packages/object-selector/package-lock.json",
      "packages/object-selector/package.json"
    ]
  },
  {
    "sha": "9390299a1cbb157939309e6682abb7785df2c7a2",
    "number": 2815,
    "baseBranchName": "main",
    "headBranchName": "update-deps-mono-repo-publish",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update mono-repo-publish deps",
    "body": "ran ./scripts/update-dependencies.sh packages/mono-repo-publish",
    "files": [
      "packages/mono-repo-publish/package-lock.json"
    ]
  },
  {
    "sha": "11f32f8b4613618d3ea9aa1cbd482c3b8e47b5ce",
    "number": 2814,
    "baseBranchName": "main",
    "headBranchName": "update-deps-loadtest-bot",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update loadtest-bot deps",
    "body": "ran ./scripts/update-dependencies.sh packages/loadtest-bot",
    "files": [
      "packages/loadtest-bot/package-lock.json",
      "packages/loadtest-bot/package.json"
    ]
  },
  {
    "sha": "c09a32eccb170f772e3dc69c6a035f9fc350a6ef",
    "number": 2813,
    "baseBranchName": "main",
    "headBranchName": "update-deps-label-utils",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update label-utils deps",
    "body": "ran ./scripts/update-dependencies.sh packages/label-utils",
    "files": [
      "packages/label-utils/package-lock.json",
      "packages/label-utils/package.json"
    ]
  },
  {
    "sha": "5a30de169af5376422151806c979d2fc2b3ca3d1",
    "number": 2812,
    "baseBranchName": "main",
    "headBranchName": "update-deps-label-sync",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update label-sync deps",
    "body": "ran ./scripts/update-dependencies.sh packages/label-sync",
    "files": [
      "packages/label-sync/package-lock.json",
      "packages/label-sync/package.json"
    ]
  },
  {
    "sha": "34e061388fefc4e5143319233d9fbbc3f9b11a87",
    "number": 2811,
    "baseBranchName": "main",
    "headBranchName": "update-deps-generate-bot",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update generate-bot deps",
    "body": "ran ./scripts/update-dependencies.sh packages/generate-bot",
    "files": [
      "packages/generate-bot/package-lock.json"
    ]
  },
  {
    "sha": "6ef6b701d975f7ad32be5747f806969eb51d9cf2",
    "number": 2810,
    "baseBranchName": "main",
    "headBranchName": "update-deps-header-checker-lint",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update header-checker-lint deps",
    "body": "ran ./scripts/update-dependencies.sh packages/header-checker-lint",
    "files": [
      "packages/header-checker-lint/package-lock.json",
      "packages/header-checker-lint/package.json"
    ]
  },
  {
    "sha": "350a9c3109d845124b7f43d9d3f96dd1903cd3fa",
    "number": 2791,
    "baseBranchName": "main",
    "headBranchName": "fix-owlbot",
    "labels": [
      "cla: yes"
    ],
    "title": "fix(owl-bot): limit organizations for syncLabels",
    "body": "It mitigates #2750\r\n",
    "files": [
      "packages/owl-bot/src/owl-bot.ts",
      "packages/owl-bot/test/owl-bot.ts"
    ]
  },
  {
    "sha": "7dc3495327012e5b2ab3c93df6abaaf35e08299d",
    "number": 2788,
    "baseBranchName": "main",
    "headBranchName": "renovate/node-16.x",
    "labels": [
      "cla: yes"
    ],
    "title": "chore(deps): update dependency @types/node to v16",
    "body": "[![WhiteSource Renovate](https://app.renovatebot.com/images/banner.svg)](https://renovatebot.com)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [@types/node](https://togithub.com/DefinitelyTyped/DefinitelyTyped) | [`^14.0.0` -> `^16.0.0`](https://renovatebot.com/diffs/npm/@types%2fnode/14.17.4/16.11.6) | [![age](https://badges.renovateapi.com/packages/npm/@types%2fnode/16.11.6/age-slim)](https://docs.renovatebot.com/merge-confidence/) | [![adoption](https://badges.renovateapi.com/packages/npm/@types%2fnode/16.11.6/adoption-slim)](https://docs.renovatebot.com/merge-confidence/) | [![passing](https://badges.renovateapi.com/packages/npm/@types%2fnode/16.11.6/compatibility-slim/14.17.4)](https://docs.renovatebot.com/merge-confidence/) | [![confidence](https://badges.renovateapi.com/packages/npm/@types%2fnode/16.11.6/confidence-slim/14.17.4)](https://docs.renovatebot.com/merge-confidence/) |\n\n---\n\n### Configuration\n\n📅 **Schedule**: \"after 9am and before 3pm\" (UTC).\n\n🚦 **Automerge**: Disabled by config. Please merge this manually once you are satisfied.\n\n♻ **Rebasing**: Renovate will not automatically rebase this PR, because other commits have been found.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update again.\n\n---\n\n - [ ] <!-- rebase-check -->If you want to rebase/retry this PR, click this checkbox.\n\n---\n\nThis PR has been generated by [WhiteSource Renovate](https://renovate.whitesourcesoftware.com). View repository job log [here](https://app.renovatebot.com/dashboard#github/googleapis/repo-automation-bots).",
    "files": [
      "packages/release-trigger/package-lock.json",
      "packages/release-trigger/package.json"
    ]
  },
  {
    "sha": "d2f43552140f5791f4bcd307a91cd1cf9a0c4e52",
    "number": 2785,
    "baseBranchName": "main",
    "headBranchName": "fix-failing-tests",
    "labels": [
      "cla: yes"
    ],
    "title": "fix: tests failed in github actions",
    "body": "Fixes https://github.com/googleapis/repo-automation-bots/issues/2783",
    "files": [
      "packages/owl-bot/test/commit-post-processor-update.ts"
    ]
  },
  {
    "sha": "4a7da3aec226612ace78b14e097875ceee67f2bb",
    "number": 2781,
    "baseBranchName": "main",
    "headBranchName": "only-main",
    "labels": [
      "cla: yes"
    ],
    "title": "fix(owlbot): only run against main branch unless labeled",
    "body": "Avoid running OwlBot unless `owlbot:run` is added, if the PR is not against the default branch.\r\n\r\nFixes #2745",
    "files": [
      "packages/owl-bot/src/owl-bot.ts",
      "packages/owl-bot/test/owl-bot.ts"
    ]
  },
  {
    "sha": "bf01ffc4f45bc8f9de21d6d9c0b7c6bccf72fe70",
    "number": 2780,
    "baseBranchName": "main",
    "headBranchName": "after-token",
    "labels": [
      "cla: yes"
    ],
    "title": "fix: install credentials *after* running the container",
    "body": "",
    "files": [
      "packages/owl-bot/cloud-build/update-pr.yaml",
      "packages/owl-bot/src/bin/commands/commit-post-processor-update.ts"
    ]
  },
  {
    "sha": "64184679e1630d33eb6d55f45e442a7cb518e976",
    "number": 2779,
    "baseBranchName": "main",
    "headBranchName": "update-deps-sync-repo-settings",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update sync-repo-settings deps",
    "body": "ran ./scripts/update-dependencies.sh packages/sync-repo-settings",
    "files": [
      "packages/sync-repo-settings/package-lock.json",
      "packages/sync-repo-settings/package.json"
    ]
  },
  {
    "sha": "d1edf2bac6e7df061b9e70fedbc81e2fcd1bdde1",
    "number": 2778,
    "baseBranchName": "main",
    "headBranchName": "update-deps-trusted-contribution",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update trusted-contribution deps",
    "body": "ran ./scripts/update-dependencies.sh packages/trusted-contribution",
    "files": [
      "packages/trusted-contribution/package-lock.json",
      "packages/trusted-contribution/package.json"
    ]
  },
  {
    "sha": "9205148b7cd700ee93669307953d4d737965126b",
    "number": 2777,
    "baseBranchName": "main",
    "headBranchName": "update-deps-snippet-bot",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update snippet-bot deps",
    "body": "ran ./scripts/update-dependencies.sh packages/snippet-bot",
    "files": [
      "packages/snippet-bot/package-lock.json"
    ]
  },
  {
    "sha": "91d63b013a30d6ca90e97f17d475d32dfc7a5838",
    "number": 2776,
    "baseBranchName": "main",
    "headBranchName": "update-deps-secret-rotator",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update secret-rotator deps",
    "body": "ran ./scripts/update-dependencies.sh packages/secret-rotator",
    "files": [
      "packages/secret-rotator/package-lock.json",
      "packages/secret-rotator/package.json"
    ]
  },
  {
    "sha": "d37ef994fb1084fb93cb0f2b359da4f4b8c1bd01",
    "number": 2775,
    "baseBranchName": "main",
    "headBranchName": "update-deps-release-please",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update release-please deps",
    "body": "ran ./scripts/update-dependencies.sh packages/release-please",
    "files": [
      "packages/release-please/package-lock.json",
      "packages/release-please/package.json"
    ]
  },
  {
    "sha": "785c5a6248c596d21f43d596450413021690fb0f",
    "number": 2774,
    "baseBranchName": "main",
    "headBranchName": "update-deps-release-brancher",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update release-brancher deps",
    "body": "ran ./scripts/update-dependencies.sh packages/release-brancher",
    "files": [
      "packages/release-brancher/package-lock.json",
      "packages/release-brancher/package.json"
    ]
  }
]

exports['GitHub pullRequestIterator handles merged pull requests without files 1'] = [
  {
    "sha": "198808aae0adc62c9ad95452170fd691ac40bd00",
    "number": 2827,
    "baseBranchName": "main",
    "headBranchName": "fix2796",
    "labels": [
      "cla: yes"
    ],
    "title": "fix: owl bot endlessly retried failed owl-bot-lock builds",
    "body": "Fixes https://github.com/googleapis/repo-automation-bots/issues/2796\r\n",
    "files": []
  },
  {
    "sha": "2838dadb5214f5dd3cfa85665428aa4b923a29e8",
    "number": 2824,
    "baseBranchName": "main",
    "headBranchName": "update-deps-trusted-contribution",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update trusted-contribution deps",
    "body": "ran ./scripts/update-dependencies.sh packages/trusted-contribution",
    "files": [
      "packages/trusted-contribution/package-lock.json",
      "packages/trusted-contribution/package.json"
    ]
  },
  {
    "sha": "b689b19c4aa839173d5e1d09fe8e3d271a18ff45",
    "number": 2822,
    "baseBranchName": "main",
    "headBranchName": "update-deps-sync-repo-settings",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update sync-repo-settings deps",
    "body": "ran ./scripts/update-dependencies.sh packages/sync-repo-settings",
    "files": [
      "packages/sync-repo-settings/package-lock.json",
      "packages/sync-repo-settings/package.json"
    ]
  },
  {
    "sha": "d270afdf45d6db550003c00725aea0294d439897",
    "number": 2821,
    "baseBranchName": "main",
    "headBranchName": "update-deps-secret-rotator",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update secret-rotator deps",
    "body": "ran ./scripts/update-dependencies.sh packages/secret-rotator",
    "files": [
      "packages/secret-rotator/package-lock.json",
      "packages/secret-rotator/package.json"
    ]
  },
  {
    "sha": "0b5d2853f75230528c2db9322a8a035219fc3e06",
    "number": 2820,
    "baseBranchName": "main",
    "headBranchName": "update-deps-release-please",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update release-please deps",
    "body": "ran ./scripts/update-dependencies.sh packages/release-please",
    "files": [
      "packages/release-please/package-lock.json",
      "packages/release-please/package.json"
    ]
  },
  {
    "sha": "9faf33d20beb160b257e368a69c425989fae4d1d",
    "number": 2819,
    "baseBranchName": "main",
    "headBranchName": "update-deps-policy",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update policy deps",
    "body": "ran ./scripts/update-dependencies.sh packages/policy",
    "files": [
      "packages/policy/package-lock.json"
    ]
  },
  {
    "sha": "2c8c92d3f154365ca968afa9ac56f0cac3211e18",
    "number": 2818,
    "baseBranchName": "main",
    "headBranchName": "update-deps-release-brancher",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update release-brancher deps",
    "body": "ran ./scripts/update-dependencies.sh packages/release-brancher",
    "files": [
      "packages/release-brancher/package-lock.json",
      "packages/release-brancher/package.json"
    ]
  },
  {
    "sha": "58f88085907b0d54efd9f8499bebddbaba08432f",
    "number": 2817,
    "baseBranchName": "main",
    "headBranchName": "update-deps-object-selector",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update object-selector deps",
    "body": "ran ./scripts/update-dependencies.sh packages/object-selector",
    "files": [
      "packages/object-selector/package-lock.json",
      "packages/object-selector/package.json"
    ]
  },
  {
    "sha": "9390299a1cbb157939309e6682abb7785df2c7a2",
    "number": 2815,
    "baseBranchName": "main",
    "headBranchName": "update-deps-mono-repo-publish",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update mono-repo-publish deps",
    "body": "ran ./scripts/update-dependencies.sh packages/mono-repo-publish",
    "files": [
      "packages/mono-repo-publish/package-lock.json"
    ]
  },
  {
    "sha": "11f32f8b4613618d3ea9aa1cbd482c3b8e47b5ce",
    "number": 2814,
    "baseBranchName": "main",
    "headBranchName": "update-deps-loadtest-bot",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update loadtest-bot deps",
    "body": "ran ./scripts/update-dependencies.sh packages/loadtest-bot",
    "files": [
      "packages/loadtest-bot/package-lock.json",
      "packages/loadtest-bot/package.json"
    ]
  },
  {
    "sha": "c09a32eccb170f772e3dc69c6a035f9fc350a6ef",
    "number": 2813,
    "baseBranchName": "main",
    "headBranchName": "update-deps-label-utils",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update label-utils deps",
    "body": "ran ./scripts/update-dependencies.sh packages/label-utils",
    "files": [
      "packages/label-utils/package-lock.json",
      "packages/label-utils/package.json"
    ]
  },
  {
    "sha": "5a30de169af5376422151806c979d2fc2b3ca3d1",
    "number": 2812,
    "baseBranchName": "main",
    "headBranchName": "update-deps-label-sync",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update label-sync deps",
    "body": "ran ./scripts/update-dependencies.sh packages/label-sync",
    "files": [
      "packages/label-sync/package-lock.json",
      "packages/label-sync/package.json"
    ]
  },
  {
    "sha": "34e061388fefc4e5143319233d9fbbc3f9b11a87",
    "number": 2811,
    "baseBranchName": "main",
    "headBranchName": "update-deps-generate-bot",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update generate-bot deps",
    "body": "ran ./scripts/update-dependencies.sh packages/generate-bot",
    "files": [
      "packages/generate-bot/package-lock.json"
    ]
  },
  {
    "sha": "6ef6b701d975f7ad32be5747f806969eb51d9cf2",
    "number": 2810,
    "baseBranchName": "main",
    "headBranchName": "update-deps-header-checker-lint",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update header-checker-lint deps",
    "body": "ran ./scripts/update-dependencies.sh packages/header-checker-lint",
    "files": [
      "packages/header-checker-lint/package-lock.json",
      "packages/header-checker-lint/package.json"
    ]
  },
  {
    "sha": "350a9c3109d845124b7f43d9d3f96dd1903cd3fa",
    "number": 2791,
    "baseBranchName": "main",
    "headBranchName": "fix-owlbot",
    "labels": [
      "cla: yes"
    ],
    "title": "fix(owl-bot): limit organizations for syncLabels",
    "body": "It mitigates #2750\r\n",
    "files": [
      "packages/owl-bot/src/owl-bot.ts",
      "packages/owl-bot/test/owl-bot.ts"
    ]
  },
  {
    "sha": "7dc3495327012e5b2ab3c93df6abaaf35e08299d",
    "number": 2788,
    "baseBranchName": "main",
    "headBranchName": "renovate/node-16.x",
    "labels": [
      "cla: yes"
    ],
    "title": "chore(deps): update dependency @types/node to v16",
    "body": "[![WhiteSource Renovate](https://app.renovatebot.com/images/banner.svg)](https://renovatebot.com)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [@types/node](https://togithub.com/DefinitelyTyped/DefinitelyTyped) | [`^14.0.0` -> `^16.0.0`](https://renovatebot.com/diffs/npm/@types%2fnode/14.17.4/16.11.6) | [![age](https://badges.renovateapi.com/packages/npm/@types%2fnode/16.11.6/age-slim)](https://docs.renovatebot.com/merge-confidence/) | [![adoption](https://badges.renovateapi.com/packages/npm/@types%2fnode/16.11.6/adoption-slim)](https://docs.renovatebot.com/merge-confidence/) | [![passing](https://badges.renovateapi.com/packages/npm/@types%2fnode/16.11.6/compatibility-slim/14.17.4)](https://docs.renovatebot.com/merge-confidence/) | [![confidence](https://badges.renovateapi.com/packages/npm/@types%2fnode/16.11.6/confidence-slim/14.17.4)](https://docs.renovatebot.com/merge-confidence/) |\n\n---\n\n### Configuration\n\n📅 **Schedule**: \"after 9am and before 3pm\" (UTC).\n\n🚦 **Automerge**: Disabled by config. Please merge this manually once you are satisfied.\n\n♻ **Rebasing**: Renovate will not automatically rebase this PR, because other commits have been found.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update again.\n\n---\n\n - [ ] <!-- rebase-check -->If you want to rebase/retry this PR, click this checkbox.\n\n---\n\nThis PR has been generated by [WhiteSource Renovate](https://renovate.whitesourcesoftware.com). View repository job log [here](https://app.renovatebot.com/dashboard#github/googleapis/repo-automation-bots).",
    "files": [
      "packages/release-trigger/package-lock.json",
      "packages/release-trigger/package.json"
    ]
  },
  {
    "sha": "d2f43552140f5791f4bcd307a91cd1cf9a0c4e52",
    "number": 2785,
    "baseBranchName": "main",
    "headBranchName": "fix-failing-tests",
    "labels": [
      "cla: yes"
    ],
    "title": "fix: tests failed in github actions",
    "body": "Fixes https://github.com/googleapis/repo-automation-bots/issues/2783",
    "files": [
      "packages/owl-bot/test/commit-post-processor-update.ts"
    ]
  },
  {
    "sha": "4a7da3aec226612ace78b14e097875ceee67f2bb",
    "number": 2781,
    "baseBranchName": "main",
    "headBranchName": "only-main",
    "labels": [
      "cla: yes"
    ],
    "title": "fix(owlbot): only run against main branch unless labeled",
    "body": "Avoid running OwlBot unless `owlbot:run` is added, if the PR is not against the default branch.\r\n\r\nFixes #2745",
    "files": [
      "packages/owl-bot/src/owl-bot.ts",
      "packages/owl-bot/test/owl-bot.ts"
    ]
  },
  {
    "sha": "bf01ffc4f45bc8f9de21d6d9c0b7c6bccf72fe70",
    "number": 2780,
    "baseBranchName": "main",
    "headBranchName": "after-token",
    "labels": [
      "cla: yes"
    ],
    "title": "fix: install credentials *after* running the container",
    "body": "",
    "files": [
      "packages/owl-bot/cloud-build/update-pr.yaml",
      "packages/owl-bot/src/bin/commands/commit-post-processor-update.ts"
    ]
  },
  {
    "sha": "64184679e1630d33eb6d55f45e442a7cb518e976",
    "number": 2779,
    "baseBranchName": "main",
    "headBranchName": "update-deps-sync-repo-settings",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update sync-repo-settings deps",
    "body": "ran ./scripts/update-dependencies.sh packages/sync-repo-settings",
    "files": [
      "packages/sync-repo-settings/package-lock.json",
      "packages/sync-repo-settings/package.json"
    ]
  },
  {
    "sha": "d1edf2bac6e7df061b9e70fedbc81e2fcd1bdde1",
    "number": 2778,
    "baseBranchName": "main",
    "headBranchName": "update-deps-trusted-contribution",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update trusted-contribution deps",
    "body": "ran ./scripts/update-dependencies.sh packages/trusted-contribution",
    "files": [
      "packages/trusted-contribution/package-lock.json",
      "packages/trusted-contribution/package.json"
    ]
  },
  {
    "sha": "9205148b7cd700ee93669307953d4d737965126b",
    "number": 2777,
    "baseBranchName": "main",
    "headBranchName": "update-deps-snippet-bot",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update snippet-bot deps",
    "body": "ran ./scripts/update-dependencies.sh packages/snippet-bot",
    "files": [
      "packages/snippet-bot/package-lock.json"
    ]
  },
  {
    "sha": "91d63b013a30d6ca90e97f17d475d32dfc7a5838",
    "number": 2776,
    "baseBranchName": "main",
    "headBranchName": "update-deps-secret-rotator",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update secret-rotator deps",
    "body": "ran ./scripts/update-dependencies.sh packages/secret-rotator",
    "files": [
      "packages/secret-rotator/package-lock.json",
      "packages/secret-rotator/package.json"
    ]
  },
  {
    "sha": "d37ef994fb1084fb93cb0f2b359da4f4b8c1bd01",
    "number": 2775,
    "baseBranchName": "main",
    "headBranchName": "update-deps-release-please",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update release-please deps",
    "body": "ran ./scripts/update-dependencies.sh packages/release-please",
    "files": [
      "packages/release-please/package-lock.json",
      "packages/release-please/package.json"
    ]
  },
  {
    "sha": "785c5a6248c596d21f43d596450413021690fb0f",
    "number": 2774,
    "baseBranchName": "main",
    "headBranchName": "update-deps-release-brancher",
    "labels": [
      "cla: yes"
    ],
    "title": "deps: update release-brancher deps",
    "body": "ran ./scripts/update-dependencies.sh packages/release-brancher",
    "files": [
      "packages/release-brancher/package-lock.json",
      "packages/release-brancher/package.json"
    ]
  }
]

exports['GitHub pullRequestIterator uses REST API if files are not needed 1'] = [
  {
    "headBranchName": "feature-branch",
    "baseBranchName": "main",
    "number": 123,
    "title": "some title",
    "body": "some body",
    "labels": [
      "label 1",
      "label 2"
    ],
    "files": [],
    "sha": "abc123"
  },
  {
    "headBranchName": "feature-branch",
    "baseBranchName": "main",
    "number": 124,
    "title": "merged title 2 ",
    "body": "merged body 2",
    "labels": [
      "label 1",
      "label 2"
    ],
    "files": [],
    "sha": "abc123"
  }
]

exports['GitHub updatePullRequest handles auto-merge option 1'] = {
  "query": "query pullRequestId($owner: String!, $repo: String!, $pullRequestNumber: Int!) {\n        repository(name: $repo, owner: $owner) {\n          pullRequest(number: $pullRequestNumber) {\n            id\n          }\n        }\n      }",
  "variables": {
    "owner": "fake",
    "repo": "fake",
    "pullRequestNumber": 123
  }
}

exports['GitHub updatePullRequest handles auto-merge option 2'] = {
  "query": "mutation mutateEnableAutoMerge($pullRequestId: ID!, $mergeMethod: PullRequestMergeMethod) {\n      enablePullRequestAutoMerge(\n        input: {pullRequestId: $pullRequestId, mergeMethod: $mergeMethod}\n      ) {\n        pullRequest {\n          autoMergeRequest{\n            authorEmail,\n            commitBody,\n            commitHeadline,\n            enabledAt,\n            enabledBy {\n              login\n            },\n            mergeMethod,\n            pullRequest{\n              id\n            }\n          }\n        }\n      }\n    }",
  "variables": {
    "pullRequestId": "someIdForPR123",
    "mergeMethod": "REBASE"
  }
}

exports['GitHub updatePullRequest merges release PR directly when an auto-merge given but "protected branch rules not configured for this branch" 1'] = {
  "query": "query pullRequestId($owner: String!, $repo: String!, $pullRequestNumber: Int!) {\n        repository(name: $repo, owner: $owner) {\n          pullRequest(number: $pullRequestNumber) {\n            id\n          }\n        }\n      }",
  "variables": {
    "owner": "fake",
    "repo": "fake",
    "pullRequestNumber": 123
  }
}

exports['GitHub updatePullRequest merges release PR directly when an auto-merge given but PR in "clean status" 1'] = {
  "query": "query pullRequestId($owner: String!, $repo: String!, $pullRequestNumber: Int!) {\n        repository(name: $repo, owner: $owner) {\n          pullRequest(number: $pullRequestNumber) {\n            id\n          }\n        }\n      }",
  "variables": {
    "owner": "fake",
    "repo": "fake",
    "pullRequestNumber": 123
  }
}