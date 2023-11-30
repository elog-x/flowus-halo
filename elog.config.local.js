module.exports = {
  write: {
    platform: 'flowus',
    flowus: {
      tablePageId: process.env.FLOWUS_TABLE_PAGE_ID,
    },
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './docs',
      filename: 'title',
      format: 'markdown',
      frontMatter: {
        enable: true,
        exclude: ['cover']
      }
    }
  },
  image: {
    enable: true,
    platform: 'local',
    local: {
      outputDir: './images',
      pathFollowDoc: true,
    }
  }
}
