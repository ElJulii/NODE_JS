const fs = require('node:fs/promises')
const path = require('node:path')

const folderLocation = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folderLocation)
  } catch {
    console.error('The folder could not be read!')
    process.exit(1)
  }

  const filePromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath) // stat gives the file information
    } catch {
      console.error('There was an error with the stats!')
      process.exit(1)
    }
    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size / 1000
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType} ----- ${file} ----- ${fileSize.toString() + 'kb'} ----- ${fileModified}`
  })

  const filesInfo = await Promise.all(filePromises)
  filesInfo.forEach(filesInfo => console.log(filesInfo))
}

ls(folderLocation)
