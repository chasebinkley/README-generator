// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license === "Apache") {
    badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === "Boost") {
    badge = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
  } else if (license === "Eclipse") {
    badge = `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`;
  } else if (license === "IBM") {
    badge = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`;
  } else if (license === "MIT") {
    badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Mozilla") {
    badge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "Apache") {
    licenseLink = `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "Boost") {
    licenseLink = `(https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license === "Eclipse") {
    licenseLink = `(https://www.eclipse.org/legal/epl-2.0/)`;
  } else if (license === "IBM") {
    licenseLink = `(https://opensource.org/licenses/IPL-1.0)`;
  } else if (license === "MIT") {
    licenseLink = `(https://opensource.org/licenses/MIT)`;
  } else if (license === "Mozilla") {
    licenseLink = `(https://opensource.org/licenses/MPL-2.0)`;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license === "None") {
    licenseSection = "";
  } else {
    licenseSection = `License: ${license} `;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## ${renderLicenseSection(data.license)}  ${renderLicenseBadge(data.license)}
### ${renderLicenseLink(data.license)}

## Description:
${data.description}

## Table of contents:
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributing)
* [Testing](#testing)
* [Questions](#questions)

## Installation:
${data.installation}
## Usage:
${data.usage}
## Contribution:
${data.contributing}
## Testing:
${data.tests}
## Questions:
- GitHub: [${data.username}](https://github.com/${data.github})
- Email: [${data.email}](mailto:user@example.com) `;
}

module.exports = generateMarkdown;
