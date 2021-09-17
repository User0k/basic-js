/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  const renamedFiles = [];
  let idx = 1;

  for (let name of names) {
    if (renamedFiles.every(file => file !== name)) {
      renamedFiles.push(name);
    } else if (renamedFiles.some(file => file === `${name}(${idx})`)) {
      renamedFiles.push(`${name}(${++idx})`);
    } else {
      renamedFiles.push(`${name}(${idx})`);
    }
  }

  return renamedFiles;
}