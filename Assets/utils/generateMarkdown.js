// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [!GitHub Licence](https://img.shields.io/badge/license-${data.license}-blue.svg)
  ## Description
  ${data.description}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licence](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}

  \`\`\`
  ## Usage
  See below for screenshot of project:
  ![alt text](${data.usage})
  ## Licence
  This project is licensed under the ${data.license} license.
  ## Contributing
  ${data.contributing}
  ## Tests
  To run tests, run the following command:
  \`\`\`
  ${data.tests}
  \`\`\`
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username})
  
`;
}

module.exports = generateMarkdown;
