

function generateMarkdown(data) {
console.log(data);

  return `

![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)

:100:

# _${data.title}_

## Description

#### ${data.description}

## Table of Contents

#### ${data.contents}

## Application

#### ${data.application}

## Usage

#### ${data.usage}

## Contributions

#### ${data.contributions}

## License

### ${data.license}

![alt text](http://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
