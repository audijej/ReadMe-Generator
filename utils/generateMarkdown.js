

function generateMarkdown(data) {
console.log(data);

  return `

![Generic badge](https://img.shields.io/badge/<SUBJECT>-<STATUS>-<COLOR>.svg)


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
