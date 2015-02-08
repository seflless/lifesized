# Publish a new module version

      npm version <patch | minor | major>
      git push origin master --tags
      npm publish

# Update the Github page

      git checkout gh-pages
      git merge master
      git push
      git checkout master

# Todo
 - [ ] Make sure I understand npm's auth model for specifying contributors.
