const path = require('path');
const fs = require('fs');

module.exports = function(plop) {
    plop.setGenerator('component', {
        description: 'Generate a new component',
        prompts: [{
                type: 'input',
                name: 'name',
                message: 'Enter component name:'
            },
            {
                type: 'list',
                name: 'directory',
                message: 'Select directory:',
                choices: function() {
                    const currentDir = process.cwd();
                    const srcDir = path.resolve(__dirname, 'src');
                    const relativePath = path.relative(srcDir, currentDir);
                    const dirs = fs.readdirSync(srcDir, { withFileTypes: true })
                        .filter(dirent => dirent.isDirectory())
                        .map(dirent => dirent.name);
                    dirs.push(relativePath || 'components'); // Add relative path or default
                    return dirs;
                }
            }
        ],
        actions: function(data) {
            const directory = data.directory;
            const actions = [{
                    type: 'add',
                    path: `src/${directory}/{{name}}/{{name}}.tsx`,
                    templateFile: 'src/plop-templates/Component.tsx.hbs'
                },
                {
                    type: 'add',
                    path: `src/${directory}/{{name}}/{{name}}.css`,
                    templateFile: 'src/plop-templates/Component.css.hbs'
                },
                {
                    type: 'add',
                    path: `src/${directory}/{{name}}/{{name}}.stories.tsx`,
                    templateFile: 'src/plop-templates/Component.stories.tsx.hbs'
                }
            ];
            return actions;
        }
    });
};