const DefaultActivityData = [
  {
    "type": "PushEvent",
    "actor": {
      "id": 60882425,
      "login": "Jonaspng",
      "display_login": "Jonaspng",
      "avatar_url": "https://avatars.githubusercontent.com/u/60882425?v=4",
      "url": "https://api.github.com/users/Jonaspng"
    },
    "repo": {
      "id": 123456789,
      "name": "Jonaspng/coursemology2",
      "url": "https://api.github.com/repos/Jonaspng/coursemology2"
    },
    "payload": {
      "push_id": "f9d7bb6d1284da3e",
      "size": 1,
      "commits": [
        {
          "sha": "f9d7bb6d1284da3effaa50682d06e4b15c391542",
          "message": "test(rspec): modify rag-wise test cases\n\n- add docx and ipynb file for testing\n- modify test cases to account for new file types and disabling of generate reply button for AI generated post",
          "author": {
            "name": "Jonaspng",
            "email": "jonaspng@hotmail.com"
          },
          "url": "https://github.com/Jonaspng/coursemology2/commit/f9d7bb6d1284da3effaa50682d06e4b15c391542"
        }
      ]
    },
    "public": true,
    "created_at": "2025-03-21T08:55:39Z"
  },
  {
    "type": "PushEvent",
    "actor": {
      "id": 60882425,
      "login": "Jonaspng",
      "display_login": "Jonaspng",
      "avatar_url": "https://avatars.githubusercontent.com/u/60882425?v=4",
      "url": "https://api.github.com/users/Jonaspng"
    },
    "repo": {
      "id": 123456789,
      "name": "Jonaspng/coursemology2",
      "url": "https://api.github.com/repos/Jonaspng/coursemology2"
    },
    "payload": {
      "push_id": "7d0cf53399673b8f",
      "size": 1,
      "commits": [
        {
          "sha": "7d0cf53399673b8f3a8b882ab5548c2a12842b21",
          "message": "feat(UI): update UI for rag-wise upgrades\n\n- add generate reply button for all forum posts\n- disable generate reply button for AI generated posts\n- update translation for supported file types",
          "author": {
            "name": "Jonaspng",
            "email": "jonaspng@hotmail.com"
          },
          "url": "https://github.com/Jonaspng/coursemology2/commit/7d0cf53399673b8f3a8b882ab5548c2a12842b21"
        }
      ]
    },
    "public": true,
    "created_at": "2025-03-21T08:09:10Z"
  },
  {
    "type": "PushEvent",
    "actor": {
      "id": 60882425,
      "login": "Jonaspng",
      "display_login": "Jonaspng",
      "avatar_url": "https://avatars.githubusercontent.com/u/60882425?v=4",
      "url": "https://api.github.com/users/Jonaspng"
    },
    "repo": {
      "id": 123456789,
      "name": "Jonaspng/coursemology2",
      "url": "https://api.github.com/repos/Jonaspng/coursemology2"
    },
    "payload": {
      "push_id": "b7426ea9929a3834",
      "size": 1,
      "commits": [
        {
          "sha": "b7426ea9929a3834b133c0305f2e1e06303c1f2f",
          "message": "feat(rag-wise): rag-wise upgrades\n\n- add current forum topic history (latest 5 posts) to LLM for context\n- add discussion_extraction_service to encapsulate discussion extraction logic for topic history and forum discussion imports\n- increase text chunk size to 800\n- update prompt template\n- add auto response for all new student posts\n- add generate reply button for all forum posts but disable button for AI generated posts",
          "author": {
            "name": "Jonaspng",
            "email": "jonaspng@hotmail.com"
          },
          "url": "https://github.com/Jonaspng/coursemology2/commit/b7426ea9929a3834b133c0305f2e1e06303c1f2f"
        }
      ]
    },
    "public": true,
    "created_at": "2025-03-21T08:08:21Z"
  },
  {
    "type": "PushEvent",
    "actor": {
      "id": 60882425,
      "login": "Jonaspng",
      "display_login": "Jonaspng",
      "avatar_url": "https://avatars.githubusercontent.com/u/60882425?v=4",
      "url": "https://api.github.com/users/Jonaspng"
    },
    "repo": {
      "id": 123456789,
      "name": "Jonaspng/coursemology2",
      "url": "https://api.github.com/repos/Jonaspng/coursemology2"
    },
    "payload": {
      "push_id": "ffa661bf66867bac",
      "size": 1,
      "commits": [
        {
          "sha": "ffa661bf66867bac277b6fb5efede41693f0b886",
          "message": "test(rspec): modify topic management test case\n\n- add expect toastify to check that success message actually pops up",
          "author": {
            "name": "Jonaspng",
            "email": "jonaspng@hotmail.com"
          },
          "url": "https://github.com/Jonaspng/coursemology2/commit/ffa661bf66867bac277b6fb5efede41693f0b886"
        }
      ]
    },
    "public": true,
    "created_at": "2025-03-21T13:49:31Z"
  },
  {
    "type": "PushEvent",
    "actor": {
      "id": 60882425,
      "login": "Jonaspng",
      "display_login": "Jonaspng",
      "avatar_url": "https://avatars.githubusercontent.com/u/60882425?v=4",
      "url": "https://api.github.com/users/Jonaspng"
    },
    "repo": {
      "id": 123456789,
      "name": "Jonaspng/coursemology2",
      "url": "https://api.github.com/repos/Jonaspng/coursemology2"
    },
    "payload": {
      "push_id": "1b5321c37d1f1417",
      "size": 1,
      "commits": [
        {
          "sha": "1b5321c37d1f1417e6711c4cab3d29ce8352e9c3",
          "message": "fix(rag-wise-forum): fix topic creation when rag-wise is not enabled\n\n- error message will pop up when creating new forum topic\n- error arises due to nil error in ragwise settings for courses where rag wise is not enabled",
          "author": {
            "name": "Jonaspng",
            "email": "jonaspng@hotmail.com"
          },
          "url": "https://github.com/Jonaspng/coursemology2/commit/1b5321c37d1f1417e6711c4cab3d29ce8352e9c3"
        }
      ]
    },
    "public": true,
    "created_at": "2025-03-21T13:07:13Z"
  }
]

export default DefaultActivityData;