const readline = require('readline');

function progressPlugin() {
  let totalFiles = 0;
  let processedFiles = 0;
  let currentFile = '';

  function updateProgress() {
    const progress = Math.floor((processedFiles / totalFiles) * 100);
    const progressBar = '='.repeat(Math.floor(progress / 2)) + ' '.repeat(50 - Math.floor(progress / 2));
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(`\r[${progressBar}] ${progress}% | 正在处理: ${currentFile}`);
  }

  return {
    name: 'progress',
    buildStart() {
      console.log('\n开始构建...');
    },
    transform(code, id) {
      if (totalFiles === 0) {
        // 初始化时获取总文件数
        this.getModuleIds().then(ids => {
          totalFiles = ids.length;
        });
      }
      currentFile = id.split('/').pop();
      processedFiles++;
      updateProgress();
      return null;
    },
    buildEnd() {
      console.log('\n构建完成！');
    }
  };
}

module.exports = progressPlugin;