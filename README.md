== Sample project ==

This is a sample project that aims to demostrate how to use git for collaborative
tasks.

=== Tasks ===

1) Create a branch where `target` component uses 20 as P factor. Check that this
change affected the speed of currentTemperature adjustment and commit changes.

2) Merge this branch to master.

==== Simulate merge conflict ====
3) Create `branch1` starting from `master`. In this branch wrap
`control` and `target` components in `<div class="col-md-6 col-sm-12">` to make them
appear in two columns on desktops and in one column on mobile devices

4) Create `branch2` starting from master where `app` component uses `templateUrl` instead of `template`.
This will require to create new partial html and reference it from partial directory.

5) Merge branch1 into master

6) Try merging branch2 into master... and resolve a conflict
