# json-merge-example

Quick example of merging two JSON files.

Also includes watching with `json-server`.

Merge behavior is (almost) the same as git, except for DELETE:

    - added lines in new branch are added to merge
    - modified lines by new branch overwrite existing in the merge
    - removed lines in a new branch ARE NOT removed in the merge. Instead, DELETE operations coming from the cloud-side should write `null` to whatever property (at any level of the JSON tree) and the consumer of db.json can handle the `null` cases. If it is a top-level endpoint (e.g., `/metadata`) it needs to be replaced with an empty object {} instead of `null` due to json-server issues

Per the API documentation, we do have the option to specfiy custom behavior which could enable this.
But probably not needed, since `null` should be fine.