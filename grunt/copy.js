// Copies remaining files to places other tasks can use
module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= config.app %>',
      dest: '<%= config.dist %>',
      src: [
        'content/**/**.*',
        '.htaccess',
        'images/{,*/}*.webp',
        // '{,*/}*.html',
        'styles/fonts/{,*/}*.*'
      ]
    }]
  },
  deploy: {
      files: [{
        expand: true,
        cwd: '<%= config.dist %>',
        dest: 'platforms/www',
        src: ['**/*']
      }]
  }
};
