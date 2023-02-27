// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Description] (#description)
  * [Installation] (#installation)
  * [Usage] (#usage)
  * [Licence] (#licence)
  * [Contributing] (#contributing)
  * [Tests] (#tests)
  * [Questions] (#questions)
  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}

  \`\`\`
  ## Usage
  To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it.
  Then, using the relative filepath, add it to your README using the following syntax:
  \`\`\`md
  ![alt text](assets/images/${data.usage})
  \`\`\`
  ## Licence
  ${data.licence}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.username}
  


`;
}

module.exports = generateMarkdown;
