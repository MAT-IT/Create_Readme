
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [GitHub username](#GitHub username)
- [email address](#email address)

## Installation
${data.installation}

## Usage
${data.usage}

## licence
${data.licence}

## contributing
${data.contributing}

## GitHub username
${data.github}

## email address
${data.email}
`;
}

module.exports = generateMarkdown;

