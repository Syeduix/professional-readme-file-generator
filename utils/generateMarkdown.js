// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Title
${data.title}

## Sections entitled
${data.entitled}

## Description
${data.Description}

## Table of Contents
${data.table}

## Installation
${data.installation}

## Usage
${data.Usage}

## License
${data.license}

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
