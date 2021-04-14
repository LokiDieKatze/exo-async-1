const fsPromises = require('fs/promises')
//const fs = require('fs')

const path = process.argv[2]

const copy = async () => {
  try {
    const stats = await fsPromises.stat(path)
    console.log(stats.isDirectory(path))

    const folderContent = await fsPromises.readdir(path)
    console.log(folderContent)

    await fsPromises.mkdir(`${path}` + '-copy')
    for (i = 0; i < folderContent.length; ++i) {
      fsPromises.copyFile(path + '/' + folderContent[i], `${path}` + '-copy' + '/' + folderContent[i])
    }

  } catch (e) {
    console.log(e.message)
  }
}

copy()