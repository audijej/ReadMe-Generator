

function generateMarkdown(data) {
console.log(data);

  return `

# ${data.title}

# Description
###${data.description}

#Table of Contents
###${data.tableContents}

#Application

###${data.application}

#Usage
####${data.usage}

#Contributions
###${data.contributions}

#License
###${data.license}

`;
}

module.exports = generateMarkdown;
