Package.describe({
  // Short two-sentence summary.
  summary: "PureCSS Meteor Package",
  // Version number.
  version: "0.5.0",
  // Optional.  Default is package directory name.
  name: "lampe:purecss",
  // Optional github URL to your source repository.
  git: "https://github.com/lampe/meteor-purecss.git",
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.addFiles("pure-min.css","client");
});
