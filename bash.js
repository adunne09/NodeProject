const cat = require('./cat')


process.stdout.write('prompt > ');

process.stdin.on(('arg'), (arg) => {
    const fileName = arg.toString().trim();
    cat(fileName);
});